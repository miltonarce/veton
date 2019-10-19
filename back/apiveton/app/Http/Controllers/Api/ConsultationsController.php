<?php

namespace App\Http\Controllers\Api;

use App\Models\ClinicalHistory;
use App\Models\Consultation;
use Illuminate\Database\QueryException;
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
       try {
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
       } catch (QueryException $e) {
            return response()->json(['sucess' => false, 'msg' => 'Se produjo un error al crear la consulta', 'error_stack' => $e]);
        }
    }

    public function findById($id)
    {
        $consultations = Consultation::all()->where('id_history', '=', $id);
        return response()->json($consultations);
    }
    public function editConsultation (Request $request, $idConsultation)
    {
        try{
            $request->validate(Consultation::$rules, Consultation::$errorMessages);
            $data = $request->all();
//            if($request->hasFile('image')){
//                $file = $request->image;
//                $imageName= time(). "." . $file->extension();
//                $file->move(public_path('/imgs'), $imageName);
//                $data['image'] = 'imgs/' . $imageName;
//            }else {
//                $data['image'] = '';
//            }
            $consultation = Consultation::findOrFail($idConsultation);
            $consultation->update($data);
            return response()->json([
                'success' => true
            ]);
        }catch (QueryException $e){
            return response()->json([
                'success' => false,
                'msg' => 'Se produjo un error al editar la consulta',
                'error_stack' => $e
            ]);
        }
    }
    public function removeConsultation($id)
    {
        $consultation = Consultation::findOrFail($id);
        $consultation->delete();
        return response()->json([
            'success' => true,
        ]);
    }
}
