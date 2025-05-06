<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Invoice extends Model
{
    protected $fillable = ['process_id', 'amount', 'status'];

    public function process(): BelongsTo
    {
        return $this->belongsTo(Process::class);
    }

    public function stage(){
        return $this->morphOne(Stage::class, 'typed');
    }
    public function payments(): HasMany
    {
        return $this->hasMany(Payment::class);
    }

    public function fields(){
        return $this->belongsTo(Process::class);
    }
}
