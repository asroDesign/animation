<?php

namespace App\Http\Controllers\ADMIN;

use App\Http\Controllers\Controller;
use App\Models\Admin\Contactus;
use App\Models\Process;
use App\Models\ProjectProcess;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Validator;

class ProjectProcessController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $data = ProjectProcess::query();
        if (array_key_exists('search',$request->all()) && !empty($request['search'])){
            $data->where('description','like','%'.$request['search'].'%')
                ->orWhere('title','like','%'.$request['search'])
                ->orWhereHas('user',function ($q)use($request){
                    $q->where('email','like','%'.$request['search'].'%');
                });
        }
        $data= $data->orderBy('id','DESC')->paginate(10);
        return view('admin.processes.index',compact('data'));
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       return view('admin.process.create_or_edit');
    }
    /**
     * Store a newly created and update resource in storage.
     */
    public function store(Request $request)
    {
        $contact = Contactus::find($request['id']);
        $user = User::firstOrCreate(['email' => $contact->email,],[
            'full_name' => $contact->name,
            'role_type' => 'USER',
            'password' => Hash::make($contact->email)
        ]);
        $project = ProjectProcess::firstOrCreate([
            'from_contact_id' => $contact->id
        ],[
           'user_id' => $user->id,
            'description' => $contact->message,
        ]);
        return redirect()->route('admin.processes.show',$project->id);
    }

    public function show(Process $process)
    {
        $process->load('stages.typed', 'stages.formResponses.formField', 'stages.files', 'invoices.payments');
        \Log::info($process->stages->map(fn($stage) => ['stage_type' => $stage->stage_type, 'type' => $stage->type, 'related' => $stage->type]));
        return view('admin.processes.show', compact('process'));
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $data = ProjectProcess::with(['steps','user'])->firstWhere('id',$id);

        if(empty($data)){
          return redirect()->route('admin.process.index');
        }
        return view('admin.process.steps',compact('data'));
    }

    /**
     * Update the status specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $obj = ProjectProcess::find($id);
        if($obj->is_active == 1){
            $obj->is_active = 0;
            $msg = trans('msg.de_active');
        }
        else{
            $obj->is_active = 1;
            $msg = trans('msg.active');
        }

        $obj->requires_invoice = $request->requires_invoice ?? 0 ;
        $obj->save();

        return response()->json(['status' => true,'msg' =>$msg], 200);
    }
    /**
     * Remove the specified resource from storage.
     */

     public function destroy(string $id)
     {
         $data = ProjectProcess::find($id);
         $data->delete();
         return response()->json(['status' => true,'msg' =>trans('msg.testimonial_del')], 200);
     }

}
