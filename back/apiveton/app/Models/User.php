<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;
    protected $table = 'users';
    protected $primaryKey = "id_user";

    use SoftDeletes;
    protected $dates = ['deleted_at'];

    protected $fillable = ['name', 'last_name', 'dni', 'email', 'birthday', 'image', 'password', 'id_role'];

    protected $hidden = [
        'password', 'remember_token'
    ];
    protected $casts = [
        'updated_at' => 'date',
    ];

    public static $rules = [
        'email' => 'required|email',
        'dni' => 'required',
        'password' => 'required|min:4'
    ];

    /** @var array Los mensajes de error de las $rules */
    public static  $errorMessages= [
        'email.required' => 'El email no puede estar vacío.',
        'email.email' => 'El email debe ser un email.',
        'dni.required' => 'El DNI no puede estar vacío.',
        'password.required' => 'El password no puede estar vacío.',
        'password.min' => 'El password debe tener al menos :min caracteres.',
    ];

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function pets()
    {
        return $this->hasMany(Pet::class, 'id_user', 'id_user');
    }

    public function veterinaries()
    {
        return $this->belongsToMany(Veterinary::class, 'user_veterinary', 'id_user', 'id_veterinary', 'id_user', 'id_veterinary')->withTimestamps();
    }

    public function friends()
    {
        return $this->morphToMany(Friends::class , 'user_veterinary_friendship');
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class, 'id_user', 'id_user');
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

}
