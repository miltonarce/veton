<?php

use Illuminate\Database\Seeder;

class ConsultationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('consultations')->insert([
            'id_consultation' => 1,
            'id_user' => 3,
            'id_veterinary' => 1,
            'id_history' => 1,
            'date' => '2019-09-21 13:45:12',
            'comments' => 'Test 1 comment on consultations table',
            'afflictions_procedures' => 'Test 1 addfiction procedures on consultations table',
            'image' => '',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('consultations')->insert([
            'id_consultation' => 2,
            'id_user' => 3,
            'id_veterinary' => 1,
            'id_history' => 2,
            'date' => '2019-09-21 14:45:12',
            'comments' => 'Test 2 comment on consultations table',
            'afflictions_procedures' => 'Test 2 addfiction procedures on consultations table',
            'image' => '',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
