<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConsultationsController extends Controller
{
    public function all()
    {
        $consultations = Consultation::all();
        return response()->json($consultations);
    }
}
