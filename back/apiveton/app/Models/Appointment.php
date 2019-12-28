<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Appointment extends Model
{
    protected $table = 'appointments';
    protected $primaryKey = 'id_appointment';

    use SoftDeletes;
    protected $dates = ['deleted_at'];

    /** @var array La lista de campos que se pueden cargar masivamente. */
    protected $fillable = ['id_user', 'id_veterinary', 'date', 'time', 'type', 'reason'];
    public static $rules = [
        'id_user'       => 'required|integer|exists:users',
        'id_veterinary' => 'required|integer|exists:veterinaries',
        'date'          => 'required|date',
        'time'          => 'required|min:2',
        'type'          => 'required|integer',
        'reason'        => 'required|min:5'


    ];

    /** @var array Los mensajes de error de las $rules */
    public static  $errorMessages= [
        'id_user.required'       => 'El turno debe estar asociado a un usuario',
        'id_user.integer'        => 'Usuario no válido',
        'id_user.exists'         => 'El usuario seleccionado no existe.',
        'id_veterinary.required' => 'El turno debe estar asociado a una veterinaria',
        'id_veterinary.integer'  => 'Veterinaria seleccionada no válida',
        'id_veterinary.exists'   => 'La eterinaria seleccionada no se encuentra registrada',
        'date.required'          => 'Ingresar fecha.',
        'date.date'              => 'Formato de fecha no válido.',
        'time.required'          => 'Ingresar horario.',
        'time.min'               => 'Mínimo dos caracteres .',
        'type.required'          => 'Ingresar el tipo de consulta.',
        'reason.required'        => 'Ingresar el motivo de la consulta.',
        'reason.min'             => 'Mínimo 5 caracteres.',

    ];

    public function users()
    {
        return $this->belongsTo(User::class);
    }

    public function veterinaries()
    {
        return $this->belongsTo(Veterinary::class);
    }

}
