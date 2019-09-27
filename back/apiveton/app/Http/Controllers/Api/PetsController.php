<?php
namespace App\Http\Controllers\api;

use App\Models\Pet;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PetsController extends Controller
{
    public function all()
    {
        $pets = Pet::all();
        return response()->json($pets);
    }

    public function new(Request $request)
    {
        $request->validate(Pet::$rules, Pet::$errorMessages);
        $data = $request->all();
       /* if($request->hasFile('image')) {
            $file = $request->image;
            $nameImage = time() . "." . $file->extension();
            $file->move(public_path(path: '/imgs'), $nameImage);
            $data['image'] = 'imgs/' . $nameImage;
        }else {
            $data['image'] = '';
        }*/
        Pet::create($data);
        return response()->json([
            'sucess' => true
        ]);
    }
}
