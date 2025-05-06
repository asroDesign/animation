@extends('admin.layouts.app')
@section('head_scripts')
    <title>@lang('page_title.Admin.testimonial_page_title')</title>
@endsection
@section('content')
    <div class="tp_main_content_wrappo">
        <div class="tp_tab_wrappo">
            <ul>
                <li class="active"><a href="{{ route('admin.contactus.index',['type'=>'Quote']) }}">Add new Process</a></li>
                <li><a href="{{ route('admin.ProcessStep.index') }}">Manage Process Step</a> </li>
            </ul>
        </div>
        <div class="tp_tab_content">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="border-secondary border-1 p-3 border-start my-lg-2" >
                        {!! $data->description !!}
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
    <script src="{{ asset('admin-theme/my_assets/js/form-validate.js') }}"></script>
@endsection
