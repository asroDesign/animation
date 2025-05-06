<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class File extends Model
{
    protected $fillable = ['stage_id', 'path', 'name'];

    public function stage(): BelongsTo
    {
        return $this->belongsTo(Stage::class);
    }
}
