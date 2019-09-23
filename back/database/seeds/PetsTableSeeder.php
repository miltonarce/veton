<?php

use Illuminate\Database\Seeder;

class PetsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pets')->insert([
            'id_pet' => 1,
            'id_user' =>2,
            'id_type' =>1,
            'id_breed' =>1,
            'id_gender' =>1,
            'name' => 'Luli',
            'last_name' =>'Saraza',
            'birthday'=>'2010-08-20 13:45:12',
            'image'=>'',
            'weight' => 2,
            'colors' =>'Blanca y negra',
            'comments'=> 'Comentario de testeo',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('pets')->insert([
            'id_pet' => 2,
            'id_user' =>2,
            'id_type' =>2,
            'id_breed' =>1,
            'id_gender' =>2,
            'name' => 'Chocolate',
            'last_name' =>'Prestifilippo',
            'birthday'=>'2012-06-20 13:45:12',
            'image'=>'',
            'weight' => 7,
            'colors' =>'Marrón oscuro',
            'comments'=> 'Comentario de testeo',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
