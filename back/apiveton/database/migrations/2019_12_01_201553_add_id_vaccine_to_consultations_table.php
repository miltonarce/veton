<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddIdVaccineToConsultationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('consultations', function (Blueprint $table) {
            $table->unsignedInteger('id_vaccine')->after('image_3')->nullable();
            $table->foreign('id_vaccine')->references('id_vaccine')->on('vaccines');
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
            $table->dropForeign(['id_vaccine']);
            $table->dropColumn('id_vaccine');
        });
    }
}
