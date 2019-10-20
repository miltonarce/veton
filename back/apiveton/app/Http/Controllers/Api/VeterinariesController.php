<?php

namespace App\Http\Controllers\Api;


use App\Models\Veterinary;
use App\Models\VeterinaryPendingApproval;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class VeterinariesController extends Controller
{
    public function all()
    {
        $veterinaries = Veterinary::all();
        return response()->json($veterinaries);
    }
/*
    public function store(Request $request)
    {
        try {
            $request->validate(Veterinary::$rules, Veterinary::$errorMessages);
            $data = $request->all();
            Veterinary::create($data);
            return response()->json([
                'success' => true
            ]);
        } catch (QueryException $e) {
            return response()->json(['success' => false, 'msg' => 'Se produjo un error al crear una veterinaria', 'error_stack' => $e]);
        }
    }
*/
    public function storePendingApproval(Request $request)
    {
        try {
            $request->validate(VeterinaryPendingApproval::$rules, VeterinaryPendingApproval::$errorMessages);
            $data = $request->all();
            $data['approved'] = 1;
            VeterinaryPendingApproval::create($data);
            return response()->json([
                'success' => true
            ]);
        } catch (QueryException $e) {
            return response()->json(['success' => false, 'msg' => 'Se produjo un error al crear una veterinaria', 'error_stack' => $e]);
        }
    }
}
