<?php

use Illuminate\Database\Seeder;

class Dewormer_PetTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('dewormer_pet')->insert([
            'id_pet' => 1,
            'id_dewormer' => 5,
        ]);
        DB::table('dewormer_pet')->insert([
            'id_pet' => 1,
            'id_dewormer' => 7,
        ]);
        DB::table('dewormer_pet')->insert([
            'id_pet' => 2,
            'id_dewormer' => 4,
        ]);
        DB::table('dewormer_pet')->insert([
            'id_pet' => 2,
            'id_dewormer' => 1,
        ]);
        DB::table('dewormer_pet')->insert([
            'id_pet' => 3,
            'id_dewormer' => 1,
        ]);
        DB::table('dewormer_pet')->insert([
            'id_pet' => 3,
            'id_dewormer' => 3,
        ]);
        DB::table('dewormer_pet')->insert([
            'id_pet' => 4,
            'id_dewormer' => 5,
        ]);
        DB::table('dewormer_pet')->insert([
            'id_pet' => 4,
            'id_dewormer' => 7,
        ]);
        DB::table('dewormer_pet')->insert([
            'id_pet' => 5,
            'id_dewormer' => 1,
        ]);
        DB::table('dewormer_pet')->insert([
            'id_pet' => 5,
            'id_dewormer' => 2,
        ]);
        DB::table('dewormer_pet')->insert([
            'id_pet' => 6,
            'id_dewormer' => 1,
        ]);
        DB::table('dewormer_pet')->insert([
            'id_pet' => 6,
            'id_dewormer' => 4,
        ]);
        DB::table('dewormer_pet')->insert([
            'id_pet' => 7,
            'id_dewormer' => 1,
        ]);
        DB::table('dewormer_pet')->insert([
            'id_pet' => 7,
            'id_dewormer' => 3,
        ]);
    }
}
