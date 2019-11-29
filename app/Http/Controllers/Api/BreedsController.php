<?php
namespace App\Http\Controllers\Api;

use App\Models\Breed;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

//Swagger info, to show documentation for front developers...
/**
* @OA\Info(title="API Pets", version="1.0")
*
* @OA\Server(url="https://api.veton")
*/
class BreedsController extends Controller
{
   
    public function all()
    {
        $breeds = Breed::all();
        return response()->json($breeds);
    }

}