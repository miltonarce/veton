<?php
namespace App\Http\Controllers\Api;

use App\Models\Appointment;
use App\Models\User;
use App\Models\Veterinary;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\App;

class AppointmentsController extends Controller
{

   /**
    * Store appointment recived, validate all fields with rules model
    * @param Request request
    * @return Response 
    */
    public function save(Request $request)
    {
       try {
           $request->validate(Appointment::$rules, Appointment::$errorMessages);
           $data = $request->all();
           $appointmentTaken = Appointment::all()
                                ->where('date', '=', $data['date'])
                                ->where('time', '=', $data['time'])
                                ->first();
           if ($appointmentTaken) {
               return response()->json([
                  'success' => false,
                  'msg'     => 'Este horario no se encuentras disponible.',
                  'data'    => $appointmentTaken,
                   'stack'  => ''

               ]);
           } else {
               $appointment = Appointment::create($data);
               return response()->json([
                   'success' => true,
                   'msg'     => 'El turno fue agendado exitosamente.',
                   'data'    => $appointment,
                   'stack' => ''
               ]);
           }
       } catch (QueryException $e) {
            return response()->json([
                'success' => false,
                'msg'     => 'No se pudo agendar el turno.',
                'stack'   => $e
            ]);
       }
    }

    /**
     * Find all appointments by user via id
     * @param int $idUser
     * @return Response
     */
    public function findByUser($idUser)
    {
        try {
            $appointments = Appointment::where('id_user', '=', $idUser)
                ->orderBy('appointments.date', 'desc')
                ->get();
            return response()->json([
                'success' => true,
                'data'    => $appointments,
                'stack'   => ''
            ]);
        } catch (QueryException $e) {
            return response()->json([
                'success' =>false,
                'msg'     => 'Hubo un problema con el historial de turnos',
                'stack'   => $e,
            ]);
        }
    }

    /**
     * Retrieve all appointments has not expired by user via id
     * @param int $idUser
     * @return Response
     */
    public function findByUserFuture($idUser) 
    {
        try {
            $appointments = Appointment::where('id_user', '=', $idUser)
                ->where('date', '>=', date('Y-m-d'))
                ->get();
            return response()->json([
                'success' => true,
                'data'    => $appointments,
                'stack'   => ''
            ]);
        } catch (QueryException $e) {
            return response()->json([
                'success' =>false,
                'msg'     => 'Hubo un problema con el historial de turnos',
                'stack'   => $e,
            ]);
        }
    } 

    /**
     * Delete appointment from any user by idAppointment
     * @param number $idUser  
     * @param number $idAppointment
     * @return Response 
     * */
    public function delete($idUser, $idAppointment)
    {
        try {
            $appointment = Appointment::findOrFail($idAppointment)
                ->where('id_user', '=', $idUser)
                ->where('id_appointment', '=', $idAppointment);
            $appointment->delete();
            return response()->json([
                'success' =>true,
                'msg'     => 'Se ha cancelado su turno correctamente!',
                'stack'   => ''
            ]);
        } catch(QueryException $e) {
            return response()->json([
                'success' => false,
                'msg'     => 'No se ha podido cancelar tu turno.',
                'stack'   => $e,
            ]);
        }
    }

    /**
     * Find appointments by veterinary in date "x"
     * @param number $idVet
     * @param string $date
     * @return Response
     */
    public function findByVet($idVet, $date)
    {
        try {
            $vet = Veterinary::findOrFail($idVet);

            $appointments = Appointment::where('id_veterinary', '=', $vet->id_veterinary)
            ->where('date', '=', $date)
            ->get();
            return response ()->json([
                'success' => true,
                'data'    => $appointments,
                'stack'   => ''
            ]);
        } catch(QueryException $e) {
            return response()->json([
                'success' => false,
                'msg'     => 'No se pudieron traer los turnos.',
                'stack'   => $e,
            ]);
        }
    }

}
