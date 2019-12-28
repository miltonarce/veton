<?php
namespace App\Http\Controllers\Api;

use App\Models\Breed;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BreedsController extends Controller
{
   
    /**
     * Retrieve all breds
     * @return Response
     */
    public function all()
    {
        $breeds = Breed::all();
        return response()->json($breeds);
    }

}