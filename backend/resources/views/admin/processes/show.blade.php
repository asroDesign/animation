@extends('admin.layouts.app')

@section('head_scripts')
    <title>@lang('page_title.Admin.testimonial_page_title')</title>
    <link href="{{ asset('admin-theme/assets/css/timeline.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div class="container my-4">
        <h1 class="mb-3">Process #{{ $process->id }}</h1>
        <p><strong>User:</strong> {{ $process->user->full_name }}</p>
        <p class="border-danger border-1 p-3 border-start my-3">
            <strong>Description:</strong><br>
            {!! $process->description !!}
        </p>
        <p><strong>Status:</strong> {{ $process->status }}</p>

        <h2 class="my-4">Stages</h2>
        <div class="timeline">
            @foreach ($process->stages as $index => $stage)
                <div class="timeline-item">
                    <div class="timeline-icon">
                        @if ($stage->stage_type === 'form')
                            <i class="bi bi-list-check text-primary"></i>
                        @elseif ($stage->stage_type === 'invoice')
                            <i class="bi bi-wallet2 text-warning"></i>
                        @elseif ($stage->stage_type === 'file')
                            <i class="bi bi-file-earmark-arrow-up text-success"></i>
                        @endif
                    </div>
                    <div class="timeline-content card shadow-sm">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h5 class="card-title mb-0">Stage {{ $index + 1 }}: {{ ucfirst($stage->stage_type) }}</h5>
                                <span class="badge {{ $stage->requires_payment ? 'bg-danger' : 'bg-secondary' }}">
                                    {{ $stage->requires_payment ? 'Payment Required' : 'No Payment' }}
                                </span>
                            </div>
                            @if ($stage->stage_type === 'form' && $stage->typed)
                                <h6 class="mt-3">Form Responses</h6>
                                <ul class="list-group list-group-flush">
                                    @foreach ($stage->formResponses as $response)
                                        <li class="list-group-item">
                                            <strong>{{ $response->formField->label }}:</strong> {{ $response->value }}
                                        </li>
                                    @endforeach
                                </ul>
                            @elseif ($stage->stage_type === 'invoice' && $stage->typed)
                                <p class="mb-1"><strong>Amount:</strong> {{ $stage->typed->amount }}</p>
                                <p class="mb-0"><strong>Status:</strong>
                                    <span class="badge {{ $stage->typed->status === 'paid' ? 'bg-success' : 'bg-warning' }}">
                                        {{ $stage->typed->status }}
                                    </span>
                                </p>
                            @elseif ($stage->stage_type === 'file' && $stage->typed)
                                <p class="mb-0"><strong>File:</strong>
                                    <a href="{{ asset('storage/' . $stage->typed->path) }}" class="text-primary" target="_blank">
                                        {{ $stage->typed->name }}
                                    </a>
                                </p>
                            @endif
                        </div>
                    </div>
                </div>
            @endforeach
        </div>

        <h2 class="my-4">Add New Stage</h2>
        <form action="{{ route('admin.stages.store', $process) }}" method="POST" enctype="multipart/form-data" class="card p-4 shadow-sm">
            @csrf
            <div class="mb-3">
                <label for="stage_type" class="form-label">Type</label>
                <select name="stage_type" id="stage_type" class="form-select" onchange="toggleFields(this)">
                    <option value="form">Form</option>
                    <option value="invoice">Invoice</option>
                    <option value="file">File</option>
                </select>
            </div>
            <div id="form-fields" class="mb-3" style="display: none;">
                <label for="type_id" class="form-label">Select Form</label>
                <select name="type_id" class="form-select">
                    @foreach (\App\Models\Form::all() as $form)
                        <option value="{{ $form->id }}">{{ $form->name }}</option>
                    @endforeach
                </select>
            </div>
            <div id="invoice-fields" class="mb-3" style="display: none;">
                <label for="amount" class="form-label">Amount</label>
                <input type="number" name="amount" class="form-control">
            </div>
            <div id="file-fields" class="mb-3" style="display: none;">
                <label for="file" class="form-label">Upload File</label>
                <input type="file" name="file" class="form-control">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" name="requires_payment" id="requires_payment" class="form-check-input">
                <label for="requires_payment" class="form-check-label">Requires Payment</label>
            </div>
            <button type="submit" class="btn btn-primary">Add Stage</button>
        </form>
    </div>
@endsection

@section('scripts')
    <script>
        function toggleFields(select) {
            document.getElementById('form-fields').style.display = select.value === 'form' ? 'block' : 'none';
            document.getElementById('invoice-fields').style.display = select.value === 'invoice' ? 'block' : 'none';
            document.getElementById('file-fields').style.display = select.value === 'file' ? 'block' : 'none';
        }
    </script>
@endsection
