<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Vaccine extends Model
{
    protected $table = 'vaccines';
    protected $primaryKey = 'id_vaccine';
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
        return $this->belongsToMany(Pet::class, 'vaccine_pet', 'id_vaccine', 'id_pet', 'id_vaccine', 'id_pet')->withTimestamps();
    }

    public function consultations()
    {
        return $this->hasMany(Consultation::class, 'id_vaccine', 'id_vaccine');
    }

}
