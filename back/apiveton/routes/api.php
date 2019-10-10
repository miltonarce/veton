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

Route::get('users/{id}', 'Api\\UsersController@view');
Route::get('pets', 'Api\\PetsController@all');
Route::get('pets/{id}', 'Api\\PetsController@view');
Route::get('clinicalhistories', 'Api\\ClinicalHistoriesController@all');
Route::post('clinicalhistories', 'Api\\ClinicalHistoriesController@store');
Route::get('consultations', 'Api\\ConsultationsController@all');
Route::post('consultations', 'Api\\ConsultationsController@store');
Route::get('veterinaries', 'Api\\VeterinariesController@all');
Route::post('veterinaries', 'Api\\VeterinariesController@store');
Route::get('breeds', 'Api\\BreedsController@all');
Route::get('types', 'Api\\TypesController@all');

Route::group(['middleware' => 'api'], function() {
Route::post('pets', 'Api\\PetsController@store');
 });
