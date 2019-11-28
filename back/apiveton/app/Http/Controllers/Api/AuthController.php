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

    /**
     * Login User, first check if email exists and validate email and password
     * set cookie if is correcct
     * @param Request $request
     * @return Response
     */
    public function login(Request $request) 
    {
        if ($this->existsMail($request['email'])) {
            $credentials = [
                'email' => $request['email'],
                'password' => $request['password']
            ];
            if (! $token = auth()->attempt($credentials)) {
                return response()->json(['success' => false, 'msg' => 'Datos incorrectos, vuelva a intentar.']);
            }
            $user = auth()->user();
            return response()->json([
                'success' => true,
                'msg' => 'Login exitoso',
                'additional_info' => $this->getAditionalInfo($user),
                'exp' => time() + auth()->factory()->getTTL() * 60
            ])->withCookie('token', $token, auth()->factory()->getTTL() * 60, '/', null, false, true);
        } else {
            return response()->json(['success' => false, 'msg' => 'El email ingresado no es valido.']);
        }
    }

    /**
     * Logout user , destroy session
     * @param Request $request
     * @return Response
     */
    public function logout(Request $request) 
    {
        Auth::logout();
        return response()->json(['success' => true, 'msg' => 'Se deslogueo correctamente!']);
    }

    /**
     * Register new user, handle transaction to better aproach to handle errors
     * @param Request $request
     * @return Response
     */
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
                    'success' => true,
                    'msg' => 'El usuario y la veterinaria fueron creados con exito!',
                ]);
            } catch(QueryException $e){
                 DB::rollback();
                return response()->json(['success' => false, 'msg' => 'Se produjo un error al crear su usuario, por favor ingrese datos distintos.', 'stack' => $e]);
            }
        } else {
            try {
                $request->validate(User::$rules);
                $user = $request->all();
                $user['password'] = Hash::make($request['password']);
                $user = User::create($user);
                return response()->json([
                    'success' => true,
                    'msg' => 'El usuario fue creado con exito!',
                    'id' => $user->id_user,
                    'stack' => ''
                ]);
            } catch (QueryException $e) {
                return response()->json([
                    'success' => false,
                    'msg' => 'Se produjo un error al crear su usuario, por favor ingrese datos distintos.',
                    'stack' => $e]);
            }
        }
    }

    /**
     * Private method to retrieve info to user
     * @param Array
     * @return Array
     */
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

    /**
     * Validate if exists email
     * @param String $email
     * @return bool
     */
    private function existsMail($email) 
    {
        $email = User::all()->where('email', '=', $email)->first();
        return $email ? true : false;
    }

}