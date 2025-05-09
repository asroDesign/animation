$(document).ready(function () {
    "use strict";
     /* setting tab active inactive image */
    $('.setting-tab').click(function() {
        $('.setting-tab-tar').hide();
        var target = $(this).data('target');
        $('#' + target).show();

    });

     /* common uplaod image */
    $('.image').change(function() {
        var file = this.files[0];
        var name = $(this).attr("name");
        if (file) {
            let reader = new FileReader();
            reader.onload = function(event) {
                var html = '<img src ="' + event.target.result +
                    '" alt="image" class="tp_upload_pic" height="auto" width="auto">';
                $('.' + name).html(html);
            };
            reader.readAsDataURL(file);
        }
    });

     /* add/edit menu validation */
    $(document).find('#menu-form').validate({
        submitHandler: function(form) {
            var postData = $('#menu-form').serializeArray();
            add_update_details('menu-form', postData);
        }
    });
});

 /* common setting form  validation */
function formValidate(form_id) {
    $(document).find('#' + form_id).validate({
        rules: {
            site_name: {
                required: true,
            },
            site_title: {
                required: true,
            },
        },
        messages: {
            site_name: {
                required: 'Site Name is required.',
            },
            site_title: {
                required: 'site title required.',
            },
        },
        submitHandler: function(form) {
            // form.submit();
            var postData = $('#' + form_id).serializeArray();
            add_update_details(form_id, postData, 0);
        }
    });
}

 /* common setting file validation */
function formValidateFile(form_id) {
    $(document).find('#' + form_id).validate({
        rules: {
            site_name: {
                required: true,
            },
            site_title: {
                required: true,
            },
        },
        messages: {
            site_name: {
                required: 'Site Name is required.',
            },
            site_title: {
                required: 'site title required.',
            },
        },
        submitHandler: function(form) {
            var formData = new FormData(form);
            add_update_details_with_img(form_id, formData);
        }
    });
}

 /* add/edit payment validation */
function PaymentformValidate(form_id) {
    $(document).find('#' + form_id).validate({
        rules: {
            paypal_client_id: {
                required: true,
            },
            paypal_client_secret: {
                required: true,
            },
            stripe_key: {
                required: true,
            },
            stripe_secret_key: {
                required: true,
            },
            razorpay_key: {
                required: true,
            },
            razorpay_secret_key: {
                required: true,
            },
        },
        messages: {
            paypal_client_id: {
                required: 'Paypal client id is required.',
            },
            paypal_client_secret: {
                required: 'Paypal client serect required.',
            },
            stripe_key: {
                required: 'Stripe key is required.',
            },
            stripe_secret_key: {
                required: 'Stripe Secret key is required.',
            },
            razorpay_key: {
                required: 'razorpay key is required.',
            },
            razorpay_secret_key: {
                required: 'razorpay Secret key is required.',
            },
        },
        submitHandler: function(form) {
            var postData = $('#' + form_id).serializeArray();
            add_update_details(form_id, postData, 0);
        }
    });
}

 /* add/edit revenue validation */
function revenueformValidate(form_id) {
    $(document).find('#' + form_id).validate({
        rules: {
            default_currency: {
                required: true,
            },
            default_symbol: {
                required: true,
            },
            commission: {
                required: true,
            },
            tax: {
                required: true,
            },
            min_withdraw:{
                required:true,
            }
         
        },
        messages: {
            default_currency: {
                required: 'Please select currency.',
            },
            default_symbol: {
                required: 'Please select symbol',
            },
        },
        submitHandler: function(form) {
            var postData = $('#' + form_id).serializeArray();
            add_update_details(form_id, postData, 0);
        }
    });
}

function socialformvalidate(form_id){
    $(document).find('#' + form_id).validate({
        rules: {
            facebook_client_id: {
                required: true,
            },
            facebook_client_secret: {
                required: true,
            },
            google_client_id: {
                required: true,
            },
            google_client_secret: {
                required: true,
            },
        },
        messages: {
            facebook_client_id: {
                required: 'Facebook client id is required.',
            },
            facebook_client_secret: {
                required: 'Facebook client secret Key is required.',
            },
            google_client_id: {
                required: 'Google client id is required.',
            },
            google_client_secret: {
                required: 'Google client secret Key is required.',
            },
        },
        submitHandler: function(form) {
            var postData = $('#' + form_id).serializeArray();
            add_update_details(form_id, postData, 0);
        }
    });
}