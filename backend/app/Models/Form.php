<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Form extends Model
{
    protected $fillable = ['name'];

    public function fields(): HasMany
    {
        return $this->hasMany(FormField::class,'form_id','id');
    }
}
