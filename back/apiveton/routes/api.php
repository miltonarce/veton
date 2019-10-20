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

// Auth (Autenticarse con email y password)
Route::post('auth/login', 'Api\\AuthController@login');
// Auth (Desloguearse)
Route::get('auth/logout', 'Api\\AuthController@logout');
// Auth (Registrase con email y password, usuarios con rol "3")
Route::post('auth/register', 'Api\\AuthController@register');

// Pets (Obtener todas las mascotas)
Route::get('pets', 'Api\\PetsController@all');
// Pets (Obtener el detalle de una mascota)
Route::get('pets/{id}', 'Api\\PetsController@detail');
Route::put('pets/{id}', 'Api\\PetsController@editPet');
// Pets (Obtener las mascotas de un usuario)
Route::get('pets/users/{id}', 'Api\\PetsController@findByUser');

// Users (Obtener un usuario por dni)
Route::get('/users/{dni}', 'Api\\UsersController@find');

// ClinicalHistories (Obtener todas las historias clinicas)
Route::get('clinicalhistories', 'Api\\ClinicalHistoriesController@all');
// ClinicalHistories (Obtener las historias clinicas de una mascota)
Route::get('clinicalhistories/{id}', 'Api\\ClinicalHistoriesController@findById');
// ClinicalHistories (Crear una historia clinica de una mascota)
Route::post('clinicalhistories/{idPet}', 'Api\\ClinicalHistoriesController@store');
// editar una historia clinica 
Route::put('clinicalhistories/{idHistory}', 'Api\\ClinicalHistoriesController@editHistory');
// borrar una historia clinica
Route::delete('clinicalhistories/{idHistory}', 'Api\\ClinicalHistoriesController@removeHistory');


// Consultations (Obtener todas las consultas)
Route::get('consultations', 'Api\\ConsultationsController@all');
// Consultations (Obtener las consultas de una historia clinica)
Route::get('consultations/{id}', 'Api\\ConsultationsController@findById');
// Consultations (Crear una consulta para una historia clinica)
Route::post('consultations/{idHistory}', 'Api\\ConsultationsController@store');
Route::put('consultations/{idConsultation}', 'Api\\ConsultationsController@editConsultation');
Route::delete('consultations/{idConsultation}', 'Api\\ConsultationsController@removeConsultation');

Route::get('veterinaries', 'Api\\VeterinariesController@all');
Route::get('veterinaries/{idVeterinary}/users', 'Api\\VeterinariesController@getAllUsersByVeterinary');
Route::post('veterinaries', 'Api\\VeterinariesController@storePendingApproval');
Route::get('breeds', 'Api\\BreedsController@all');
Route::get('types', 'Api\\TypesController@all');

Route::group(['middleware' => 'api'], function() {
Route::post('pets', 'Api\\PetsController@store');
 });
