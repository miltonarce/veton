<?php

use Illuminate\Database\Seeder;

class Vaccine_PetTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('vaccine_pet')->insert([
            'id_pet' => 2,
            'id_vaccine' => 1,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 2,
            'id_vaccine' => 2,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 2,
            'id_vaccine' => 3,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 2,
            'id_vaccine' => 4,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 2,
            'id_vaccine' => 8,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 1,
            'id_vaccine' => 8,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 1,
            'id_vaccine' => 9,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 1,
            'id_vaccine' => 10,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 3,
            'id_vaccine' => 8,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 3,
            'id_vaccine' => 1,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 3,
            'id_vaccine' => 2,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 3,
            'id_vaccine' => 3,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 3,
            'id_vaccine' => 4,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 4,
            'id_vaccine' => 8,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 4,
            'id_vaccine' => 9,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 4,
            'id_vaccine' => 10,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 4,
            'id_vaccine' => 11,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 5,
            'id_vaccine' => 8,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 5,
            'id_vaccine' => 1,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 5,
            'id_vaccine' => 2,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 5,
            'id_vaccine' => 3,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 5,
            'id_vaccine' => 4,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 6,
            'id_vaccine' => 8,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 6,
            'id_vaccine' => 1,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 6,
            'id_vaccine' => 2,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 6,
            'id_vaccine' => 3,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 6,
            'id_vaccine' => 4,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 7,
            'id_vaccine' => 8,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 7,
            'id_vaccine' => 1,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 7,
            'id_vaccine' => 2,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 7,
            'id_vaccine' => 3,
        ]);
        DB::table('vaccine_pet')->insert([
            'id_pet' => 7,
            'id_vaccine' => 4,
        ]);
    }
}
