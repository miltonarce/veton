<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Pet extends Model
{
    protected $table = 'pets';
    protected $primaryKey = 'id_pet';
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    /** @var array La lista de campos que se pueden cargar masivamente. */
    protected $fillable = ['id_user', 'id_type', 'id_breed', 'id_gender', 'name', 'last_name', 'birthday', 'image','weight', 'colors', 'comments' ];
   
    /** @var array las reglas de validación. */
    public static $rules = [
        'id_user' => 'required|integer|exists:users',
        'id_type' => 'required|integer|exists:types',
        'id_breed' => 'required|integer|exists:breeds',
        'id_gender' => 'required|integer|exists:genders',
        'name' => 'required|min:2'
    ];

    /** @var array Los mensajes de error de las $rules */
    public static  $errorMessages= [
        'id_user.required' => 'La mascota debe estar asociada a un usuario.',
        'id_user.integer' => 'El usuario debe ser un id.',
        'id_user.exists' => 'El usuario seleccionado no existe.',
        'id_type.required' => 'La mascota debe ser de un tipo.',
        'id_type.integer' => 'El tipo debe ser un id.',
        'id_type.exists' => 'El tipo seleccionado no existe',
        'id_breed.required' => 'La mascota debe tener una raza.',
        'id_breed.integer' => 'La raza debe ser un id.',
        'id_breed.exists' => 'La raza seleccionada no existe',
        'id_gender.required' => 'La mascota debe tener un sexo.',
        'id_gender.integer' => 'El sexo debe ser un id.',
        'id_gender.exists' => 'El sexo seleccionado no existe',
        'name.required' => 'El nombre de la mascota no puede estar vacío.',
        'name.min' => 'El nombre de la mascota debe tener al menos :min caracteres'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id_user');
    }

    public function type()
    {
        return $this->belongsTo(Type::class, 'id_type', 'id_type');
    }

    public function breed()
    {
        return $this->belongsTo(Breed::class, 'id_breed', 'id_breed');
    }
    
    public function gender()
    {
        return $this->belongsTo(Gender::class, 'id_gender', 'id_gender');
    }

    public function clinicalHistory()
    {
        return $this->hasMany(ClinicalHistory::class, 'id_pet', 'id_pet');
    }

    public function vaccines()
    {
        return $this->belongsToMany(Vaccine::class, 'vaccine_pet', 'id_pet', 'id_vaccine', 'id_pet', 'id_vaccine')->withTimestamps();
    }

    public function dewormers()
    {
        return $this->belongsToMany(Vaccine::class, 'dewormer_pet', 'id_pet', 'id_dewormer', 'id_pet', 'id_dewormer')->withTimestamps();
    }

}
