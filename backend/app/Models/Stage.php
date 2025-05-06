<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Stage extends Model
{
    protected $fillable = ['process_id', 'stage_type', 'type', 'type_id', 'requires_payment'];

    public function process(): BelongsTo
    {
        return $this->belongsTo(Process::class);
    }

    public function typed(): MorphTo
    {
        return $this->morphTo('typed','type','type_id');
    }

    public function formResponses(): HasMany
    {
        return $this->hasMany(FormResponse::class);
    }

    public function files(): HasMany
    {
        return $this->hasMany(File::class);
    }
    public function form(): HasMany
    {
        return $this->hasMany(File::class);
    }
    public function getTypedAttribute()
    {
        return $this->type;
    }
}
