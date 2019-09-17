<?php

namespace App\Http\Controllers\API;

use App\Models\Pet;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PetsController extends Controller
{
    public function all()
    {
        $pets = Pet::all();

        return response()->json($pets);
    }
}
