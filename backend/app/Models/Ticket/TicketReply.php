<?php

namespace App\Models\Ticket;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class TicketReply extends Model
{
    protected $fillable = [
        'ticket_id', 'user_id', 'message'
    ];

    protected $appends=['human_date','isSent'];
    public function ticket()
    {
        return $this->belongsTo(Ticket::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function getHumanDateAttribute(){
        return $this->created_at->diffForHumans();
    }
    public function getisSentAttribute(){
        return $this->user_id == auth()->id();
    }
}
