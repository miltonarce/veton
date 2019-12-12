<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Pet;
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

}
