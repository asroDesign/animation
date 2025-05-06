@extends('admin.layouts.app')
@section('head_scripts')
<title>@lang('page_title.Admin.contactus_page_title')</title>
@endsection
@section('content')
<div class="tp_main_content_wrappo">
    <div class="tp_tab_wrappo">
        <h4 class="tp_heading">Contact Us List</h4>
    </div>
    <div class="tp_tab_content">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="tp_table_box">
                    <div class="table-responsive">
                        <table id="example" class="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                    <th>Created At</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @if ($data->count() > 0)
                                    @foreach ($data as $key => $item)
                                        <tr id="table_row_{{ $item->id }}">
                                            <td>{{ ++$key }}</td>
                                            <td>{{ $item->name }}</td>
                                            <td>{{ $item->email }}</td>
                                            <td>{{ $item->message }} </td>
                                            <td>{{ set_date_with_time($item->created_at) }} </td>
                                            <td>
                                                @if($item->type=='Quote')
                                                    <form action="{{route('admin.processes.store',['id'=>$item->id])}}" method="POST">
                                                        @csrf
                                                        <button class="btn btn-outline-primary">
                                                            add to process steps
                                                        </button>
                                                    </form>
                                                @endif
                                            </td>
                                        </tr>
                                    @endforeach
                                @else
                                    <tr class="text-center">
                                        <td colspan="4">No Record Found.</td>
                                    </tr>
                                @endif
                            </tbody>
                        </table>
                        <div class="tp-pagination-wrapper">
                            {{ @$data->links() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
