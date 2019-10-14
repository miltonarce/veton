<?php

namespace App\Http\Controllers\Api;

use App\Models\ClinicalHistory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class ClinicalHistoriesController extends Controller
{
    /**
    * @OA\Get(
    *     path="/api/clinicalhistories",
    *     summary="Lista todas las historias clínicas",
    *     @OA\Response(
    *         response=200,
    *         description="success"
    *     ),
    *     @OA\Response(
    *         response="default",
    *         description="Ha ocurrido un error."
    *     )
    * )
    */
    public function all()
    {
        $clinicalhistories = ClinicalHistory::all();
        return response()->json($clinicalhistories);
    }

    /**
    * @OA\Post(
    *     path="/api/clinicalhistories",
    *     summary="Da de alta una historia clínica",
    *  @OA\RequestBody(
    *   @OA\JsonContent(
    *        type="object",
    *        @OA\Property(property="id_pet", type="integer", description="id de mascota"),
    *        @OA\Property(property="id_consultation", type="integer", description="id de la consulta"),
    *        @OA\Property(property="date", type="string", description="fecha de la consulta"),
    *        @OA\Property(property="comments", type="integer", description="comentarios"),
    *        @OA\Property(property="hide_comments", type="string", description="comentarios extras"),
    *        @OA\Property(property="afflictions_procedures", type="string", description="afecciones")
    *    )
    *  ),
    *     @OA\Response(
    *         response=200,
    *         description="success"
    *     ),
    *     @OA\Response(
    *         response="default",
    *         description="Ha ocurrido un error."
    *     )
    * )
    */
    public function store($idPet, Request $request)
    {
        try {
            $request->validate(ClinicalHistory::$rules, ClinicalHistory::$errorMessages);
            $data = $request->all();
            $data['id_pet'] = $idPet;
            ClinicalHistory::create($data);
            return response()->json([
                'sucess' => true
            ]);
        } catch (QueryException $e) {
            return response()->json(['sucess' => false, 'msg' => 'Se produjo un error al crear la historia clínica', 'error_stack' => $e]);
        }
    }

    public function findById($id) {
        $clinicalHistories = ClinicalHistory::all()->where('id_pet', '=', $id);
        return response()->json($clinicalHistories);
    }

}
