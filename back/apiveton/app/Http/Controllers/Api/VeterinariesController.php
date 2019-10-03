<?php

namespace App\Http\Controllers\Api;


use App\Models\Veterinary;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class VeterinariesController extends Controller
{
    public function all()
    {
        $veterinaries = Veterinary::all();
        return response()->json($veterinaries);
    }

    public function new(Request $request)
    {
        $request->validate(Veterinary::$rules, Veterinary::$errorMessages);
        $data = $request->all();
        Veterinary::create($data);
        return response()->json([
            'sucess' => true
        ]);
    }
}
