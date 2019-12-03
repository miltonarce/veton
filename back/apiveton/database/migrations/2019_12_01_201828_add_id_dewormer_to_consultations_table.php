<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddIdDewormerToConsultationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('consultations', function (Blueprint $table) {
            $table->unsignedInteger('id_dewormer')->after('next_dosis_vaccine')->nullable();
            $table->foreign('id_dewormer')->references('id_dewormer')->on('dewormers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('consultations', function (Blueprint $table) {
            $table->dropForeign(['id_dewormer']);
            $table->dropColumn('id_dewormer');
        });
    }
}
