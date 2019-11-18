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
        $this->call(RolesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(TypesTableSeeder::class);
        $this->call(BreedsTableSeeder::class);
        $this->call(GenderTableSeeder::class);
        $this->call(PetsTableSeeder::class);
        $this->call(VeterinariesTableSeeder::class);
        $this->call(ClinicalHistoriesTableSeeder::class);
        $this->call(ConsultationsTableSeeder::class);
        $this->call(User_VeterinaryTableSeeder::class);
        $this->call(VaccinesTableSeeder::class);
        $this->call(DewormersTableSeeder::class);
        $this->call(Vaccine_PetTableSeeder::class);
        $this->call(Dewormer_PetTableSeeder::class);
        $this->call(User_Veterinary_FriendshipSeeder::class);
        $this->call(AppointmentsTableSeeder::class);
    }
}
