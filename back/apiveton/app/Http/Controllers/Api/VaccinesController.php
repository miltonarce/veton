<?php
namespace App\Http\Controllers\Api;

use App\Models\Vaccine;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class VaccinesController extends Controller
{

    /**
     * Retrieve all vaccines
     * @return Response
     */
    public function all()
    {
        $vaccines = Vaccine::all();
        return response()->json($vaccines);
    }

}
