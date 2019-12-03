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
            'id_history' => 1,
            'comments' => 'Se acerca a la consulta ya que no come hace dos días. No presenta signos de malestar estomacal o intestinal.',
            'afflictions_procedures' => 'Se le indica cambio de alimento balanceado.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('consultations')->insert([
            'id_consultation' => 2,
            'id_user' => 4,
            'id_history' => 2,
            'comments' => 'Se acerca a la consulta porque tiene diarrea.',
            'afflictions_procedures' => 'Se le indica dieta de arroz blaco y pollo a la plancha por tres días.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('consultations')->insert([
            'id_consultation' => 3,
            'id_user' => 8,
            'id_history' => 2,
            'comments' => 'Consulta por castración.',
            'afflictions_procedures' => 'Se castró al perro.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('consultations')->insert([
            'id_consultation' => 4,
            'id_user' => 4,
            'id_history' => 3,
            'comments' => 'Consulta por vacunación y desparasitación.',
            'afflictions_procedures' => 'Se vacunó y desparasitó al gato.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('consultations')->insert([
            'id_consultation' => 5,
            'id_user' => 4,
            'id_history' => 3,
            'comments' => 'El paciente presentaba irritación en la piel de las orejas.',
            'afflictions_procedures' => 'Se le recetó ALOE VET gel cicatrizante 50ml 2 veces al día.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('consultations')->insert([
            'id_consultation' => 6,
            'id_user' => 9,
            'id_history' => 4,
            'comments' => 'Urgencia por vómitos, presentaba sintomas de GDV.',
            'afflictions_procedures' => 'Presentaba el estómago distendido con  aire y girado sobre sí mismo. Se lo estabilizó y realizó cirugía.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('consultations')->insert([
            'id_consultation' => 7,
            'id_user' => 9,
            'id_history' => 5,
            'comments' => 'Consulta por perro rescatado, lastimado y con parásitos.',
            'afflictions_procedures' => 'Se le curó herida en el rabo, perdió parte de la cola. Se desparasitó y vacuno',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('consultations')->insert([
            'id_consultation' => 8,
            'id_user' => 9,
            'id_history' => 5,
            'comments' => 'Consulta por problemas de cintura.',
            'afflictions_procedures' => 'Se realizaron radiografías para monitorear hernia de disco en la región lumbar.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('consultations')->insert([
            'id_consultation' => 9,
            'id_user' => 8,
            'id_history' => 6,
            'comments' => 'Consulta por vacunación.',
            'afflictions_procedures' => 'Se aplicaron vacunas.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('consultations')->insert([
            'id_consultation' => 10,
            'id_user' => 8,
            'id_history' => 6,
            'comments' => 'Consulta por castración.',
            'afflictions_procedures' => 'Se realizó castración.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('consultations')->insert([
            'id_consultation' => 11,
            'id_user' => 8,
            'id_history' => 7,
            'comments' => 'Consulta anual.',
            'afflictions_procedures' => 'Se realizaron radiografías por dolor en zona abdominal. Se encontraron masas anormales.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('consultations')->insert([
            'id_consultation' => 12,
            'id_user' => 8,
            'id_history' => 7,
            'comments' => 'Operación por de bazo.',
            'afflictions_procedures' => 'Se realizó cirugía para remover masas anormales del bazo.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('consultations')->insert([
            'id_consultation' => 13,
            'id_user' => 4,
            'id_history' => 7,
            'comments' => 'Operaciónpor de bazo.',
            'afflictions_procedures' => 'Se realizó cirugía para remover masas anormales del bazo.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('consultations')->insert([
            'id_consultation' => 14,
            'id_user' => 4,
            'id_history' => 8,
            'comments' => 'Consulta por castración.',
            'afflictions_procedures' => 'Se realizó cirugía de castración.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('consultations')->insert([
            'id_consultation' => 15,
            'id_user' => 4,
            'id_history' => 8,
            'comments' => 'Consulta por alergia.',
            'afflictions_procedures' => 'Se recetó aplicar pervinox para curar la piel irritada y se aplicó pipeta.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('consultations')->insert([
            'id_consultation' => 16,
            'id_user' => 4,
            'id_history' => 9,
            'comments' => 'Consulta urgente por herida.',
            'afflictions_procedures' => 'Se aplicó vacuna antirabica, se desinfectó y se vendaron las heridas presentes en la pata posterior derecha. Se recetó cambiar las vendas y limpiar la herida con pervinox.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('consultations')->insert([
            'id_consultation' => 17,
            'id_user' => 4,
            'id_history' => 10,
            'comments' => 'Consulta por pulgas.',
            'afflictions_procedures' => 'Se aplica pipeta antipulgas.',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
