<?php
namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Process;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\StageUpdated;

class ProcessController extends Controller
{
    public function index(){
        return response()->json(Process::where('user_id',auth()->id())->with( 'stages')->paginate(10));
    }

    public function show(Process $process): JsonResponse
    {
        $process->load([
            'stages' => function ($query) {
                $query->with([
                    'typed' => function ($q) {
                        $q->when($q->getModel()->getTable(), function ($formQuery) {
                            return $formQuery->with('fields');
                        });
                    },
                    'formResponses',
                    'files'
                ]);
            },
            'invoices.payments'
        ]);
        return response()->json($process);
    }
}
