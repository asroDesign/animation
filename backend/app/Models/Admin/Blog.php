<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    public $table = 'blogs';

    public $fillable = [
        'id',
        'slug',
        'heading',
        'description',
        'meta_title',
        'meta_desc',
        'meta_keywords',
        'meta_image',
        'is_active',
        'sub_heading',
    ];

}
