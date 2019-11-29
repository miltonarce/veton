<?php
namespace App\Http\Controllers\Api;

use App\Models\Pet;
use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Support\Facades\DB;

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

    public function detail($id)
    {
        $pets = Pet::with(['type', 'breed', 'gender', 'user', 'clinicalHistory', 'clinicalHistory.consultations'])->findOrFail($id);
        return response()->json($pets);
    }

    public function findByUser($idUser) 
    {
        $pets = Pet::where('id_user', '=', $idUser)->get();
        return response()->json($pets);
    }

    public function findLastByVeterinary($idUser)
    {
       try {
            //busco a que veterinaria pertenece
            $userVeterinaryInfo = DB::table('user_veterinary')->where('id_user', '=', $idUser)->first();
            //levanto el id de la vet
            $idVet = $userVeterinaryInfo->id_veterinary;
            //query para tener las 10 mascotas antendidas
            $pets = Pet::join('clinicalhistories', 'pets.id_pet', '=', 'clinicalhistories.id_pet')
                        ->join('consultations', 'consultations.id_history', '=', 'clinicalhistories.id_history')
                        ->where('consultations.id_veterinary', '=', $idVet)->orderBy('consultations.updated_at', 'asc')->limit(10)->get();
            return response()->json([
                'success' => true,
                'pets' => $pets
            ]);
       } catch (QueryException $e) {
        return response()->json([
            'success' => false,
            'msg' => 'Se produjo un error al obtener las últimas mascotas atendidas',
            'stack' => $e]);
       }
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
        try {
            $request->validate(Pet::$rules, Pet::$errorMessages);
            $data = $this->saveImageIfExists($request, $request->all());
            Pet::create($data);
            return response()->json([
                'success' => true,
                'msg' => 'La mascota se creó exitosamente',
                'stack' => ''
            ]);
        } catch (QueryException $e) {
            return response()->json([
                'success' => false,
                'msg' => 'Se produjo un error al crear la mascota',
                'stack' => $e]);
        }
    }

    public function editPet(Request $request, $idPet)
    {
        try {
            $request->validate(Pet::$rules, Pet::$errorMessages);
            $data = $request->all();
            $pet = Pet::findOrFail($idPet);
            $data = $this->saveImageIfExists($request, $data);
            $pet->update($data);
            return response()->json([
                'success' => true,
                'msg' => 'La mascota se editó correctamente.',
                'stack' => ''
            ]);
        } catch (QueryException $e) {
            return response()->json([
                'success' => false,
                'msg' => 'Se produjo un error al editar la mascota',
                'stack' => $e
            ]);
        }
    }

    public function removePet($idPet) {
        try {
            $pet = Pet::findOrFail($idPet);
            $pet->delete();
            return response()->json([
                'success'=> true,
                'msg' => 'La mascota se eliminó correctamente',
                'stack' => ''
            ]);
        } catch (QueryException $e) {
            return response()->json([
                'success' => false,
                'msg' => 'No se pudo eliminar la mascota',
                'stack' => $e,
            ]);
        }
    }

    private function saveImageIfExists($request, $data) 
    {
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $nameImageWithExtension = time() . "." . $image->extension();
            $image->move(public_path('./imgs'), $nameImageWithExtension);
            $data['image'] = $nameImageWithExtension;
        } else {
            $data['image'] = '';
        }
        return $data;
    }
}
