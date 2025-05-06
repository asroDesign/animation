<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Process extends Model
{
    protected $table='project_processes';
    protected $fillable = ['user_id', 'description', 'status'];

    public function user(){
        return $this->belongsTo(User::class,'user_id','id');
    }

    public function stages(): HasMany
    {
        return $this->hasMany(Stage::class);
    }

    public function invoices(){
        return $this->morphMany(OrderProduct::class, 'order_model','model_type','product_id');
    }

}
