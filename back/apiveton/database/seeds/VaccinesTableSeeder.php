<?php

use Illuminate\Database\Seeder;

class VaccinesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('vaccines')->insert([
            'id_vaccine' => 1,
            'name' => 'Parvovirus',
            'next_dosis' => '2020-08-20 13:45:12',
            'description' => '',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('vaccines')->insert([
            'id_vaccine' => 2,
            'name' => 'Moquillo',
            'next_dosis' => '2020-07-20 13:45:12',
            'description' => '',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('vaccines')->insert([
            'id_vaccine' => 3,
            'name' => 'Adenovirus tipo 2',
            'next_dosis' => null,
            'description' => '',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('vaccines')->insert([
            'id_vaccine' => 4,
            'name' => 'Hepatitis infecciosa C',
            'next_dosis' => '2022-08-20 13:45:12',
            'description' => '',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('vaccines')->insert([
            'id_vaccine' => 5,
            'name' => 'Leptospirosis',
            'next_dosis' => null,
            'description' => '',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('vaccines')->insert([
            'id_vaccine' => 6,
            'name' => 'Coronavirus',
            'next_dosis' => null,
            'description' => '',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('vaccines')->insert([
            'id_vaccine' => 7,
            'name' => 'Parainfluenza',
            'next_dosis' => null,
            'description' => '',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('vaccines')->insert([
            'id_vaccine' => 8,
            'name' => 'Rabia',
            'next_dosis' => null,
            'description' => '',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('vaccines')->insert([
            'id_vaccine' => 9,
            'name' => 'Panleucopenia',
            'next_dosis' => '2019-12-20 13:45:12',
            'description' => '',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('vaccines')->insert([
            'id_vaccine' => 10,
            'name' => 'Calcivirus ',
            'next_dosis' => '2019-12-20 13:45:12',
            'description' => '',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('vaccines')->insert([
            'id_vaccine' => 11,
            'name' => 'Rinotraqueitis',
            'next_dosis' => '2019-12-20 13:45:12',
            'description' => '',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('vaccines')->insert([
            'id_vaccine' => 12,
            'name' => 'Leucemia Felina',
            'next_dosis' => '2019-12-30 13:45:12',
            'description' => '',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('vaccines')->insert([
            'id_vaccine' => 13,
            'name' => 'Polivalente Primera Dosis',
            'next_dosis' => null,
            'description' => '',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('vaccines')->insert([
            'id_vaccine' => 14,
            'name' => 'Polivalente Segunda Dosis',
            'next_dosis' => null,
            'description' => '',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('vaccines')->insert([
            'id_vaccine' => 15,
            'name' => 'Polivalente Anual',
            'next_dosis' => null,
            'description' => '',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
