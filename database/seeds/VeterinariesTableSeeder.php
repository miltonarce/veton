<?php

use Illuminate\Database\Seeder;

class VeterinariesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('veterinaries')->insert([
            'id_veterinary' => 1,
            'id_user' =>1,
            'business_name' => 'Maskkotas SA',
            'fantasy_name' =>'Maskkotas',
            'cuit_cuil' =>12345678,
            'image'=>'maskkotas.jpg',
            'phone1' => 123456789,
            'phone2'=> 123456789,
            'street'=> 'Calle falsa 123',
            'between_streets'=>'Calle siempre viva, Elm street',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('veterinaries')->insert([
            'id_veterinary' => 2,
            'id_user' =>6,
            'business_name' => 'Encalada SA',
            'fantasy_name' =>'Veterinaria Encalada',
            'cuit_cuil' =>55896987,
            'image'=>'encalada.jpg',
            'phone1' => 45785874,
            'phone2'=> 45785875,
            'street'=> 'Av. Gaona 3258',
            'between_streets'=>'Terrero y Trelles',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('veterinaries')->insert([
            'id_veterinary' => 3,
            'id_user' =>7,
            'business_name' => 'Drovenort SA',
            'fantasy_name' =>'Veterinaria Drovenort',
            'cuit_cuil' =>11254759,
            'image'=>'drovenort.jpg',
            'phone1' => 46118956,
            'phone2'=> 46118957,
            'street'=> 'Av. Rivadavia 8858',
            'between_streets'=>'Av. Acoyte y Hidalgo',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
