<?php

use Illuminate\Database\Seeder;

class ConsultationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('consultations')->insert([
            'id_consultation' => 1,
            'id_user' => 4,
            'id_veterinary' => 1,
            'id_history' => 1,
            'comments' => 'Se acerca a la consulta ya que no come hace dos días. No presenta signos de malestar estomacal o intestinal.',
            'afflictions_procedures' => 'Se le indica cambio de alimento balanceado.',
            'image' => '',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('consultations')->insert([
            'id_consultation' => 2,
            'id_user' => 4,
            'id_veterinary' => 1,
            'id_history' => 2,
            'comments' => 'Se acerca a la consulta porque tiene diarrea.',
            'afflictions_procedures' => 'Se le indica dieta de arroz blaco y pollo a la plancha por tres días.',
            'image' => '',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
