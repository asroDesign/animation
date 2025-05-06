<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogCategory extends Model
{
    use HasFactory;
    public $fillable = [
        'id',
        'slug',
        'name',
        'is_active',
        'is_featured',
    ];

    public function getblog()
    {
        return $this->hasMany( Blog::class, 'category_id','id');
    }
}
