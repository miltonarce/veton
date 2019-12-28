<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Consultation extends Model
{
    protected $table = 'consultations';
    protected $primaryKey = 'id_consultation';

    use SoftDeletes;
    protected $dates = ['deleted_at'];

    /** @var array La lista de campos que se pueden cargar masivamente. */
    protected $fillable = ['id_user','id_history', 'comments', 'afflictions_procedures', 'image_1', 'image_2', 'image_3', 'id_vaccine', 'id_dewormer','next_dosis_vaccine','next_dosis_dewormer' ];

    /** @var array las reglas de validación. */
    public static $rules = [
        'id_history' => 'required|integer|exists:clinicalhistories',
        'id_user' => 'required|integer|exists:users',
        'comments' => 'min:1',
        'afflictions_procedures' => 'min:1'
    ];

    /** @var array Los mensajes de error de las $rules */
    public static  $errorMessages= [
        'id_history.required' => 'La consulta debe estar asociada a una Historia Clinica.',
        'id_history.exist' => 'La Historia Clinica seleccionada no existe.',
        'id_user.required' => 'La consulta debe estar asociada a un Usuario Veterinario.',
        'id_user.exist' => 'El Usuario Veterinatio seleccionado no existe.',
        'comments.min' => 'El comentario debe tener al menos :min caracteres.',
        'afflictions_procedures.min' => 'Las aflicciones deben tener al menos :min caracteres'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id_user');
    }

    public function clinicalHistory()
    {
        return $this->belongsTo(ClinicalHistory::class, 'id_history', 'id_history');
    }

    public function vaccine()
    {
        return $this->belongsTo(Vaccine::class, 'id_vaccine', 'id_vaccine');
    }

    public function dewormer()
    {
        return $this->belongsTo(Dewormer::class, 'id_dewormer', 'id_dewormer');
    }

}
