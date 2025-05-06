@extends('admin.layouts.app')

@section('head_scripts')
    <title>@lang('page_title.Admin.testimonial_page_title')</title>
    <style>
        .card-header-custom {
            background: linear-gradient(90deg, rgba(203, 187, 215, 0.87) 0%, #8115da 100%);
            color: white;
            border-radius: .5rem .5rem 0 0;
        }

        .card-header-info {
            background: linear-gradient(90deg, #00c6ff 0%, #0072ff 100%);
            color: white;
            border-radius: .5rem .5rem 0 0;
        }

        .card-header-success {
            background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
            color: white;
            border-radius: .5rem .5rem 0 0;
        }

        .card {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            border-radius: .5rem;
        }

        .reply-box-admin {
            background-color: #d0e6ff;
            color: #003366;
        }

        .reply-box-user {
            background-color: #f3f4f6;
        }
    </style>
@endsection

@section('content')
    <div class="container py-4">
        <div class="card mb-4">
            <div class="card-header card-header-custom">
                <h4 class="mb-0">Ticket: {{ $ticket->title }}</h4>
            </div>
            <div class="card-body">
                <p><strong>Description:</strong> {{ $ticket->description }}</p>
                <p><strong>Priority:</strong> {{ $ticket->priority }}</p>
                <p><strong>Department:</strong> {{ $ticket->department }}</p>
                <p><strong>Status:</strong> {{ $ticket->status }}</p>
                <p><strong>Created by:</strong> {{ $ticket->user->name }}</p>
            </div>
        </div>

        <div class="card mb-4">
            <div class="card-header card-header-info">
                <h5 class="mb-0">Transfer History</h5>
            </div>
            <ul class="list-group list-group-flush">
                @foreach ($ticket->transfers as $transfer)
                    <li class="list-group-item">
                        <span class="text-muted small">{{ $transfer->created_at }}</span><br>
                        From <strong>{{ $transfer->from_department }}</strong> to <strong>{{ $transfer->to_department }}</strong>
                    </li>
                @endforeach
            </ul>
        </div>

        <div class="card mb-4">
            <div class="card-header card-header-success">
                <h5 class="mb-0">Conversation</h5>
            </div>
            <div class="card-body" style="max-height: 400px; overflow-y: auto;">
                @foreach ($ticket->replies as $reply)
                    @php
                        $isAdmin = $reply->user->role_type == 'ADMIN' ?? false;
                    @endphp
                    <div class="d-flex mb-3 {{ $isAdmin ? 'justify-content-end' : 'justify-content-start' }}">
                        <div class="p-3 rounded
                        {{ $isAdmin ? 'reply-box-admin text-end' : 'reply-box-user text-start' }}"
                             style="max-width: 75%;">
                            <div class="small fw-bold">
                                {{ $reply->user->name }}
                                <span class="text-muted ms-2">{{ $reply->created_at->format('Y-m-d H:i') }}</span>
                            </div>
                            <div>{{ $reply->message }}</div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>

        <div class="card mb-4">
            <div class="card-header bg-light">
                <h5 class="mb-0">Add a Reply</h5>
            </div>
            <div class="card-body">
                <form action="{{ route('admin.tickets.reply', $ticket) }}" method="POST">
                    @csrf
                    <div class="form-group mb-3">
                        <label for="message">Message</label>
                        <textarea name="message" id="message" class="form-control" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit Reply</button>
                </form>
            </div>
        </div>

        <a href="{{ route('admin.tickets.index') }}" class="btn btn-outline-secondary">Back to Tickets</a>
    </div>
@endsection
