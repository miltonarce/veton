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
            'breed' => 'Mestizo',
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
            'breed' => 'Mestizo',
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
        DB::table('breeds')->insert([
            'id_breed' => 12,
            'id_type' =>2,
            'breed' => 'Husky Siberiano',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 13,
            'id_type' =>2,
            'breed' => 'San Bernardo',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 14,
            'id_type' =>2,
            'breed' => 'Boxer',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 15,
            'id_type' =>2,
            'breed' => 'Samoyedo',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 16,
            'id_type' =>2,
            'breed' => 'Pit Bull',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 17,
            'id_type' =>2,
            'breed' => 'Chow Chow',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 18,
            'id_type' =>2,
            'breed' => 'Dálmata',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 19,
            'id_type' =>2,
            'breed' => 'Akita Inu',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 20,
            'id_type' =>2,
            'breed' => 'Collie',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 21,
            'id_type' =>2,
            'breed' => 'Bulldog Inglés',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 22,
            'id_type' =>2,
            'breed' => 'Doberman',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 23,
            'id_type' =>2,
            'breed' => 'Schnauzer',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 24,
            'id_type' =>2,
            'breed' => 'Gran Danés',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 25,
            'id_type' =>2,
            'breed' => 'Cocker Inglés',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 26,
            'id_type' =>2,
            'breed' => 'Shar Pei',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 27,
            'id_type' =>2,
            'breed' => 'Border Collie',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 28,
            'id_type' =>2,
            'breed' => 'Chihuahua',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 29,
            'id_type' =>2,
            'breed' => 'Pastor Belga',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 30,
            'id_type' =>2,
            'breed' => 'Bull Terrier',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 31,
            'id_type' =>2,
            'breed' => 'Caniche',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 32,
            'id_type' =>2,
            'breed' => 'Westie',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 33,
            'id_type' =>2,
            'breed' => 'Welsh Corgi',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 34,
            'id_type' =>2,
            'breed' => 'Fox Terrier',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 35,
            'id_type' =>2,
            'breed' => 'Pekinés',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 36,
            'id_type' =>2,
            'breed' => 'Galgo',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 37,
            'id_type' =>2,
            'breed' => 'Bloodhound',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 38,
            'id_type' =>1,
            'breed' => 'Persa',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 39,
            'id_type' =>1,
            'breed' => 'Bobtail Americano',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 40,
            'id_type' =>1,
            'breed' => 'Bobtail Americano',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 41,
            'id_type' =>1,
            'breed' => 'Somalí',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 42,
            'id_type' =>1,
            'breed' => 'Manx',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 43,
            'id_type' =>1,
            'breed' => 'Azul ruso',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 44,
            'id_type' =>1,
            'breed' => 'Abisinio',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('breeds')->insert([
            'id_breed' => 45,
            'id_type' =>1,
            'breed' => 'Esfinge',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
