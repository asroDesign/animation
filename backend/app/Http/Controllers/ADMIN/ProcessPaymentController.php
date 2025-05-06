<?php
namespace App\Http\Controllers\ADMIN;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Payment\PayPalPaymentController;
use App\Http\Controllers\Payment\RazorpayController;
use App\Http\Controllers\Payment\StripePaymentController;
use App\Models\Invoice;
use App\Models\Payment;
use Illuminate\Http\Request;

class ProcessPaymentController extends Controller
{
    public function store(Request $request, Invoice $invoice)
    {
        $request->validate(['amount' => 'required|numeric']);

        $invoice = Invoice::findOrFail($invoice->id);

        $data['total_amount'] = $invoice->amount;
        $data['contents'] = $invoice;
        $data['email'] = auth()->user()->email ?? '';
        $data['reference_number'] = $request->reference_number;
        switch ($request->gateway){
            case "paypal":
                return (new PayPalPaymentController())->handlePayment($data);
                break;
            case "stripe":
                return (new StripePaymentController())->stripe($data);
                break;
            case "razorpay":
                return (new RazorpayController())->razorpay($data);
                break;
            case "free":
                if($invoice->amount > 0){
                    session()->flash("error", trans('frontend_msg.something_went_wrong'));
                    return response()->json([
                        'msg' => 'paid'
                    ]);
                }
                return $this->paymentSuccess($data);
                break;
            case "manual":
                return $this->manualPaymentProcess($data);
                break;
            default:
                session()->flash("error", trans('frontend_msg.payment_type_not_found'));
                return response()->json([
                    'error' => 'not found any gateway'
                ]);
        }
//        $invoice->update(['status' => 'paid']);
        return response()->json(['message' => 'Payment successful']);
    }
}
