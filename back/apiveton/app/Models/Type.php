<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    protected $table = 'types';
    protected $primaryKey = 'id_type';

    public function pets()
    {
        return $this->hasMany(Pet::class, 'id_pet', 'id_pet');
    }

    public function breeds()
    {
        return $this->hasMany(Breed::class, 'id_type', 'id_type');
    }

}
