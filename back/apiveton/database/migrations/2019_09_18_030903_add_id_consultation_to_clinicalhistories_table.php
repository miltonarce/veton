<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddIdConsultationToClinicalhistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('clinicalhistories', function (Blueprint $table) {
            $table->unsignedInteger('id_consultation')->default(1)->after('id_pet');
            $table->foreign('id_consultation')->references('id_consultation')->on('consultations');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('clinicalhistories', function (Blueprint $table) {
            $table->dropForeign(['id_consultation']);
            $table->dropColumn('id_consultation');
        });
    }
}
