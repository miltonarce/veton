<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'id' => 1,
            'name' => 'Administrador',
        ]);

        DB::table('roles')->insert([
            'id' => 2,
            'name' => 'Administrador Veterinaria',
        ]);

        DB::table('roles')->insert([
            'id' => 3,
            'name' => 'Médico Veterinario',
        ]);

        DB::table('roles')->insert([
            'id' => 4,
            'name' => 'Usuario particular',
        ]);

        DB::table('roles')->insert([
            'id' => 5,
            'name' => 'Usuario no registrado',
        ]);
    }
}
