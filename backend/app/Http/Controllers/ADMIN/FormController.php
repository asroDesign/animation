<?php
namespace App\Http\Controllers\ADMIN;

use App\Http\Controllers\Controller;
use App\Models\Form;
use App\Models\FormField;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function index()
    {
        $forms = Form::with('fields')->get();
        return view('admin.processes.forms.index', compact('forms'));
    }

    public function create()
    {
        return view('admin.processes.forms.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'fields' => 'required|array',
            'fields.*.label' => 'required',
            'fields.*.type' => 'required',
        ]);

        $form = Form::create(['name' => $request->name]);
        foreach ($request->fields as $field) {
            FormField::create([
                'form_id' => $form->id,
                'label' => $field['label'],
                'type' => $field['type'],
                'options' => $field['options'] ?? null,
                'required' => $field['required'] ?? false,
            ]);
        }

        return redirect()->route('admin.forms.index')->with('success', 'Form created');
    }
}
