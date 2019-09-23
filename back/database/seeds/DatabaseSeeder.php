<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ProfilesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(TypesTableSeeder::class);
        $this->call(BreedsTableSeeder::class);
        $this->call(GenderTableSeeder::class);
        $this->call(PetsTableSeeder::class);
        $this->call(VeterinariesTableSeeder::class);
        $this->call(ConsultationsTableSeeder::class);
        $this->call(ClinicalHistoriesTableSeeder::class);
    }
}
