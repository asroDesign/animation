@extends('admin.layouts.app')

@section('head_scripts')
    <title>@lang('page_title.Admin.testimonial_page_title')</title>
    <link href="{{ asset('admin-theme/assets/css/form-builder.css') }}" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet">
@endsection

@section('content')
    <div class="container my-4">
        <h1 class="mb-4">Create Form</h1>
        <div class="card shadow-sm p-4">
            <form action="{{ route('admin.forms.store') }}" method="POST">
                @csrf
                <div class="mb-4">
                    <label for="name" class="form-label fw-bold">Form Name</label>
                    <div class="input-group">
                        <span class="input-group-text"><i class="bi bi-input-cursor-text"></i></span>
                        <input type="text" name="name" id="name" class="form-control" placeholder="Enter form name" required>
                    </div>
                </div>
                <div id="fields" class="mb-4">
                    <div class="field-group card mb-3 shadow-sm animate__animated animate__fadeIn" data-index="0">
                        <div class="card-body position-relative">
                            <div class="row g-3">
                                <div class="col-md-4">
                                    <label for="fields[0][label]" class="form-label">Label</label>
                                    <input type="text" name="fields[0][label]" class="form-control" placeholder="Field label" required>
                                </div>
                                <div class="col-md-3">
                                    <label for="fields[0][type]" class="form-label">Type</label>
                                    <select name="fields[0][type]" class="form-select" required>
                                        <option value="text">Text</option>
                                        <option value="textarea">Textarea</option>
                                        <option value="select">Select</option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label for="fields[0][options]" class="form-label">Options (for select)</label>
                                    <input type="text" name="fields[0][options]" class="form-control" placeholder="Comma-separated options">
                                </div>
                                <div class="col-md-1 d-flex align-items-end">
                                    <div class="form-check">
                                        <input type="checkbox" name="fields[0][required]" id="fields[0][required]" class="form-check-input">
                                        <label for="fields[0][required]" class="form-check-label">Required</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex gap-2">
                    <button type="button" onclick="addField()" class="btn btn-outline-secondary">
                        <i class="bi bi-plus-circle me-2"></i>Add Field
                    </button>
                    <button type="submit" class="btn btn-primary">
                        <i class="bi bi-save me-2"></i>Create Form
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection

@section('scripts')
    <script>
        let fieldIndex = 1;

        function addField() {
            const fields = document.getElementById('fields');
            const div = document.createElement('div');
            div.className = 'field-group card mb-3 shadow-sm animate__animated animate__fadeIn';
            div.setAttribute('data-index', fieldIndex);
            div.innerHTML = `
                <div class="card-body position-relative">
                    <button type="button" class="btn btn-outline-danger btn-sm delete-field" onclick="deleteField(${fieldIndex})">
                        <i class="bi bi-trash"></i>
                    </button>
                    <div class="row g-3">
                        <div class="col-md-4">
                            <label for="fields[${fieldIndex}][label]" class="form-label">Label</label>
                            <input type="text" name="fields[${fieldIndex}][label]" class="form-control" placeholder="Field label" required>
                        </div>
                        <div class="col-md-3">
                            <label for="fields[${fieldIndex}][type]" class="form-label">Type</label>
                            <select name="fields[${fieldIndex}][type]" class="form-select" required>
                                <option value="text">Text</option>
                                <option value="textarea">Textarea</option>
                                <option value="select">Select</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label for="fields[${fieldIndex}][options]" class="form-label">Options (for select)</label>
                            <input type="text" name="fields[${fieldIndex}][options]" class="form-control" placeholder="Comma-separated options">
                        </div>
                        <div class="col-md-1 d-flex align-items-end">
                            <div class="form-check">
                                <input type="checkbox" name="fields[${fieldIndex}][required]" id="fields[${fieldIndex}][required]" class="form-check-input">
                                <label for="fields[${fieldIndex}][required]" class="form-check-label">Required</label>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            fields.appendChild(div);
            fieldIndex++;
        }

        function deleteField(index) {
            const field = document.querySelector(`.field-group[data-index="${index}"]`);
            if (field) {
                field.classList.remove('animate__fadeIn');
                field.classList.add('animate__fadeOut');
                setTimeout(() => {
                    field.remove();
                }, 100); // Match animation duration
            }
        }
    </script>
@endsection
