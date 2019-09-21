<?php

use Illuminate\Http\Request;

Route::get('pets', 'API\\PetsController@all');
Route::post('pets', 'API\\PetsController@new');
