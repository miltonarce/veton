<?php
namespace App\Http\Controllers\Api;

use App\Models\Pet;
use App\Models\User;
use App\Models\ClinicalHistory;
use App\Models\Consultation;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Support\Facades\DB;

class PetsController extends Controller
{
    /**
     * Retrieve all pets
     * @return Response
     */
    public function all()
    {
        $pets = Pet::all();
        return response()->json($pets);
    }

    /**
     * Retrieve pet detail by id_pet
     * @param int $id
     * @return Response
     */
    public function detail($id)
    {
        $pets = Pet::with(['type', 'breed', 'gender', 'user', 'clinicalHistory', 'clinicalHistory.consultations'])->findOrFail($id);
        return response()->json($pets);
    }

    /**
     * Retrieve all pets form user by id
     * @param int $idUser
     * @return Response
     */
    public function findByUser($idUser) 
    {
        $pets = Pet::where('id_user', '=', $idUser)->get();
        return response()->json($pets);
    }

    /**
     * Retrieve last vets
     * @param int $idUser
     * @return Response
     */
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
                        ->where('clinicalhistories.id_veterinary', '=', $idVet)->orderBy('consultations.updated_at', 'desc')->limit(4)->get();
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
     * Save pet , validate fields, save image
     * @param Request $request
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

    /**
     * Update pet
     * @param Request request
     * @param int $idPet
     * @return Response
     */
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

    /**
     * Delete pet by idPet
     * @param int $idPet
     * @return Response
     */
    public function removePet($idPet) 
    {
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

    /**
     * Retrieve statics from pet
     * @param int $idPet
     * @return Response
     */
    public function statistics($id) 
    {
        $statistics = [];
        $pets = Pet::where('id_user', '=', $id)->get();
        foreach ($pets as $pet) {
            $clinicalHistories = ClinicalHistory::all()->where('id_pet', '=', $pet->id_pet);
            $cantConsultas = 0;
            foreach($clinicalHistories as $history){
                $consultations = Consultation::all()->where('id_history', '=', $history->id_history);
                $cantConsultas = $cantConsultas + count($consultations);
                
            }
            $completName = $pet->name.' '.$pet->last_name;
            array_push($statistics, ["name"=> $completName, 'y' => $cantConsultas]);       
        }
        return response()->json([
            'success' => true,
            'msg' => null,
            'data' => $statistics
        ]);
    }

    /**
     * Handle input images from save and move to folder assets
     * @param Request $request
     * @param array $data
     * @return array
     */
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
