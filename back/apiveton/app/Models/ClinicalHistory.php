<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ClinicalHistory extends Model
{
    use SoftDeletes;
    protected $table = 'clinicalhistories';
    protected $primaryKey = 'id_history';

    use SoftDeletes;
    protected $dates = ['deleted_at'];

    /** @var array La lista de campos que se pueden cargar masivamente. */
    protected $fillable = ['id_pet', 'id_user', 'id_veterinary', 'comments', 'hide_comments', 'afflictions_procedures', 'image_1', 'image_2', 'image_3'];
    
    /** @var array las reglas de validación. */
    public static $rules = [
        // 'id_pet' => 'required|integer|exists:pets',
        'comments' => 'min:1',
        'hide_comments' => 'min:1',
        'afflictions_procedures' => 'min:1'
    ];

    /** @var array Los mensajes de error de las $rules */
    public static  $errorMessages= [
        'id_pet.required' => 'La historia clínica debe estar asociada a una mascota.',
        'id_pet.integer' => 'La mascota debe ser un id.',
        'id_pet.exists' => 'La mascota seleccionada no existe.',
        'comments.min' => 'El comentario debe tener al menos :min caracteres.',
        'hide_comments.min' => 'Los comentarios ocultos deben tener al menos :min caracteres',
        'afflictions_procedures.min' => 'Las aflicciones deben tener al menos :min caracteres'
    ];

    public function pet()
    {
        return $this->belongsTo(Pet::class, 'id_pet', 'id_pet');
    }

    public function consultations()
    {
        return $this->hasMany(Consultation::class, 'id_history', 'id_history');
    }

    public function user()
    {
        return $this->belongsTo( User::class, 'id_user','id_user');
    }

    public function veterinary()
    {
        return $this->belongsTo( Veterinary::class, 'id_veterinary','id_veterinary');
    }

}
