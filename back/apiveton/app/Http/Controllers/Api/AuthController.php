<?php
namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Role;
use Auth;
use Hash;
use Validator;

class AuthController extends Controller
{

    public function login(Request $request) 
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:4'
        ]);
        if ($validator->fails()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()]);
        } else {
            if ($this->existsMail($request['email'])) {
                if (Auth::attempt(['password' => $request['password'], 'email' => $request['email']])) {
                    return response()->json(['success' => true, 'additional_info' => $this->getAditionalInfo(Auth::user())]);
                }
                return response()->json(['success' => false, 'msg' => 'Datos incorrectos']);
            }
            return response()->json(['success' => false, 'msg' => 'El email no existe']);
        }
    }

    public function logout(Request $request) 
    {
        Auth::logout();
        return response()->json(['success' => true, 'msg' => 'Se deslogueo correctamente!']);
    }

    public function register(Request $request)
    {
        try {
            $request->validate(User::$rules);
            $user = $request->all();
            $user['password'] = Hash::make($request['password']);
            //SACARLO CUANDO PONGAN QUE ACEPTA NULL
            $user['name'] = '';
            $user['last_name'] = '';
            //SACARLO CUANDO PONGAN QUE ACEPTA NULL
            $user = User::create($user);
            return response()->json(['success' => true, 'msg' => 'Se creo su usuario!', 'id' => $user->id_user]);
        } catch (QueryException $e) {
            return response()->json(['success' => false, 'msg' => 'Se produjo un error al crear su usuario', 'stack' => $e]);
        }
    }

    private function getAditionalInfo($data) 
    {
        return [
            'id_user'=> $data['id_user'],
            'name' => $data['name'],
            'last_name' => $data['last_name'],
            'dni' => $data['dni'],
            'email' => $data['email'],
            'birthday' => date('d-m-Y', strtotime($data['birthday'])),
            'image' => $data['image'],
            'id_role' => $data['id_role']
        ];
    }

    private function existsMail($email) 
    {
        $email = User::all()->where('email', '=', $email)->first();
        return $email ? true : false;
    }

}