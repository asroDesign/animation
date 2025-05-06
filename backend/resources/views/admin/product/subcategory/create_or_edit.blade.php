@extends('admin.layouts.app')
@section('head_scripts')
    <title>@lang('page_title.Admin.product_sub_category_title')</title>
@endsection
@section('content')
    <div class="tp_main_content_wrappo">
        <div class="tp_tab_wrappo">
            <ul>
                <li class="active">
                    <a href="{{ route('admin.subcategory.create') }}">Add Sub Category</a>
                </li>
                <li><a href="{{ route('admin.subcategory.index') }}">Manage Sub Categories</a>
                </li>
            </ul>
        </div>
        <div class="tp_tab_content tp_subcategory_content">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <form id="product-sub-category-form" action="{{ route('admin.subcategory.store') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="tp_catset_box">
                            <div class="row">
                                <div class="col-lg-6 col-md-12">
                                    <div class="tp_form_wrapper">
                                        <label class="mb-2">Sub Category name<sup>*</sup></label>
                                        <input type="text" class="form-control generate-slug" name='name'
                                            placeholder="Enter Sub Category" value="{{ @$all_subcat->name }}">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="tp_form_wrapper">
                                        <label class="mb-2">Sub Category Slug<sup>*</sup></label>
                                        <input class="form-control append-slug" type="text" name='slug'
                                            placeholder="Enter Sub Category Slug" value="{{ @$all_subcat->slug }}">
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="tp_form_wrapper">
                                        <label class="mb-2">Select Parent Category <sup>*</sup></label>
                                        <div class="tp_custom_select tp_product_offer">
                                            <select class="form-control" name="category_id">
                                                <option value="">Select Category</option>
                                                @foreach ($all_category as $value)
                                                    <option value="{{ $value->id }}"
                                                        @if ($value->id == @$all_subcat->category_id) selected @endif>
                                                        {{ $value->name }}
                                                    </option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="tp_form_wrapper tp_form_textarea">
                                        <label class="mb-2">Short Description<sup>*</sup></label>
                                        <textarea rows="5" cols="50" spellcheck="true" class="form-textarea" placeholder="Enter Short Description"
                                                  name="short_desc">{{ @$all_subcat->short_desc }}</textarea>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="tp_form_wrapper tp_form_mb">
                                        <label class="mb-2">Description<sup>*</sup></label>
                                        <textarea rows="8" spellcheck="true" class="form-textarea" placeholder="Enter Description" name="description"
                                                  id="theme-editor" placefolder="Paste HTML content here">{{ @$all_subcat->desc }}</textarea>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="tp_seo_head">
                                        <h5>Category Options</h5>
                                        <hr>
                                    </div>
                                    <div id="p-d-body">
                                        <div class="g-items">
                                            @if (@$all_subcat->features)
                                                @foreach (@$all_subcat->features as $key => $val)
                                                    <div class="row align-items-center child-items" id="p-field" data-number="{{$key}}">
                                                        <div class="col-md-5">
                                                            <div class="tp_form_wrapper">
                                                                <label class="mb-2">Title</label>
                                                                <input type="text" class="form-control" placeholder="Enter title" name="features[{{$key}}][title]"
                                                                       value="{{ @$val['title'] }}" placeholder="Enter title">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5">
                                                            <div class="tp_form_wrapper">
                                                                <label class="mb-2">Caption</label>
                                                                <input type="text" class="form-control" placeholder="Enter caption" name="features[{{$key}}][caption]"
                                                                       value="{{ @$val['caption'] }}" placeholder="Enter caption">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <div class="field-button add_btn tp_form_wrapper">
                                                                @if ($loop->first)
                                                                    <button type="button" id="add_more_product_detail"
                                                                            class="btn-sm btn-primary float-end mt-4"><i
                                                                                class="fa fa-plus"></i>
                                                                    </button>
                                                                @else
                                                                    <button type="button"
                                                                            class="btn-sm btn-danger float-end mt-4 remove-p-d"><i
                                                                                class="fa fa-trash"></i>
                                                                    </button>
                                                                @endif
                                                            </div>
                                                        </div>
                                                    </div>
                                                @endforeach
                                            @else
                                                <div class="row align-items-center child-items " id="p-field" data-number="0">
                                                    <div class="col-md-5">
                                                        <div class="tp_form_wrapper">
                                                            <label class="mb-2">Title</label>
                                                            <input type="text" class="form-control" name="features[0][title]"
                                                                   value="" placeholder="Enter Title">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <div class="tp_form_wrapper">
                                                            <label class="mb-2">Value</label>
                                                            <input type="text" class="form-control" name="features[0][caption]"
                                                                   value="" placeholder="Enter caption">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-2">
                                                        <div class="field-button tp_form_wrapper">
                                                            <button type="button" id="add_more_product_detail"
                                                                    class="btn-sm btn-primary float-end mt-4"><i
                                                                        class="fa fa-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>


                                            @endif
                                        </div>
                                        <div class="g-more hide">
                                                <div class="row align-items-center child-items " id="p-field" data-number="__number__">
                                                    <div class="col-md-5">
                                                        <div class="tp_form_wrapper">
                                                            <label class="mb-2">Title</label>
                                                            <input type="text" class="form-control" name="features[__number__][title]"
                                                                   value="" placeholder="Enter Title">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <div class="tp_form_wrapper">
                                                            <label class="mb-2">Value</label>
                                                            <input type="text" class="form-control" name="features[__number__][caption]"
                                                                   value="" placeholder="Enter caption">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-2">
                                                        <div class="field-button tp_form_wrapper">
                                                            <button type="button" id="add_more_product_detail"
                                                                    class="btn-sm btn-primary float-end mt-4"><i
                                                                        class="fa fa-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div class="tp_form_wrapper">
                                    <label class="mb-2">Category Banner <sup> (Max size 1 MB)</sup></label>
                                    <input class="form-control" type="file" name="banner" id="product_image">
                                </div>

                                <div class="tp_form_wrapper tp_proimg2 @if (empty($all_subcat->banner_image)) d-none @endif"
                                     id="product_image_prev">
                                    @if (isset($all_subcat->banner_image))

                                        <img src="{{ url('storage/'.@$all_subcat->banner_image) }}" alt="product-img" class="product-step2img">
                                    @endif
                                </div>

                                <div class="tp_form_wrapper mt-4">
                                    <label class="mb-2">Previews Video
                                        <sup>(Max size
                                            10 MB)</sup></label>
                                    <input class="form-control" type="file" name="video_file"
                                           id="product_multi_images">
                                </div>
                                <div
                                        class="tp_form_wrapper tp_proimg2_multi @if (empty($all_subcat->file)) d-none @endif">
                                    <div class="row">
                                        @if (!empty($all_subcat->file))
                                            <div class="col-md-2">
                                                <div class="tp_proimg_multisel">
                                                    @if(pathinfo(\Illuminate\Support\Facades\Storage::url($all_subcat->file))['extension']!='gif')
                                                        <video src="{{ \Illuminate\Support\Facades\Storage::url($all_subcat->file) }}" autoplay >
                                                        </video>
                                                    @else
                                                        <img src="{{ \Illuminate\Support\Facades\Storage::url($all_subcat->file) }}"  >
                                                        </img>
                                                    @endif


                                                </div>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="row" id="product_multi_images_prev"></div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="tp_form_wrapper">
                                        <div class="checkbox">
                                            <label><input class="form-control" type="checkbox" name="is_featured"
                                                    value="1" @if (isset($all_subcat->is_featured) && $all_subcat->is_featured == 1) checked @endif><i
                                                    class="input-helper"></i>Is
                                                Featured</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="tp_subcat_btn">
                                        <button type="submit" class="tp_btn"
                                            id="product-sub-category-form-btn">Add</button>
                                    </div>
                                    <input type="hidden" value="{{ @$all_subcat->id }}" name="sub_id">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
    <script src="{{ asset('admin-theme/my_assets/js/form-validate.js') }}"></script>
    <script>
        $("#add_more_product_detail").click(function(e) {
            let number = $(this).closest(".tp_catset_box").find("#p-d-body .g-items .child-items:last-child").data("number");
            if (number === void 0)
                number = 0;
            else
                number++;
            let extra_html = $(this).closest("#p-d-body").find(".g-more").html();
            extra_html = extra_html.replace(/__name__=/gi, "name=");
            extra_html = extra_html.replace(/__number__/gi, number);
            $(this).closest("#p-d-body").append(extra_html);
        });
        // $(document).on('click', '#add_more_product_detail', function() {
        //     var html = $('#p-field').clone().find("input").val("").end();
        //
        //     html.find('.field-button').html(`<button type="button"
        //                                     class="btn-sm btn-danger float-end mt-4 remove-p-d"><i
        //                                         class="fa fa-trash"></i>
        //                                 </button>`);
        //     $('#p-d-body').append(html);
        // });

        $(document).on('click', '.remove-p-d', function() {
            $(this).closest('.child-items').remove();
        });
    </script>
@endsection
