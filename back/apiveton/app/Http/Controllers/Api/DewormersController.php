<?php
namespace App\Http\Controllers\Api;

use App\Models\Dewormer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DewormersController extends Controller
{

    /**
     * Retrieve all dewormer
     * @return Response
     */
    public function all()
    {
        $dewormers = Dewormer::all();
        return response()->json($dewormers);
    }

}
