<?php

use Illuminate\Http\Request;

Route::get('pets', 'API\\PetsController@all');
Route::post('pets', 'API\\PetsController@new');
Route::get('clinicalhistories', 'API\\ClinicalHistoriesController@all');
Route::post('clinicalhistories', 'API\\ClinicalHistoriesController@new');
