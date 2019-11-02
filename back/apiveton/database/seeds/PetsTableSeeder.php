<?php

use Illuminate\Database\Seeder;

class PetsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pets')->insert([
            'id_pet' => 1,
            'id_user' =>2,
            'id_type' =>1,
            'id_breed' =>1,
            'id_gender' =>1,
            'name' => 'Luli',
            'last_name' =>'Pérez',
            'birthday'=>'2010-08-20 13:45:12',
            'image'=>'luli.jpg',
            'weight'=>7,
            'colors' =>'Blanca y negra',
            'comments'=> 'Es una gata amorosa.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('pets')->insert([
            'id_pet' => 2,
            'id_user' =>3,
            'id_type' =>2,
            'id_breed' =>1,
            'id_gender' =>2,
            'name' => 'Chocolate',
            'last_name' =>'Fernández',
            'birthday'=>'2012-06-20 13:45:12',
            'image'=>'chocolate.jpg',
            'weight'=>14,
            'colors' =>'Marrón oscuro',
            'comments'=> 'Un integrante más de la familia',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('pets')->insert([
            'id_pet' => 3,
            'id_user' =>3,
            'id_type' =>2,
            'id_breed' =>1,
            'id_gender' =>2,
            'name' => 'Aldo',
            'last_name' =>'Fernández',
            'birthday'=>'2012-06-20 13:45:12',
            'image'=>'aldo.jpg',
            'weight'=>12,
            'colors' =>'Negro',
            'comments'=> 'Perro guardian, tamaño medio, se lleva bien con otros animales.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('pets')->insert([
            'id_pet' => 4,
            'id_user' =>10,
            'id_type' =>1,
            'id_breed' =>45,
            'id_gender' =>2,
            'name' => 'Bills',
            'last_name' =>'Diaz',
            'birthday'=>'2012-06-20 13:45:12',
            'image'=>'bills.jpg',
            'weight'=>3,
            'colors' =>'Rosa',
            'comments'=> 'Nombre inspirado en dragon ball super.Es el dios de la destrucción, quien mantiene el equilibrio en el universo. Es el ser mas poderoso. Este nombre describe bien a mi gato :P',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('pets')->insert([
            'id_pet' => 5,
            'id_user' =>10,
            'id_type' =>2,
            'id_breed' =>4,
            'id_gender' =>1,
            'name' => 'Azul',
            'last_name' =>'Diaz',
            'birthday'=>'2012-06-20 13:45:12',
            'image'=>'azul.jpg',
            'weight'=>15,
            'colors' =>'Negra',
            'comments'=> 'Es una perra muy tranquila, rescatada de la calle. Se lleva muy bien con otros animales, perros y gatos.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('pets')->insert([
            'id_pet' => 6,
            'id_user' =>11,
            'id_type' =>2,
            'id_breed' =>4,
            'id_gender' =>2,
            'name' => 'Braulio',
            'last_name' =>'Nieto',
            'birthday'=>'2012-06-20 13:45:12',
            'image'=>'braulio.jpg',
            'weight'=>9,
            'colors' =>'blanco',
            'comments'=> 'Braulio es un perro mestizo rescatado de la calle. Es de tamaño mediano pero se siente un gigante. Es muy amigable con sus dueños y conocidos, no lo es tanto con los desconocidos, pero es inofensivo',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('pets')->insert([
            'id_pet' => 7,
            'id_user' =>11,
            'id_type' =>2,
            'id_breed' =>7,
            'id_gender' =>2,
            'name' => 'Chad',
            'last_name' =>'Nieto',
            'birthday'=>'2012-06-20 13:45:12',
            'image'=>'chad.jpg',
            'weight'=>12,
            'colors' =>'Amarillo',
            'comments'=> 'Chad es un perro muy inteligente, obediente y amigable.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
