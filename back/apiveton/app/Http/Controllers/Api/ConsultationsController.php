<?php

namespace App\Http\Controllers\Api;

use App\Models\ClinicalHistory;
use App\Models\Consultation;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class ConsultationsController extends Controller
{
    public function all()
    {
        $consultations = Consultation::all();
        return response()->json($consultations);
    }

    public function store($idHistory, Request $request)
    {
        $request->validate(Consultation::$rules, Consultation::$errorMessages);
        $data = $request->all();
        if($request->hasFile('image')) {
            $file = $request->image;
            $nameImage = time() . "." . $file->extension();
            $file->move(public_path('/imgs'), $nameImage);
            $data['image'] = 'imgs/' . $nameImage;
        }else {
            $data['image'] = '';
        }
        $data['id_history'] = $idHistory;
        Consultation::create($data);
        return response()->json([
            'sucess' => true
        ]);
    }

    public function findById($id) {
        $consultations = Consultation::all()->where('id_history', '=', $id);
        return response()->json($consultations);
    }
}
