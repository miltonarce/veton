<?php

namespace App\Http\Controllers\api;

use App\Models\ClinicalHistory;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

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
