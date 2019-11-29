<?php

use Illuminate\Database\Seeder;

class AppointmentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('appointments')->insert([
            'id_appointment' => 1,
            'id_veterinary' => 1,
            'id_user' => 3,
            'date' => '2019-12-1',
            'time' =>'9-10',
            'type' =>1,
            'reason' =>'test appointment.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('appointments')->insert([
            'id_appointment' => 2,
            'id_veterinary' => 2,
            'id_user' => 10,
            'date' => '2019-12-1',
            'time' =>'10-11',
            'type' =>1,
            'reason' =>'test appointment 2.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('appointments')->insert([
            'id_appointment' => 3,
            'id_veterinary' => 2,
            'id_user' => 10,
            'date' => '2019-12-10',
            'time' =>'10-11',
            'type' =>2,
            'reason' =>'test appointment 3.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
