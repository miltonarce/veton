<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Veterinary extends Model
{
    protected $table = 'veterinaries';
    protected $primaryKey = 'id_veterinary';

    use SoftDeletes;
    protected $dates = ['deleted_at'];

    /** @var array La lista de campos que se pueden cargar masivamente. */
    protected $fillable = ['id_user', 'business_name', 'fantasy_name', 'cuit_cuil', 'phone1', 'phone2', 'street', 'between_streets'];

    /** @var array las reglas de validación. */
    public static $rules = [
        'id_user' => 'required|integer|exists:users',
        'business_name' => 'required|min:2',
        'fantasy_name' => 'required|min:2',
        'cuit_cuil' => 'required|integer',
        'phone1' => 'required|integer',
        'street' => 'required'
    ];

    /** @var array Los mensajes de error de las $rules */
    public static  $errorMessages= [
        'id_user.required' => 'La veterinaria debe estar asociada a un usuario.',
        'id_user.integer' => 'El usuario debe ser un id.',
        'id_user.exists' => 'El usuario seleccionado no existe.',
        'business_name.required' => 'El nombre de la veterinaria no puede estar vacío.',
        'business_name.min' => 'El nombre de la veterinaria debe tener al menos :min caracteres.',
        'fantasy_name.required' => 'El nombre de la veterinaria no puede estar vacío.',
        'fantasy_name.min' => 'El nombre de la veterinaria debe tener al menos :min caracteres.',
        'cuit_cuil.required' => 'El CUIT o CUIL no puede estar vacío.',
        'cuit_cuil.integer' => 'El CUIT o CUIL debe ser un número.',
        'phone1.required' => 'El número de teléfono no puede estar vacío.',
        'phone1.integer' => 'El número de teléfono debe ser un número.',
        'street.required' => 'La dirección de la veterinaria no puede estar vacía.',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_veterinary', 'id_veterinary', 'id_user', 'id_veterinary', 'id_user')->withTimestamps();
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class, 'id_veterinary', 'id_veterinary');
    }

    public function friends()
    {
        return $this->morphToMany(Friends::class, 'user_veterinary_friendship');
    }

}
