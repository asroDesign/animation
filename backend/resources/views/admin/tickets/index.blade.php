@extends('admin.layouts.app')
@section('head_scripts')
    <title>@lang('page_title.Admin.ticket_page_title')</title>
@endsection
@section('content')
    <div class="tp_main_content_wrappo">
        <div class="tp_tab_wrappo">
            <ul>
                <li class="active"><a href="{{ route('admin.tickets.index') }}">Manage Tickets</a></li>

            </ul>
        </div>
        <div class="tp_tab_content">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="tp_table_box tp_table_pages">
                        <div class="table-responsive">
                            <table id="example" class="table">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Priority</th>
                                    <th>Department</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                @if ($tickets->count() > 0)
                                    @foreach ($tickets as $key => $ticket)
                                        <tr id="table_row_{{ $ticket->id }}">
                                            <td>{{ ++$key }}</td>
                                            <td><a href="{{ route('admin.tickets.show', $ticket) }}">{{ $ticket->title }}</a></td>
                                            <td>{{ $ticket->priority }}</td>
                                            <td>{{ $ticket->department }}</td>
                                            <td>{{ $ticket->status }}</td>
                                            <td>
                                                <ul>
                                                    <li>
                                                        <a href="{{ route('admin.tickets.show', $ticket) }}" class="tp_edit tp_tooltip" title="View">
                                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                                            <span class="tp_tooltiptext">
                                                                <p>View</p>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <form action="{{ route('admin.tickets.transfer', $ticket) }}" method="POST" style="display: flex;">
                                                            @csrf
                                                            <select name="to_department" class="form-control" style="display: inline; width: auto;">
                                                                <option value="management">Management</option>
                                                                <option value="sale">Sale</option>
                                                                <option value="other">Other</option>
                                                            </select>
                                                            <button type="submit" class="tp_edit tp_tooltip" title="Transfer">
                                                                <i class="fa fa-exchange" aria-hidden="true"></i>
                                                                <span class="tp_tooltiptext">
                                                                    <p>Transfer</p>
                                                                </span>
                                                            </button>
                                                        </form>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    @endforeach
                                @else
                                    <tr class="text-center">
                                        <td colspan="6">No Record Found.</td>
                                    </tr>
                                @endif
                                </tbody>
                            </table>
                            <div class="tp-pagination-wrapper">
                                {{ $tickets->links() }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
