<?php

use Illuminate\Database\Seeder;

class User_Veterinary_FriendshipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_veterinary_friendship')->insert([
            'id_user' => 2,
            'id_veterinary' => 1,
            'is_following' => 1,
            'followed' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('user_veterinary_friendship')->insert([
            'id_user' => 3,
            'id_veterinary' => 2,
            'is_following' => 1,
            'followed' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('user_veterinary_friendship')->insert([
            'id_user' => 10,
            'id_veterinary' => 3,
            'is_following' => 1,
            'followed' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('user_veterinary_friendship')->insert([
            'id_user' => 11,
            'id_veterinary' => 3,
            'is_following' => 1,
            'followed' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('user_veterinary_friendship')->insert([
            'id_user' => 11,
            'id_veterinary' => 2,
            'is_following' => 1,
            'followed' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('user_veterinary_friendship')->insert([
            'id_user' => 10,
            'id_veterinary' => 1,
            'is_following' => 1,
            'followed' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('user_veterinary_friendship')->insert([
            'id_user' => 11,
            'id_veterinary' => 1,
            'is_following' => 1,
            'followed' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('user_veterinary_friendship')->insert([
            'id_user' => 2,
            'id_veterinary' => 2,
            'is_following' => 1,
            'followed' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
