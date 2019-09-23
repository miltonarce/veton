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
            'business_name' => 'Veterinaria Test SA',
            'fantasy_name' =>'VeterinariaTest',
            'cuit_cuil' =>12345678,
            'image'=>'',
            'phone1' => 123456789,
            'phone2'=> 123456789,
            'street'=> 'Calle falsa 123',
            'between_streets'=>'Calle siempre viva, Elm street',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
