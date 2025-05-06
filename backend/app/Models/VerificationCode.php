<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VerificationCode extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'verification_codes';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'code',
        'expires_at',
    ];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = true;

    /**
     * Get the user that owns the verification code.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
