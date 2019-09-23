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
            'date' => '2019-09-20 12:00:00',
            'comments' => 'comments example',
            'hide_comments' => 'hidden comments',
            'afflictions_procedures' => 'test afflictions',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table('clinicalhistories')->insert([
            'id_history' => 2,
            'date' => '2019-09-20 13:00:00',
            'comments' => 'comments example',
            'hide_comments' => 'hidden comments',
            'afflictions_procedures' => 'test afflictions',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
