<?php

namespace App\Models\Frontend;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use App\Models\User;
class Comments extends Model
{
    use HasUuids,HasFactory;
    public $fillable = [
        'id',
        'user_id',
        'product_id',
        'parent_id',
        'comment',
        'is_active'
    ];

    public function getUser()
    {
        return $this->hasOne(User::class, 'id','user_id');
    }

    public function commentReply()
    {
        return $this->hasMany(Comments::class, 'parent_id','id')->orderBy('id','DESC');
    }
    
}
