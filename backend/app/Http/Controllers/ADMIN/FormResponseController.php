<?php
namespace App\Http\Controllers\ADMIN;

use App\Http\Controllers\Controller;
use App\Models\Stage;
use App\Models\FormResponse;
use Illuminate\Http\Request;

class FormResponseController extends Controller
{
    public function store(Request $request, Stage $stage)
    {
        $request->validate([
            'responses' => 'required|array',
            'responses.*.form_field_id' => 'required|exists:form_fields,id',
            'responses.*.value' => 'required',
        ]);

        foreach ($request->responses as $response) {
            FormResponse::create([
                'stage_id' => $stage->id,
                'form_field_id' => $response['form_field_id'],
                'value' => $response['value'],
            ]);
        }

        return response()->json(['msg' => 'Responses saved']);
    }
}
