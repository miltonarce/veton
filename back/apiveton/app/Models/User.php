<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $primaryKey = "id_user";

    protected $fillable = [
        'id_user', 'name', 'last_name', 'dni', 'email', 'birthday', 'image', 'password', 'id_role'
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

    public function pets()
    {
        return $this->hasMany(Pet::class, 'id_user', 'id_user');
    }

    /*public function veterinaries()
    {
        return $this->hasMany(Veterinary::class, 'id_user', 'id_user');
    }*/

    public function veterinaries()
    {
        return $this->belongsToMany(Veterinary::class, 'user_veterinary', 'id_user', 'id_veterinary', 'id_user', 'id_veterinary')->withTimestamps();
    }
}
