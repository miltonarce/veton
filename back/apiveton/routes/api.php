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

Route::get('pets', 'api\\PetsController@all');
Route::post('pets', 'api\\PetsController@store');
Route::get('clinicalhistories', 'api\\ClinicalHistoriesController@all');
Route::post('clinicalhistories', 'api\\ClinicalHistoriesController@store');
Route::get('consultations', 'api\\ConsultationsController@all');
Route::post('consultations', 'api\\ConsultationsController@store');
Route::get('veterinaries', 'api\\VeterinariesController@all');
Route::post('veterinaries', 'api\\VeterinariesController@store');
