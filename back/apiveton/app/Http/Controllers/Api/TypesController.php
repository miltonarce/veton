<?php
namespace App\Http\Controllers\Api;

use App\Models\Type;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


/**
* @OA\Info(title="API Pets", version="1.0")
*
* @OA\Server(url="https://api.veton")
*/
class TypesController extends Controller
{
   
    public function all()
    {
        $breeds = Type::all();
        return response()->json($breeds);
    }

}