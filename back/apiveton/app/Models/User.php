<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $fillable = [
        'name', 'last_name', 'dni', 'email', 'birthday', 'image',
    ];

    protected $hidden = [
        'password', 'remember_token'
    ];
    protected $casts = [
        'updated_at' => 'date',
    ];

    public static $rules = [
        'email' => 'required|email',
        'password' => 'required'
    ];
    public function role()
    {
        return $this->belongsTo(Role::class);
    }
}
