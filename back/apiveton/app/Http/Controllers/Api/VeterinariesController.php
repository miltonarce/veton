<?php

namespace App\Http\Controllers\Api;

use App\Models\Veterinary;
use App\Models\VeterinaryPendingApproval;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class VeterinariesController extends Controller
{
    /**
     * Retrieve all veterinaries
     * @return Response
     */
    public function all()
    {
        $veterinaries = Veterinary::all();
        return response()->json($veterinaries);
    }

    public function index()
    {
        $veterinariesList = Veterinary::all();
        return view('veterinaries.admin_list_vets', compact('veterinariesList'));
    }

    /**
     * Save vet pending approve to validate
     * @param Request $request
     * @return Response
     */
    /*public function storePendingApproval(Request $request)
    {
        try {
            $request->validate(VeterinaryPendingApproval::$rules, VeterinaryPendingApproval::$errorMessages);
            $data = $request->all();
            $data['approved'] = 1;
            VeterinaryPendingApproval::create($data);
            return response()->json([
                'success' => true,
                'msg' => 'Se creo la veterinaria',
                'stack' => ''
            ]);
        } catch (QueryException $e) {
            return response()->json([
                'success' => false,
                'msg' => 'Se produjo un error al crear una veterinaria',
                'stack' => $e]);
        }
    }*/
    public function store(Request $request)
    {
        try {
            $request->validate(Veterinary::$rules, Veterinary::$errorMessages);
            $data = $request->all();
            $data['approved'] = 1;
            Veterinary::create($data);
            return response()->json([
                'success' => true,
                'msg' => 'Se creo la veterinaria',
                'stack' => ''
            ]);
        } catch (QueryException $e) {
            return response()->json([
                'success' => false,
                'msg' => 'Se produjo un error al crear una veterinaria',
                'stack' => $e]);
        }
    }
}
