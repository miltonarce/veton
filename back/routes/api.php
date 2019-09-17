<?php

use Illuminate\Http\Request;

Route::get('pets', 'API\\PetsController@all');
