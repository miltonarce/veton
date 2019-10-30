<?php
namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Role;
use App\Models\VeterinaryPendingApproval;
use Illuminate\Support\Facades\DB;
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
                $credentials = [
                    'email' => $request['email'],
                    'password' => $request['password']
                ];
                if (! $token = auth()->attempt($credentials)) {
                    return response()->json(['success' => false, 'msg' => 'Datos incorrectos']);
                }
                $user = auth()->user();
                return response()->json([
                    'success' => true, 
                    'additional_info' => $this->getAditionalInfo($user)
                ])->withCookie('token', $token, auth()->factory()->getTTL() * 60, '/', null, false, true);
            }
            return response()->json(['success' => false, 'msg' => 'El email no existe']);
        }
    }

    public function logout(Request $request) 
    {
        auth()->logout();
        return response()->json(['success' => true, 'msg' => 'Se deslogueo correctamente!']);
    }

    public function register(Request $request)
    {
        if($request['id_role'] == '2' ){
             DB::beginTransaction();
            try{
                $request->validate(User::$rules);
                $user = $request->all();
                $user['password'] = Hash::make($request['password']);
                $user = User::create($user);
                $request['id_user'] = $user['id_user'];
                $request['approved'] = 1;
                $request->validate(VeterinaryPendingApproval::$rules, VeterinaryPendingApproval::$errorMessages);
                $data = $request->all();
                VeterinaryPendingApproval::create($data);
                DB::commit();
                return response()->json([
                    'success' => true
                ]);
            }catch(QueryException $e){
                 DB::rollback();
                return response()->json(['success' => false, 'msg' => 'Se produjo un error al crear su usuario', 'stack' => $e]);
            }
        }else{
            try {
                $request->validate(User::$rules);
                $user = $request->all();
                $user['password'] = Hash::make($request['password']);
                $user = User::create($user);
                return response()->json(['success' => true, 'msg' => 'Se creo su usuario!', 'id' => $user->id_user]);
            } catch (QueryException $e) {
                return response()->json(['success' => false, 'msg' => 'Se produjo un error al crear su usuario', 'stack' => $e]);
            }
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