<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Consultation extends Model
{
    protected $table = 'consultations';
    protected $primaryKey = 'id_consultation';

    /** @var array La lista de campos que se pueden cargar masivamente. */
    protected $fillable = ['id_consultation', 'date', 'comments', 'afflictions_procedures', 'image' ];

    /** @var array las reglas de validación. */
    public static $rules = [
        'comments' => 'min:10',
        'afflictions_procedures' => 'min:10'
    ];

    /** @var array Los mensajes de error de las $rules */
    public static  $errorMessages= [
        'comments.min' => 'El comentario debe tener al menos :min caracteres.',
        'afflictions_procedures.min' => 'Las aflicciones deben tener al menos :min caracteres'
    ];
}
