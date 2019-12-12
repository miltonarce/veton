<?php

namespace App\Http\Controllers\Api;

use App\Models\ClinicalHistory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ClinicalHistoriesController extends Controller
{
    /**
     * Retrieve all clininical histories
     * @return Response
     */
    public function all()
    {
        $clinicalhistories = ClinicalHistory::all();
        return response()->json($clinicalhistories);
    }

    /**
     * Save clinical histroy with pet
     * @param int $idPet
     * @param Request $request
     * @return Response
     */
    public function store($idPet, Request $request)
    {
        try {
            $request->validate(ClinicalHistory::$rules, ClinicalHistory::$errorMessages);
            $data = $request->all();
            $data['id_pet'] = $idPet;
            ClinicalHistory::create($data);
            return response()->json([
                'success' => true,
                'msg' => 'La historia clinica se creo correctamente',
                'stack' => '',
            ]);
        } catch (QueryException $e) {
            return response()->json([
                'success' => false,
                'msg' => 'Se produjo un error al crear la historia clínica',
                'stack' => $e]);
        }
    }

    /**
     * Update clinical history
     * @param Request $request
     * @param int $idHistory
     * @return Response
     */
    public function editHistory(Request $request, $idHistory) 
    {
        try {
            $request->validate(ClinicalHistory::$rules, ClinicalHistory::$errorMessages);
            $data = $request->all();
            $history = ClinicalHistory::findOrFail($idHistory);
            $history->update($data);
            return response()->json([
                'success' => true,
                'msg' => 'La historia clinica ha sido guardada',
                'stack' => ''
            ]);
        } catch (QueryException $e) {
            return response()->json([
                'success' => false,
                'msg' => 'Se produjo un error al editar la historia clínica',
                'stack' => $e]);
        }
    }

    /**
     * Remove clinical history by id
     * @param int $idHistory
     * @return Response
     */
    public function removeHistory($idHistory) 
    {
        try {
            $history = ClinicalHistory::findOrFail($idHistory);
            $history->delete();
            return response()->json([
                'success' => true,
                'msg' => 'La historia clinica se eliminó correctamente',
                'stack' => ''
            ]);
        } catch(QueryException $e) {
            return response()->json([
                'success' => false,
                'msg' => 'Se produjo un error al borrar la historia clínica',
                'stack' => $e]);
        }
    }

    /**
     * Retrieve clinical history by id pet
     * @param int $id
     * @return Response
     */
    public function findById($id) 
    {
        $clinicalHistories = ClinicalHistory::all()->where('id_pet', '=', $id);
        return response()->json($clinicalHistories);
    }

    /**
     * Retrieve one clinical history by id
     * @param int $id
     * @return Response
     */
    public function findOneById($id)
    {
        $clinicalHistory = ClinicalHistory::where('id_history',$id)->first();
        return response()->json($clinicalHistory);
    }

    /**
     * Retrieve clinical histories by veterinary with id
     * @param int $idVet
     * @return Response
     */
    public function findByVeterinaries($idVet)
    {
        $clinicalhistories = ClinicalHistory::where('id_veterinary', '=', $idVet)->get();
        return response()->json($clinicalhistories);
    }

}
