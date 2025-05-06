<?php
namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\VerificationCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Carbon\Carbon;
use DB;
class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        DB::beginTransaction();
        try {
            $user = User::create([
                'full_name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            $code = Str::random(6);
            $expiresAt = Carbon::now()->addMinutes(30);

            VerificationCode::create([
                'user_id' => $user->id,
                'code' => $code,
                'expires_at' => $expiresAt,
            ]);

//            Mail::to($user->email)->send(new \App\Mail\VerificationCodeMail($code));
            DB::commit();
            return response()->json(['msg' => 'please add your email'], 201);

        }catch (\Exception $exception){
            DB::rollback();
            return response()->json(['msg' => $exception->getMessage()], 500);
        }
    }

    public function verify(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'code' => 'required|string',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['msg' => 'Not found user'], 404);
        }

        $verification = VerificationCode::where('user_id', $user->id)
            ->where('code', $request->code)
            ->where('expires_at', '>', Carbon::now())
            ->first();

        if (!$verification) {
            return response()->json(['msg' => 'The code is invalid or expired.'], 400);
        }

        $user->email_verified_at = Carbon::now();
        $user->is_email_verified = true;
        $user->save();

        $verification->delete();

        return response()->json(['msg' => 'Email successfully verified.'], 200);
    }
}
