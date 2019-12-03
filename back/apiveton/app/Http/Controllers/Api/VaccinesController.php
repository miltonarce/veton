<?php
namespace App\Http\Controllers\Api;

use App\Models\Vaccine;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

//Swagger info, to show documentation for front developers...
/**
 * @OA\Info(title="API Pets", version="1.0")
 *
 * @OA\Server(url="https://api.veton")
 */
class VaccinesController extends Controller
{

    public function all()
    {
        $vaccines = Vaccine::all();
        return response()->json($vaccines);
    }

}
