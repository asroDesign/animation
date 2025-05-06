<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Ticket\Ticket;
use App\Models\Ticket\TicketReply;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ApiTicketController extends Controller
{
    public function index()
    {
        $tickets = Ticket::where('user_id', Auth::id())->with(['transfers','lastMessage'])->get();
        return response()->json($tickets);
    }

    public function store(Request $request)
    {
        $request->validate([
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
//            'priority' => 'required|in:low,medium,high',
//            'department' => 'required|in:management,sale,other',
        ]);

        $ticket = Ticket::create([
            'user_id' => Auth::id(),
            'title' => $request->subject,
            'description' => $request->message,
//            'priority' => $request->priority,
//            'department' => $request->department,
        ]);

        return response()->json($ticket, 201);
    }
    public function show($id){
        return response()->json(Ticket::with('replies')->firstWhere('id',$id));
    }

    public function reply(Request $request, Ticket $ticket)
    {
        $request->validate([
            'message' => 'required|string',
        ]);

        TicketReply::create([
            'ticket_id' => $ticket->id,
            'user_id' => Auth::id(),
            'message' => $request->message,
        ]);

        return redirect()->route('admin.tickets.show', $ticket)->with('msg', 'Reply added successfully.');
    }
}
