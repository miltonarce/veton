<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Crypt;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'id_user' => 1,
            'name' => 'Pablo',
            'last_name' =>'Maskkotas',
            'dni' =>12345678,
            'email' =>'pablo_maskkotas@gmail.com',
            'password'=> Hash::make('1234'),
            'birthday'=>'1994-08-24 13:45:12',
            'image'=>'pablomaskotas.jpg',
            'id_role' => 2,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('users')->insert([
            'id_user' => 2,
            'name' => 'Paula',
            'last_name' =>'Pérez',
            'dni' =>37225879,
            'email' =>'paulaperez@gmail.com',
            'password'=>  Hash::make('1234'),
            'birthday'=>'1990-11-11 13:45:12',
            'image'=>'paulaperez.jpg',
            'id_role' => 4,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('users')->insert([
            'id_user' => 3,
            'name' => 'Federico',
            'last_name' =>'Fernández',
            'dni' =>30369896,
            'email' =>'fedefernandez@gmail.com',
            'password'=>  Hash::make('1234'),
            'birthday'=>'1983-10-10 13:45:12',
            'image'=>'federicofernandez.jpg',
            'id_role' => 4,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('users')->insert([
            'id_user' => 4,
            'name' => 'Pedro',
            'last_name' =>'Sosa',
            'dni' =>35879456,
            'email' =>'pedrovete@gmail.com',
            'password'=>  Hash::make('1234'),
            'birthday'=>'1989-09-09 13:45:12',
            'image'=>'pedrososa.jpg',
            'id_role' => 3,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('users')->insert([
            'id_user' => 5,
            'name' => 'Administradores',
            'last_name' =>'Vet On',
            'dni' =>00000000,
            'email' =>'administradores@gmail.com',
            'password'=>  Hash::make('1234'),
            'birthday'=>'1989-09-09 13:45:12',
            'image'=>'',
            'id_role' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('users')->insert([
            'id_user' => 6,
            'name' => 'Jorge',
            'last_name' =>'Flores',
            'dni' =>12702215,
            'email' =>'jorge_flores@gmail.com',
            'password'=>  Hash::make('1234'),
            'birthday'=>'1989-09-09 13:45:12',
            'image'=>'jorgeflores.jpg',
            'id_role' => 2,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('users')->insert([
            'id_user' => 7,
            'name' => 'Matias',
            'last_name' =>'Peréz',
            'dni' =>35960343,
            'email' =>'matias_perez@gmail.com',
            'password'=>  Hash::make('1234'),
            'birthday'=>'1989-09-09 13:45:12',
            'image'=>'matiasperez.jpg',
            'id_role' => 2,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('users')->insert([
            'id_user' => 8,
            'name' => 'Belen',
            'last_name' =>'Gomez',
            'dni' =>34023872,
            'email' =>'belu91@gmail.com',
            'password'=>  Hash::make('1234'),
            'birthday'=>'1989-09-09 13:45:12',
            'image'=>'belengomez.jpg',
            'id_role' => 3,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('users')->insert([
            'id_user' => 9,
            'name' => 'Daiana',
            'last_name' =>'Dimitri',
            'dni' =>33123457,
            'email' =>'dai@gmail.com',
            'password'=>  Hash::make('1234'),
            'birthday'=>'1989-09-09 13:45:12',
            'image'=>'daianadimitri.jpg',
            'id_role' => 3,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('users')->insert([
            'id_user' => 10,
            'name' => 'Simón',
            'last_name' =>'Diaz',
            'dni' =>30369898,
            'email' =>'simon_369@gmail.com',
            'password'=>  Hash::make('1234'),
            'birthday'=>'1983-10-10 13:45:12',
            'image'=>'simondiaz.jpg',
            'id_role' => 4,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('users')->insert([
            'id_user' => 11,
            'name' => 'Gabriel',
            'last_name' =>'Nieto',
            'dni' =>30369899,
            'email' =>'gabonieto@gmail.com',
            'password'=>  Hash::make('1234'),
            'birthday'=>'1983-10-10 13:45:12',
            'image'=>'gabrielnieto.jpg',
            'id_role' => 4,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('users')->insert([
            'id_user' => 12,
            'name' => 'Martín',
            'last_name' =>'Salazar',
            'dni' =>29569123,
            'email' =>'martosalaza@gmail.com',
            'password'=>  Hash::make('1234'),
            'birthday'=>'1982-08-06 13:45:12',
            'image'=>'martinsalazar.jpg',
            'id_role' => 4,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
