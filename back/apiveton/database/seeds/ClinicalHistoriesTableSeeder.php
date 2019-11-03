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
            'id_user' => 4,
            'id_veterinary' => 1,
            'comments' => 'Gata mestiza de 9 años de edad. Presenta una cicatriz en una de sus orejas, fruto de una pelea con otro gato.',
            'hide_comments' => 'Es dócil y de buen caracter. Se deja revisar sin problemas.',
            'afflictions_procedures' => 'Fué castrada al año de edad, no presenta ninguna aflicción crónica.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('clinicalhistories')->insert([
            'id_history' => 2,
            'id_pet' => 2,
            'id_user' => 8,
            'id_veterinary' => 2,
            'comments' => 'Perro mestizo de 7 años de edad.',
            'hide_comments' => 'Es un tanto agresivo, llegó al consultorio con bozal. Tratar con cuidado.',
            'afflictions_procedures' => 'Fué castrado a los dos años de edad. Se le practicó una operación de recorte de rabo.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('clinicalhistories')->insert([
            'id_history' => 3,
            'id_pet' => 3,
            'id_user' => 8,
            'id_veterinary' => 2,
            'comments' => 'Perro mestizo muy tranquilo',
            'hide_comments' => 'Perro dócil, fácil de atender',
            'afflictions_procedures' => 'Fue castrado a los 3 años. Se realizó cirugía por GDV (dilatación gástrica vólvulo) en el mes 11-2019',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('clinicalhistories')->insert([
            'id_history' => 4,
            'id_pet' => 4,
            'id_user' => 9,
            'id_veterinary' => 3,
            'comments' => 'Gato esfinge, sin pelo, cachorro.',
            'hide_comments' => 'Es un gato cachorro, tranquilo pero medio destructivo, no dejar desatendido. ',
            'afflictions_procedures' => 'Aún no esta castrado, esta desparasitado y con las vacunas al día',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('clinicalhistories')->insert([
            'id_history' => 5,
            'id_pet' => 5,
            'id_user' => 9,
            'id_veterinary' => 3,
            'comments' => 'Perro pastor alemán de 9 años. Su cola esta cortada por una herida de cuando estuvo abandonado',
            'hide_comments' => 'Perra adulta con problemas de caderas característicos de la raza por la edad. Muy dócil.',
            'afflictions_procedures' => 'Fue castrada en el 2012. Sufre de Hernia de disco en la región lumbar.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('clinicalhistories')->insert([
            'id_history' => 6,
            'id_pet' => 6,
            'id_user' => 4,
            'id_veterinary' => 2,
            'comments' => 'Perro mestizo pequeño.',
            'hide_comments' => 'Es un perro temperamental, con el dueño es dócil, pero no fue fácil de tratar.',
            'afflictions_procedures' => 'Castrado en 11-2017.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('clinicalhistories')->insert([
            'id_history' => 7,
            'id_pet' => 7,
            'id_user' => 4,
            'id_veterinary' => 2,
            'comments' => 'Perro macho golden, mediano de 8 años.',
            'hide_comments' => 'Perro muy dócil y amigable.',
            'afflictions_procedures' => 'Castrado en 10-2013. Se le extriparon masas anormales del bazo',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('clinicalhistories')->insert([
            'id_history' => 8,
            'id_pet' => 5,
            'id_user' => 4,
            'id_veterinary' => 1,
            'comments' => 'Perro pastor alemán rescatado de la calle. Posee una herida en el rabo.',
            'hide_comments' => 'Perra dósil.',
            'afflictions_procedures' => 'Castrada en el 2012. Hernia de disco en la región lumbar.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('clinicalhistories')->insert([
            'id_history' => 9,
            'id_pet' => 7,
            'id_user' => 4,
            'id_veterinary' => 1,
            'comments' => 'Perro muy obediente y carismático.',
            'hide_comments' => 'Perro muy obediente y carismático.',
            'afflictions_procedures' => 'Castrado en 2013',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('clinicalhistories')->insert([
            'id_history' => 10,
            'id_pet' => 1,
            'id_user' => 8,
            'id_veterinary' => 2,
            'comments' => 'Gata de 9 años  y medio de edad. Presenta una cicatriz en una de sus orejas, y otra en cuello.',
            'hide_comments' => 'Trato amigable y sin problemas.',
            'afflictions_procedures' => 'Fué castrada al año de edad.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
