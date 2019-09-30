<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function index()
    {
        $users = \App\Models\User::with('role')
                ->withTrashed()
                ->get();
        return response()->json($users);
    }
}
