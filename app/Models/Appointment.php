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
        //
    ];

    /** @var array Los mensajes de error de las $rules */
    public static  $errorMessages= [
        //
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
