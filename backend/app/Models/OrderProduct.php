<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\BaseModel as Model;
use App\Models\Frontend\{Product};
class OrderProduct extends Model
{
    use HasFactory;
    protected $fillable = [' model_id','model_type', 'order_id','price','quantity','variants'];


    public function getProduct()
    {
        return $this->hasMany(Product::class,'id','model_id')->where('model_type','App\\Models\\Frontend\\Product');
    }

    public function getSingleProduct()
    {
        return $this->hasOne(Product::class,'id','model_id')->where('model_type','App\\Models\\Frontend\\Product');
    }

    public function order_model()
    {
        return $this->morphTo();
    }
    public static $searchable = [
        'product_id'=>'product_id',
        'price'=>'price',
        'admin_commission'=>'Admin Commission',
        'vendor_amount'=>'Your Amount',
        'date'=>'Date',
    ];

    public function getOrder()
    {
        return $this->hasOne(Order::class, 'id','order_id');
    }

}
