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
//            'id_profile' =>1,
            'name' => 'Pablo',
            'last_name' =>'Maskkotas',
            'dni' =>12345678,
            'email' =>'pablo_maskkotas@gmail.com',
            'password'=> Hash::make('1234'),
            'birthday'=>'1994-08-24 13:45:12',
            'image'=>'',
            'id_role' => 2,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('users')->insert([
            'id_user' => 2,
//            'id_profile' =>2,
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
//            'id_profile' =>2,
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
//            'id_profile' =>3,
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
//            'id_profile' =>3,
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
    }
}
