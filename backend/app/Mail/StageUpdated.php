<?php
namespace App\Mail;

use App\Models\Process;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class StageUpdated extends Mailable
{
    use Queueable, SerializesModels;

    public $process;
    public $message;

    public function __construct(Process $process, $message)
    {
        $this->process = $process;
        $this->message = $message;
    }

    public function build()
    {
        return $this->subject('Process Update')
            ->view('emails.stage_updated')
            ->with(['process' => $this->process, 'message' => $this->message]);
    }
}
