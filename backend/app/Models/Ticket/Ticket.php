<?php

namespace App\Models\Ticket;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $fillable = [
        'user_id', 'title', 'description', 'priority', 'department', 'status'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function transfers()
    {
        return $this->hasMany(TicketTransfer::class);
    }

    public function replies()
    {
        return $this->hasMany(TicketReply::class);
    }

    public function lastMessage(){
        return $this->hasOne(TicketReply::class)->latest();
    }
}
