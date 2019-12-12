<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Breed extends Model
{
    protected $table = 'breeds';
    protected $primaryKey = 'id_breed';

    public function pets()
    {
        return $this->hasMany(Pet::class, 'id_breed', 'id_breed');
    }

    public function type()
    {
        return $this->belongsTo(Type::class, 'id_type', 'id_type');
    }

}
