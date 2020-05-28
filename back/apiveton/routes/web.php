<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('login');
});
Route::post('/', 'Api\\AuthController@loginAdmin');
Route::get('/veterinaries', 'Api\\VeterinariesPendingApprovalController@index');
Route::get('/veterinaries/list', 'Api\\VeterinariesController@index');
Route::delete('/veterinaries/{id}/eliminar', 'Api\\VeterinariesPendingApprovalController@eliminar')
    ->where('id', '\d+');
Route::delete('/veterinaries/{id}/eliminarRegistrada', 'Api\\VeterinariesPendingApprovalController@eliminarRegistrada')
    ->where('id', '\d+');
Route::post('/veterinaries/guardar', 'Api\\VeterinariesPendingApprovalController@storePendingApproval');
