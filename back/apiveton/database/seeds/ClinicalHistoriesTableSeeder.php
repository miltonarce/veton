<?php

use Illuminate\Database\Seeder;

class ClinicalHistoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('clinicalhistories')->insert([
            'id_history' => 1,
            'id_pet' => 1,
            'comments' => 'Gata mestiza de 9 años de edad. Presenta una cicatriz en una de sus orejas, fruto de una pelea con otro gato.',
            'hide_comments' => 'Es dócil y de buen caracter. Se deja revisar sin problemas.',
            'afflictions_procedures' => 'Fué castrada al año de edad, no presenta ninguna aflicción crónica.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('clinicalhistories')->insert([
            'id_history' => 2,
            'id_pet' => 2,
            'comments' => 'Perro mestizo de 7 años de edad.',
            'hide_comments' => 'Es un tanto agresivo, llegó al consultorio con bozal. Tratar con cuidado.',
            'afflictions_procedures' => 'Fué castrado a los dos años de edad. Se le practicó una operación de recorte de rabo.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
