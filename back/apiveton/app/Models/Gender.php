<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gender extends Model
{
    protected $table = 'genders';
    protected $primaryKey = 'id_gender';



    public function pets()
    {
        return $this->belongsTo(Pet::class, 'id_pet', 'id_pet');
    }

}
