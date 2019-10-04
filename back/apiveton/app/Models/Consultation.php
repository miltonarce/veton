<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Consultation extends Model
{
    protected $table = 'consultations';
    protected $primaryKey = 'id_consultation';

    /** @var array La lista de campos que se pueden cargar masivamente. */
    protected $fillable = ['id_consultation', 'date', 'comments', 'afflictions_procedures', 'image' ];

    /** @var array las reglas de validación. */
    public static $rules = [
        'date' => 'required',
        'comments' => 'min:10',
        'afflictions_procedures' => 'min:10'
    ];

    /** @var array Los mensajes de error de las $rules */
    public static  $errorMessages= [
        'date.required' => 'La fecha de la consulta no puede estar vacía',
        'comments.min' => 'El comentario debe tener al menos :min caracteres.',
        'afflictions_procedures.min' => 'Las aflicciones deben tener al menos :min caracteres'
    ];

    public function veterinary()
    {
        return $this->belongsTo(Veterinary::class, 'id_veterinary', 'id_veterinary');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id_user');
    }

    public function clinicalHistory()
    {
        return $this->belongsTo(ClinicalHistory::class, 'id_history', 'id_history');
    }
}
