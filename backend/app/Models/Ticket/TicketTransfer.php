<?php

namespace App\Models\Ticket;

use Illuminate\Database\Eloquent\Model;

class TicketTransfer extends Model
{
    protected $fillable = [
        'ticket_id', 'from_department', 'to_department'
    ];

    public function ticket()
    {
        return $this->belongsTo(Ticket::class);
    }
}
