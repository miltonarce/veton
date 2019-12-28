<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Friends extends Model
{
    protected $table = 'user_veterinary_friendship';

    public function users()
    {
        return $this->morphedByMany(User::class, 'user_veterinary_friendship');
    }

    public function veterinaries()
    {
        return $this->morphedByMany(Veterinary::class, 'user_veterinary_friendship');
    }

}
