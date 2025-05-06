<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ADMIN\{
FormResponseController,
ProcessPaymentController};
use App\Http\Controllers\Frontend\{ProductController,RegisterController,AuthController,
    ApiTicketController,ProcessController,CouponsController,HomeController,ProductController as FrontendProductController, HomeViewController,UserController,CartController,CommentController,SocialLoginController};

use \App\Http\Controllers\Payment\CheckoutController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [RegisterController::class, 'register']);
Route::post('/verify', [RegisterController::class, 'verify']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/update_profile', [UserController::class, 'updateProfile']);
    Route::post('/change_password', [UserController::class, 'change_password']);
    Route::post('/update_user_image', [UserController::class, 'update_user_image']);




    Route::post('/logout', [AuthController::class, 'logout']);


    //coupon code apply
    Route::post('/post-coupon-code', [CouponsController::class, 'checkCouponCode'])->name('frontend.coupon.apply');
    Route::delete('/coupon-code', [CouponsController::class, 'destroy'])->name('frontend.coupon.destroy');

    // Cart
    Route::controller(CartController::class)->prefix('cart')->group(function(){
        Route::post('/', 'store')->name('frontend.cart.store');
        Route::delete('{product}/{cart}', 'destroy')->name('frontend.cart.destroy');
        Route::post('save-later/{product}', 'saveLater')->name('frontend.cart.save-later');
        Route::post('add-to-cart/{product}', 'addToCart')->name('frontend.cart.add-to-cart');
        Route::patch('{product}', 'update')->name('frontend.cart.update');
        Route::post('add-to-wishlist', 'addToWishlist')->name('frontend.cart.add-to-cart');
        Route::post('remove-wishlist', 'removefromWishlist')->name('frontend.wishlist.remove');
    });
    Route::get('/checkout',[CheckoutController::class,'index'])->name('frontend.checkout');

    //Checkout
    Route::controller(CheckoutController::class)->group(function (){
        Route::post('/checkout', 'store')->name('frontend.checkout.store');
        Route::get('/transaction-success','transactionSuccess')->name('frontend.success.transaction');
        Route::get('/download-file','downlaodfile')->name('frontend.download-file');
        Route::get('/download-invoice','downlaod_invoice')->name('frontend.download-invoice');
        Route::get('/transaction-error','transactionError')->name('frontend.cancel.payment');
    });
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/tickets', [ApiTicketController::class, 'index']);
    Route::post('/tickets', [ApiTicketController::class, 'store']);
    Route::get('/tickets/{id}', [ApiTicketController::class, 'show']);
    Route::post('/tickets/{ticket}', [ApiTicketController::class, 'reply']);

    Route::get('/processes', [ProcessController::class, 'index']);
    Route::get('/processes/{process}', [ProcessController::class, 'show']);
    Route::post('/processes', [ProcessController::class, 'store']);
    Route::post('/stages/{stage}/responses', [FormResponseController::class, 'store']);
    Route::post('/invoices/{invoice}/payments', [ProcessPaymentController::class, 'store']);

    Route::get('get-wallet',[\App\Http\Controllers\Author\WalletController::class,'index']);


});


Route::controller(HomeViewController::class)->group(function(){
    Route::get('/',  'index')->name('frontend.home');
    Route::get('/aboutus',  'aboutus_view')->name('frontend.about-us');
    Route::get('/testimonials',  'testimonials')->name('frontend.testimonials');
    Route::get('/portfolio/{cat_id}',  'portfolio')->name('frontend.portfolio');
    Route::get('/get-configs',  'getConfigs')->name('frontend.getConfigs');
    Route::get('/privacy-policy',  'privacy_policy_view')->name('frontend.privacy-policy');
    Route::get('/terms-and-conditions',  'terms_and_conditions_view')->name('frontend.terms-and-conditions');
    Route::get('/author-terms-and-conditions',  'author_terms_and_conditions_view')->name('frontend.author-terms-and-conditions');
    Route::get('/contact-us', 'contactus_view')->name('frontend.contact-us');
    Route::get('service-view/{slug}','service_view')->name('frontend.service_view');

    Route::get('/blogs', 'blog_list')->name('frontend.blogList');
    Route::get('/blog/{slug}', 'blog_view')->name('frontend.blogView');
    Route::get('/blogs-category', 'blogsCategory')->name('frontend.blogsCategory');
});

Route::controller(HomeController::class)->group(function(){
    Route::post('/post-contact-us', 'postContactus')->name('frontend.post-contact-us');
    Route::get('/email-verification', 'emailVerify')->name('frontend.email-verify');
    Route::get('/faq-get', 'getFaq')->name('frontend.faq-get');
    Route::get('/get-services', 'getServices')->name('frontend.getServices');
    Route::get('footer','getFooter')->name('frontend.getFooter');
    Route::post('request-quote','requestQuote')->name('frontend.request_quote');
});

Route::controller(ProductController::class)->group(function (){
    Route::get('single-details/{slug}','single_details')->name('frontend.single_details');

});
