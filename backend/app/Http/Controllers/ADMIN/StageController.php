<?php
namespace App\Http\Controllers\ADMIN;

use App\Http\Controllers\Controller;
use App\Models\Process;
use App\Models\Stage;
use App\Models\Form;
use App\Models\Invoice;
use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\StageUpdated;

class StageController extends Controller
{
    public function store(Request $request, Process $process)
    {
        $request->validate([
            'stage_type' => 'required|in:form,invoice,file',
//            'type_id' => 'required_if:stage_type,form',
//            'amount' => 'required_if:stage_type,invoice|numeric',
//            'file' => 'required_if:stage_type,file|file',
//            'requires_payment' => 'boolean',
        ]);

        $stage = new Stage([
            'process_id' => $process->id,
            'stage_type' => $request->stage_type,
            'requires_payment' => (boolean)$request->requires_payment ?? false,
        ]);

        if ($request->stage_type === 'form') {
            $stage->type = Form::class;
            $stage->type_id = $request->type_id;
        } elseif ($request->stage_type === 'invoice') {
            $invoice = Invoice::create([
                'process_id' => $process->id,
                'amount' => $request->amount,
            ]);
            $stage->type = Invoice::class;
            $stage->type_id = $invoice->id;
        } elseif ($request->stage_type === 'file') {
            $file = $request->file('file')->store('files');
            $fileModel = File::create([
                'stage_id' => $stage->id,
                'path' => $file,
                'name' => $request->file('file')->getClientOriginalName(),
            ]);
            $stage->type = File::class;
            $stage->type_id = $fileModel->id;
        }

        $stage->save();
//        Mail::to($process->user->email)->send(new StageUpdated($process, 'New stage added'));
        return redirect()->back()->with('success', 'Stage added');
    }
}
