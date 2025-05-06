@extends('admin.layouts.app')

@section('head_scripts')
    <title>@lang('page_title.Admin.testimonial_page_title')</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" rel="stylesheet">
    <style>
        .table-container {
            max-width: 960px;
            margin: 0 auto;
        }
        .table th, .table td {
            vertical-align: middle;
        }
        .field-list {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        .field-list li {
            margin-bottom: 0.5rem;
        }
        .badge-field-type {
            font-size: 0.85rem;
        }
        .btn-primary {
            transition: transform 0.2s ease;
        }
        .btn-primary:hover {
            transform: translateY(-2px);
        }
    </style>
@endsection

@section('content')
    <div class="container my-4 table-container">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h1 class="h2 mb-0">Forms</h1>
            <a href="{{ route('admin.forms.create') }}" class="btn btn-primary">
                <i class="bi bi-plus-circle me-2"></i>Create New Form
            </a>
        </div>
        <div class="card shadow-sm">
            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table table-hover table-striped mb-0">
                        <thead class="table-dark">
                        <tr>
                            <th scope="col" class="ps-4">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Fields</th>
                        </tr>
                        </thead>
                        <tbody>
                        @forelse ($forms as $form)
                            <tr>
                                <td class="ps-4">{{ $form->id }}</td>
                                <td>{{ $form->name }}</td>
                                <td>
                                    <ul class="field-list">
                                        @foreach ($form->fields as $field)
                                            <li>
                                                {{ $field->label }}
                                                <span class="badge badge-field-type {{ $field->type === 'text' ? 'bg-primary' : ($field->type === 'textarea' ? 'bg-info' : 'bg-success') }}">
                                                        {{ ucfirst($field->type) }}
                                                    </span>
                                            </li>
                                        @endforeach
                                    </ul>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="3" class="text-center text-muted py-4">
                                    No forms available.
                                </td>
                            </tr>
                        @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection
