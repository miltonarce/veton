<?php

use Illuminate\Database\Seeder;

class BreedsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('breeds')->insert([
            'id_breed' => 1,
            'id_type' =>1,
            'breed' => 'Callejero',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 2,
            'id_type' =>1,
            'breed' => 'Siames',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 3,
            'id_type' =>1,
            'breed' => 'Siberiano',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 4,
            'id_type' =>2,
            'breed' => 'Callejero',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 5,
            'id_type' =>2,
            'breed' => 'Labrador',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 6,
            'id_type' =>2,
            'breed' => 'Pastor Alemán',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 7,
            'id_type' =>2,
            'breed' => 'Golden Retriever',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 8,
            'id_type' =>2,
            'breed' => 'Bulldog Francés',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 9,
            'id_type' =>2,
            'breed' => 'Beagle',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 10,
            'id_type' =>2,
            'breed' => 'Rooweiler',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 11,
            'id_type' =>2,
            'breed' => 'Yorkshire Terrier',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
