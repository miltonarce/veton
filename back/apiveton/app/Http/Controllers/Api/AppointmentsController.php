<?php
namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AppointmentsController extends Controller
{
   
    /**
     * VALIDAR QUE LA VETERINARIA EXISTA ID_VETERINARY, HACER UN FIND ANTES
     * VALIDAR QUE LA FECHA SEA MAYOR O IGUAL A LA FECHA DE HOY (PARA NO REGISTRAR UN TURNO DE UNA FECHA ANTERIOR...)
     * HACER UN INSERT BASICO INSERT INTO appointments ....
     */
    public function save() 
    {
        return response()->json([
            'success' => true,
            'msg' => 'Se ha registrado su turno'
        ]);
    }

    /**
     * TRAER EL HISTORIAL DE TURNOS QUE REALIZO UN USUARIO ORDENADOS POR FECHA
     * HACER UN SELECT * FROM appointments where fk_id_user = $elusuariologeado
     */
    public function findByUser() 
    {
        return response()->json([
            'success' => true,
            'data' => []
        ]);
    }

    /**
     * ELIMINAR EL TURNO DE UNA PERSONA....
     * HACER UN DELETE * FROM appointments where fk_id_user = $elusuariologeado
     */
    public function delete()
    {
       
        return response()->json([
            'success' => true,
            'msg' => 'Se ha cancelado su turno correctamente!!'
        ]);
    }

    /**
     * VALIDAR QUE LA VETERINARIA EXISTA, HACER UN FIND ANTES
     * HACER UN SELECT * FROM appointments WHERE id_vet = $idVet AND date = $date
     */
    public function findByVet($idVet, $date)
    {
        return response()->json([
            'success' => true,
            'data' => [
                [
                    'id_appointment' => 1,
                    'date' => date("Y-m-d H:i:s"),
                    'hour' => '13 - 14',
                    'type' => 'Consulta rápida',
                    'reason' => 'prueba',
                    'fk_id_user' => 1,
                    'fk_veterinary' => 1
                ],
                [
                    'id_appointment' => 2,
                    'date' => date("Y-m-d H:i:s"),
                    'hour' => '17 - 18',
                    'type' => 'Consulta rápida',
                    'reason' => 'prueba',
                    'fk_id_user' => 3,
                    'fk_veterinary' => 1
                ],
                [
                    'id_appointment' => 3,
                    'date' => date("Y-m-d H:i:s"),
                    'hour' => '19 - 20',
                    'type' => 'Consulta rápida',
                    'reason' => 'prueba',
                    'fk_id_user' => 2,
                    'fk_veterinary' => 1
                ]
            ]
        ]);
    }
   
}
