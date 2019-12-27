<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::options('/{any}', function() {return '';})->where('any', '.*');

// Auth (Autenticarse con email y password)
Route::post('auth/login', 'Api\\AuthController@login');
// Auth (Desloguearse)
Route::get('auth/logout', 'Api\\AuthController@logout');
// Auth (Registrase con email y password, usuarios con rol "3")
Route::post('auth/register', 'Api\\AuthController@register');

Route::middleware('auth')->group(function() {
// Pets (Obtener todas las mascotas)
Route::get('pets', 'Api\\PetsController@all');
// Pets (Obtener las ultimas 10 mascotas atendidas por una veterinaria)
Route::get('pets/last/veterinary/{idUser}', 'Api\\PetsController@findLastByVeterinary');
// Pets (Obtener el detalle de una mascota)
Route::get('pets/{id}', 'Api\\PetsController@detail');
Route::put('pets/{id}', 'Api\\PetsController@editPet');
// Pets (Obtener las mascotas de un usuario)
Route::get('pets/users/{id}', 'Api\\PetsController@findByUser');
//Pets (Eliminar mascota)
Route::delete('pets/{idPet}', 'Api\\PetsController@removePet');
//Statistics (Estadisticas usuario)
Route::get('/pets/users/{id}/statistics', 'Api\\PetsController@statistics');

// Users (Obtener un usuario por dni)
Route::get('/users/{dni}', 'Api\\UsersController@find');
// Users Obtener usuarios por dni like o nombre)
Route::get('/users/search/{input}', 'Api\\UsersController@search');
//Users update
Route::put('/users/{idUser}', 'Api\\UsersController@editUser');

// ClinicalHistories (Obtener todas las historias clinicas)
Route::get('clinicalhistories', 'Api\\ClinicalHistoriesController@all');
// ClinicalHistories por veterinaria
Route::get('clinicalhistories/veterinaries/{idVet}', 'Api\\ClinicalHistoriesController@findByVeterinaries');
// ClinicalHistories (Obtener las historias clinicas de una mascota)
Route::get('clinicalhistories/{id}', 'Api\\ClinicalHistoriesController@findById');
// ClinicalHistories (Crear una historia clinica de una mascota)
Route::post('clinicalhistories/{idPet}', 'Api\\ClinicalHistoriesController@store');
// ClinicalHistories (Editar una historia clinica)
Route::put('clinicalhistories/{idHistory}', 'Api\\ClinicalHistoriesController@editHistory');
// ClinicalHistories (Borrar una historia clinica)
Route::delete('clinicalhistories/{idHistory}', 'Api\\ClinicalHistoriesController@removeHistory');
// ClinicalHistory (Traer una sola por id)
Route::get('clinicalhistory/{id}', 'Api\\ClinicalHistoriesController@findOneById');

// Consultations (Obtener todas las consultas)
Route::get('consultations', 'Api\\ConsultationsController@all');
// Consultations (Obtener las consultas de una historia clinica)
Route::get('consultations/{id}', 'Api\\ConsultationsController@findById');
// Consultations (Crear una consulta para una historia clinica)
Route::post('consultations/{idHistory}', 'Api\\ConsultationsController@store');
Route::put('consultations/{idConsultation}', 'Api\\ConsultationsController@editConsultation');
Route::delete('consultations/{idConsultation}', 'Api\\ConsultationsController@removeConsultation');
//Consultation traer una consulta por id
Route::get('consultation/{id}', 'Api\\ConsultationsController@findOneById');

// Appointments (Registrar un turno)
Route::post('appointments', 'Api\\AppointmentsController@save');
// Appointments (Obtener los turnos que realizó una persona)
Route::get('appointments/{user}', 'Api\\AppointmentsController@findByUser');
// Appointments (Obtener los turnos que va a tener una persona)
Route::get('appointments/{user}/future', 'Api\\AppointmentsController@findByUserFuture');

// Appointments (Cancelar un turno de una persona...)
Route::delete('appointments/{user}/{idAppointment}', 'Api\\AppointmentsController@delete');
// Appointments (Obtener los turnos registrados de una veterinaria dado una fecha)
Route::get('appointments/veterinary/{idVet}/{date}', 'Api\\AppointmentsController@findByVet');

Route::get('veterinaries', 'Api\\VeterinariesController@all');
Route::post('veterinaries', 'Api\\VeterinariesController@storePendingApproval');
Route::get('breeds', 'Api\\BreedsController@all');
Route::get('types', 'Api\\TypesController@all');
Route::get('vaccines', 'Api\\VaccinesController@all');
Route::get('dewormers', 'Api\\DewormersController@all');
Route::post('pets', 'Api\\PetsController@store');
});
/*
Route::group(['middleware' => 'api'], function() {
Route::post('pets', 'Api\\PetsController@store');
 });*/
