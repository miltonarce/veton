<?php

use Illuminate\Database\Seeder;

class User_VeterinaryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_veterinary')->insert([
            'id_veterinary' => 1,
            'id_user' => 4,
        ]);
        DB::table('user_veterinary')->insert([
            'id_veterinary' => 2,
            'id_user' => 4,
        ]);
        DB::table('user_veterinary')->insert([
            'id_veterinary' => 2,
            'id_user' => 8,
        ]);
        DB::table('user_veterinary')->insert([
            'id_veterinary' => 3,
            'id_user' => 9,
        ]);
    }

}
