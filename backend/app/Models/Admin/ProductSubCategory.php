<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductSubCategory extends Model
{
    use HasFactory;
    public $fillable = [
        'id',
        'slug',
        'name',
        'category_id',
        'is_active',
        'is_featured',
        'short_desc',
        'description',
        'banner_image',
        'file',
        'features'
    ];

    protected $casts = [
        'features' => 'array'
    ];
    public function getCategory()
    {
        return $this->hasOne(ProductCategory::class, 'id','category_id');
    }


    public function folderPath()
    {
        return "category/images/" . strtolower(date("FY"));
    }
    public function thumbfolderPath()
    {
        return "category/thmbnail/" . strtolower(date("FY"));
    }
    public function previewfolderPath()
    {
        return "category/preview/" . strtolower(date("FY"));
    }

}
