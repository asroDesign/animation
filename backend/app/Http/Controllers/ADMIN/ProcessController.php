<?php
namespace App\Http\Controllers\ADMIN;

use App\Http\Controllers\Controller;
use App\Models\Process;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\StageUpdated;

class ProcessController extends Controller
{
    public function index()
    {
        $data = Process::with('user', 'stages')->paginate(10);
        return view('admin.processes.index', compact('data'));
    }

    public function show(Process $process)
    {
        $process->load('stages.typed', 'stages.formResponses.formField', 'stages.files', 'invoices.payments');
        \Log::info($process->stages->map(fn($stage) => ['stage_type' => $stage->stage_type, 'type' => $stage->type, 'related' => $stage->type]));
        return view('admin.processes.show', compact('process'));
    }

    public function store(Request $request)
    {
        $request->validate(['description' => 'required']);
        $process = Process::create([
            'user_id' => auth()->id(),
            'description' => $request->description,
        ]);
        Mail::to($process->user->email)->send(new StageUpdated($process, 'New process created'));
        return response()->json(['message' => 'Process created']);
    }
}
