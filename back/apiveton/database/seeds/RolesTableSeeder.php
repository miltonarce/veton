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
            'name' => 'Usuario',
        ]);

        DB::table('roles')->insert([
            'id' => 3,
            'name' => 'Usuario no registrado',
        ]);
    }
}
