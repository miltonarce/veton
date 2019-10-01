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

    public function new(Request $request)
    {
        $request->validate(Consultation::$rules, Consultation::$errorMessages);
        $data = $request->all();
        /* if($request->hasFile('image')) {
             $file = $request->image;
             $nameImage = time() . "." . $file->extension();
             $file->move(public_path(path: '/imgs'), $nameImage);
             $data['image'] = 'imgs/' . $nameImage;
         }else {
             $data['image'] = '';
         }*/
        Consultation::create($data);
        return response()->json([
            'sucess' => true
        ]);
    }
}
