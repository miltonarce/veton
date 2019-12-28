<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Pet;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    /**
     * Get user with all data
     * @param int $id
     * @return Response
     */
    public function view($id)
    {
        $users = User::with(['role', 'pets', 'pets.breed', 'pets.type', 'pets.gender', 'veterinaries'])
            ->findOrFail($id);
        return response()->json($users);
    }

    /**
     * Retrieve user by dni
     * @param int $dni
     * @return Response
     */
    public function find($dni) 
    {
        $user = User::all()->where('dni', '=', $dni)->first();
        return response()->json($user);
    }

    /**
     * Search users via like name or dni
     * @param int $input
     * @return Response
     */
    public function search($input) 
    {
        $users = User::where('email', 'like', '%' . $input . "%")->orWhere('dni', 'like', '%' . $input . "%")->get();
        return response()->json($users);
    }
    /**
     * Update pet
     * @param Request request
     * @param int $idUser
     * @return Response
     */
    public function editUser(Request $request, $idUser)
    {
        try {
            $request->validate(User::$rules, User::$errorMessages);
            $data = $request->all();
            $user = User::findOrFail($idUser);
            $data = $this->saveImageIfExists($request, $data);
            $user->update($data);
            return response()->json([
                'success' => true,
                'msg'     => 'El usuario se edito correctamente.',
                'stack'   => ''
            ]);
        } catch (QueryException $e) {
            return response()->json([
                'success' => false,
                'msg' => 'Se produjo un error al editar el usuario',
                'stack' => $e
            ]);
        }
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
