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
        DB::table('appointments')->insert([
            'id_appointment' => 4,
            'id_veterinary' => 1,
            'id_user' => 11,
            'date' => '2019-12-3',
            'time' =>'11-12',
            'type' =>2,
            'reason' =>'Chad Nieto, vacunacion',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('appointments')->insert([
            'id_appointment' => 5,
            'id_veterinary' => 1,
            'id_user' => 12,
            'date' => '2019-12-3',
            'time' =>'13-14',
            'type' =>2,
            'reason' =>'Narciso Salazar, chequeo anual.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('appointments')->insert([
            'id_appointment' => 6,
            'id_veterinary' => 1,
            'id_user' => 10,
            'date' => '2019-12-4',
            'time' =>'9-10',
            'type' =>2,
            'reason' =>'Azul Diaz, consulta anual.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('appointments')->insert([
            'id_appointment' => 7,
            'id_veterinary' => 1,
            'id_user' => 12,
            'date' => '2019-12-4',
            'time' =>'10-11',
            'type' =>2,
            'reason' =>'Octavio Salazar, vacunación.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('appointments')->insert([
            'id_appointment' => 8,
            'id_veterinary' => 1,
            'id_user' => 12,
            'date' => '2019-12-5',
            'time' =>'10-11',
            'type' =>2,
            'reason' =>'Anastasio Salazar, chequeo.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('appointments')->insert([
            'id_appointment' => 9,
            'id_veterinary' => 1,
            'id_user' => 12,
            'date' => '2019-12-3',
            'time' =>'14-15',
            'type' =>2,
            'reason' =>'Anastasio Salazar, chequeo.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('appointments')->insert([
            'id_appointment' => 10,
            'id_veterinary' => 1,
            'id_user' => 10,
            'date' => '2019-12-3',
            'time' =>'14-15',
            'type' =>2,
            'reason' =>'Azul Diaz, chequeo.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('appointments')->insert([
            'id_appointment' => 11,
            'id_veterinary' => 1,
            'id_user' => 2,
            'date' => '2019-12-6',
            'time' =>'9-10',
            'type' =>2,
            'reason' =>'Luli Perez, chequeo.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('appointments')->insert([
            'id_appointment' => 12,
            'id_veterinary' => 1,
            'id_user' => 2,
            'date' => '2019-12-9',
            'time' =>'10-11',
            'type' =>2,
            'reason' =>'Tom Perez, chequeo.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('appointments')->insert([
            'id_appointment' => 13,
            'id_veterinary' => 1,
            'id_user' => 2,
            'date' => '2019-12-19',
            'time' =>'10-11',
            'type' =>2,
            'reason' =>'Tom Perez, chequeo.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('appointments')->insert([
            'id_appointment' => 14,
            'id_veterinary' => 1,
            'id_user' => 2,
            'date' => '2019-12-23',
            'time' =>'10-11',
            'type' =>2,
            'reason' =>'Fiaca Perez, chequeo.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
