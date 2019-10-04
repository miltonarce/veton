<?php
namespace App\Http\Controllers\Api;

use App\Models\Pet;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


/**
* @OA\Info(title="API Pets", version="1.0")
*
* @OA\Server(url="https://api.veton")
*/
class PetsController extends Controller
{
    /**
    * @OA\Get(
    *     path="/api/pets",
    *     summary="Lista todas las mascotas",
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
        $pets = Pet::all();
        return response()->json($pets);
    }

    /**
    * @OA\Post(
    *     path="/api/pets",
    *     summary="Da de alta una mascota",
    *  @OA\RequestBody(
    *   @OA\JsonContent(
    *        type="object",
    *        @OA\Property(property="id_user", type="integer", description="id del usuario"),
    *        @OA\Property(property="id_type", type="integer", description="id de mascota"),
    *        @OA\Property(property="id_breed", type="integer", description="id deraza"),
    *        @OA\Property(property="id_gender", type="integer", description="id de genero"),
    *        @OA\Property(property="birthday", type="string", description="fecha de nacimiento"),
    *        @OA\Property(property="name", type="string", description="nombre de la mascota"),
    *        @OA\Property(property="last_name", type="string", description="apellido de la mascota"),
    *        @OA\Property(property="image", type="string", description="imagen de perfil de la mascota"),
    *        @OA\Property(property="weight", type="integer", description="peso de la mascota en Kgs"),
    *        @OA\Property(property="colors", type="string", description="color de la mascota"),
    *        @OA\Property(property="comments", type="string", description="comentarios extras")
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
    public function store(Request $request)
    {
        $request->validate(Pet::$rules, Pet::$errorMessages);
        $data = $request->all();
        if($request->hasFile('image')) {
                $file = $request->image;
                $nameImage = time() . "." . $file->extension();
                $file->move(public_path('/imgs'), $nameImage);
                $data['image'] = 'imgs/' . $nameImage;
            }else {
                $data['image'] = '';
            }
        Pet::create($data);
        return response()->json([
            'sucess' => true
        ]);
    }
}
