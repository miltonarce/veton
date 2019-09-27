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
            'id_profile' =>1,
            'name' => 'Admin',
            'last_name' =>'',
            'dni' =>12345678,
            'email' =>'admin@admin',
            'password'=> Crypt::encrypt('1234'),
            'birthday'=>'1994-08-24 13:45:12',
            'image'=>'',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('users')->insert([
            'id_user' => 2,
            'id_profile' =>2,
            'name' => 'TestUser',
            'last_name' =>'',
            'dni' =>12345679,
            'email' =>'user@user',
            'password'=>  Crypt::encrypt('1234'),
            'birthday'=>'1990-11-11 13:45:12',
            'image'=>'',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
