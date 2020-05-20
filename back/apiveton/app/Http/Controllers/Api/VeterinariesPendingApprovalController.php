<?php

namespace App\Http\Controllers\Api;

use App\Models\VeterinaryPendingApproval;
use App\Models\User;
use App\Models\Veterinary;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class VeterinariesPendingApprovalController extends Controller
{
    public function index()
    {
        $veterinaries = VeterinaryPendingApproval::all();
        return view('veterinaries.admin_index', compact('veterinaries'));
    }

    /**
     * Save vet pending approve to validate
     * @param Request $request
     * @return Response
     */

    public function storePendingApproval(Request $request)
    {
        DB::beginTransaction();
        try {
            $request->validate(VeterinaryPendingApproval::$rules, VeterinaryPendingApproval::$errorMessages);
            $data = $request->all();
            $data['approved'] = 1;
            Veterinary::create($data);
            $veterinary = VeterinaryPendingApproval::findOrFail($data['id_veterinary']);
            $veterinary->delete();
            DB::commit();
            return redirect(url('/veterinaries'))
                ->with('message', 'Veterinaria aceptada exitosamente.');

        } catch (QueryException $e) {
            return response()->json([
                'success' => false,
                'msg' => 'Se produjo un error al crear una veterinaria',
                'stack' => $e]);
        }
    }



    /*
    public function crear(Request $request)
    {
        $request->validate(Usuario::$rules, Usuario::$errorMessages);
        $data = $request->all();

        Usuario::create($data);

        return redirect(url('/confirmation'))
            ->with('message', 'Usuario creado con éxito :D');
    }

    public function confirmation()
    {

        return view('usuarios.confirmation');
    }
*/
    public function eliminar($id)
    {
        $veterinary = VeterinaryPendingApproval::findOrFail($id);

        $veterinary->delete();

        return redirect(url('/veterinaries'))
            ->with('message', 'Veterinaria eliminada exitosamente.');
    }

    public function eliminarRegistrada($id)
    {
        $veterinary = Veterinary::findOrFail($id);

        $veterinary->delete();

        return redirect(url('/veterinaries/list'))
            ->with('message', 'Veterinaria eliminada exitosamente.');
    }



    public function getUser($id)
    {
        $user = Users::view($id);

        return response()->json($user);
    }
}
