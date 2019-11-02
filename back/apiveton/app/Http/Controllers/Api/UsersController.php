<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Pet;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function view($id)
    {
        $users = User::with(['role', 'pets', 'pets.breed', 'pets.type', 'pets.gender', 'veterinaries'])
//            ->withTrashed()
            ->findOrFail($id);
        return response()->json($users);
    }

    public function find($dni) 
    {
        $user = User::all()->where('dni', '=', $dni)->first();
        return response()->json($user);
    }

    public function search($input) 
    {
        if (is_numeric($input)) {
            return $this->find($input);
        } else {
            $users = User::where('name', 'like', '%' . $input . "%")->get();
            return response()->json($users);
        }
    }
}
