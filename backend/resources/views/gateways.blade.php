@if ($total = Cart::instance('default')->subtotal() > 0)
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        @if (@$setting->is_checked_paypal)
            <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <img src="{{ $ASSET_URL }}assets/images/paypal.png" alt="PayPal" class="h-10">
                    <p class="text-lg font-medium text-gray-800">PayPal</p>
                </div>
                <label class="flex items-center cursor-pointer">
                    <input type="radio" name="gateway" value="paypal" class="h-5 w-5 text-blue-600 focus:ring-blue-500">
                </label>
            </div>
        @endif
        @if (@$setting->is_checked_stripe)
            <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <img src="{{ $ASSET_URL }}assets/images/stripe.png" alt="Stripe" class="h-10">
                    <p class="text-lg font-medium text-gray-800">Stripe</p>
                </div>
                <label class="flex items-center cursor-pointer">
                    <input type="radio" name="gateway" value="stripe" class="h-5 w-5 text-blue-600 focus:ring-blue-500">
                </label>
            </div>
        @endif
        @if (@$setting->is_checked_razorpay)
            <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <img src="{{ $ASSET_URL }}assets/images/razorpay.png" alt="Razorpay" class="h-10">
                    <p class="text-lg font-medium text-gray-800">Razorpay</p>
                </div>
                <label class="flex items-center cursor-pointer">
                    <input type="radio" name="gateway" value="razorpay" class="h-5 w-5 text-blue-600 focus:ring-blue-500">
                </label>
            </div>
        @endif
        @if (@$setting->is_checked_manual_transfer)
            <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <img src="{{ $ASSET_URL }}assets/images/manual_transfer.png" alt="Manual Transfer" class="h-10">
                    <p class="text-lg font-medium text-gray-800">Manual Transfer</p>
                </div>
                <label class="flex items-center cursor-pointer">
                    <input type="radio" name="gateway" value="manual" class="h-5 w-5 text-blue-600 focus:ring-blue-500">
                </label>
            </div>
        @endif
    </div>
@else
    <div class="mt-4 mb-4 text-center">
        <p class="text-gray-600 text-lg">@lang('master.checkout.no_payment_required')</p>
        <input type="hidden" name="gateway" value="free">
    </div>
@endif
