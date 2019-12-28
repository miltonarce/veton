<?php
namespace App\Http\Controllers\Api;

use App\Models\Type;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TypesController extends Controller
{
   
    /**
     * Retrieve all types from pets
     * @return Response
     */
    public function all()
    {
        $breeds = Type::all();
        return response()->json($breeds);
    }

}