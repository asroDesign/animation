<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class FormField extends Model
{
    protected $fillable = ['form_id', 'label', 'type', 'options', 'required'];

    public function form(): BelongsTo
    {
        return $this->belongsTo(Form::class);
    }

    public function responses(): HasMany
    {
        return $this->hasMany(FormResponse::class);
    }
}
