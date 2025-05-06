<?php

namespace App\Http\Controllers\ADMIN;

use App\Http\Controllers\Controller;
use App\Models\Ticket\Ticket;

use App\Models\Ticket\TicketReply;
use App\Models\Ticket\TicketTransfer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TicketController extends Controller
{
    public function index()
    {
        $tickets = Ticket::with('user', 'transfers')->paginate(10);
        return view('admin.tickets.index', compact('tickets'));
    }

    public function create()
    {
        return view('admin.tickets.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'priority' => 'required|in:low,medium,high',
            'department' => 'required|in:management,sale,other',
        ]);

        Ticket::create([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'description' => $request->description,
            'priority' => $request->priority,
            'department' => $request->department,
        ]);

        return redirect()->route('admin.tickets.index')->with('success', 'Ticket created successfully.');
    }

    public function show(Ticket $ticket)
    {
        $ticket->load('user', 'replies.user', 'transfers');
        return view('admin.tickets.show', compact('ticket'));
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

        return redirect()->route('admin.tickets.show', $ticket)->with('success', 'Reply added successfully.');
    }

    public function transfer(Request $request, Ticket $ticket)
    {
        $request->validate([
            'to_department' => 'required|in:management,sale,other',
        ]);

        TicketTransfer::create([
            'ticket_id' => $ticket->id,
            'from_department' => $ticket->department,
            'to_department' => $request->to_department,
        ]);

        $ticket->update(['department' => $request->to_department]);

        return redirect()->route('admin.tickets.index')->with('success', 'Ticket transferred successfully.');
    }
}
