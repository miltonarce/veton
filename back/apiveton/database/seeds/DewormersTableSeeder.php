<?php

use Illuminate\Database\Seeder;

class DewormersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('dewormers')->insert([
            'id_dewormer' => 1,
            'name' => 'Panacur C Canine',
            'next_dosis' => null,
            'description' => 'Disponible en tres tamaños diferentes, cada uno con tres paquetes: tamaño de cuatro gramos, uno de dos gramos y otro de un gramo. Panacur (fenbendazol) ayuda a tratar anquilostomas, gusanos redondos, y otros parásitos en perros. La dosis habitual para perros es un paquete, basado en el peso, administrado una vez al día durante 3 días consecutivos.',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('dewormers')->insert([
            'id_dewormer' => 2,
            'name' => 'Tabletas masticables Virbantel',
            'next_dosis' => null,
            'description' => 'Estas tabletas son con sabor a hígado de cerdo y no hay necesidad de mezclarlas con comida. Para cachorros y perros mayores de 12 semanas de edad. Entre sus ingredientes activos comprobados tiene, pamoato de pirantel y praziquantel. Las botella contiene 50 tabletas.',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('dewormers')->insert([
            'id_dewormer' => 3,
            'name' => 'Gotas Pet wellbeing',
            'next_dosis' => null,
            'description' => 'GI CleanUp Gold puede ayudar a la resistencia innata del cuerpo a los organismos en el tracto gastrointestinal. Se puede usar cíclicamente para aumentar la probabilidad de que un perro mantenga un tracto gastrointestinal normal libre de parásitos intestinales. En lugar de matar gusanos en el tracto gastrointestinal, este producto tiene como objetivo fomentar la capacidad de que tu perro pueda expulsarlos naturalmente. Esto se logra a través de una variedad de hierbas y productos derivados de plantas que contiene entre sus ingredientes, los cuales están dirigidos a mantener el tracto sano y ayudar a la digestión normal.',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('dewormers')->insert([
            'id_dewormer' => 4,
            'name' => 'SENTRY',
            'next_dosis' => null,
            'description' => 'Esta fórmula elimina lombrices intestinales y anquilostomas. Sentry HC WormX Plus para perros pequeños es un antiséptico de amplio espectro para el tratamiento y control de grandes gusanos. Usarlo solo con cachorros de 6 lbs a 25 lbs. WormX Plus está disponible sin receta. Trata y controla 7 especies de gusanos intestinales, y se recomienda para perros de 12 semanas de edad y mayores. ',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('dewormers')->insert([
            'id_dewormer' => 5,
            'name' => 'Frontline Antiparasitario Combo',
            'next_dosis' => null,
            'description' => '',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('dewormers')->insert([
            'id_dewormer' => 6,
            'name' => 'Antiparasitario externo Effipro Duo',
            'next_dosis' => null,
            'description' => '',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('dewormers')->insert([
            'id_dewormer' => 7,
            'name' => 'Pipetas antiparasitarias Advantage',
            'next_dosis' => null,
            'description' => '',
            'expired' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
