<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FormResponse extends Model
{
    protected $fillable = ['stage_id', 'form_field_id', 'value'];

    public function stage(): BelongsTo
    {
        return $this->belongsTo(Stage::class);
    }

    public function formField(): BelongsTo
    {
        return $this->belongsTo(FormField::class);
    }
}
