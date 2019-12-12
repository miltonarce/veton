<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Dewormer extends Model
{
    protected $table = 'dewormers';
    protected $primaryKey = 'id_dewormer';
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    /** @var array La lista de campos que se pueden cargar masivamente. */
    protected $fillable = ['name', 'next_dosis', 'description', 'expired' ];

    /** @var array las reglas de validación. */
    public static $rules = [];

    /** @var array Los mensajes de error de las $rules */
    public static  $errorMessages= [];

    public function pets()
    {
        return $this->belongsToMany(Pet::class, 'dewormer_pet', 'id_dewormer', 'id_pet', 'id_dewormer', 'id_pet')->withTimestamps();
    }

    public function consultations()
    {
        return $this->hasMany(Consultation::class, 'id_dewormer', 'id_dewormer');
    }

}
