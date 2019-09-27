<?php

namespace App\Http\Controllers\api;

use App\Models\ClinicalHistory;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ClinicalHistoriesController extends Controller
{
    public function all()
    {
        $clinicalhistories = ClinicalHistory::all();
        return response()->json($clinicalhistories);
    }

    public function new(Request $request)
    {
        $request->validate(ClinicalHistory::$rules, ClinicalHistory::$errorMessages);
        $data = $request->all();
        /* if($request->hasFile('image')) {
             $file = $request->image;
             $nameImage = time() . "." . $file->extension();
             $file->move(public_path(path: '/imgs'), $nameImage);
             $data['image'] = 'imgs/' . $nameImage;
         }else {
             $data['image'] = '';
         }*/
        ClinicalHistory::create($data);
        return response()->json([
            'sucess' => true
        ]);
    }
}
