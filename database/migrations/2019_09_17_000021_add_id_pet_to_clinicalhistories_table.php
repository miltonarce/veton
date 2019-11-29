<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddIdPetToClinicalhistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('clinicalhistories', function (Blueprint $table) {
            $table->unsignedInteger('id_pet')->default(1)->after('id_history');
            $table->foreign('id_pet')->references('id_pet')->on('pets');
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
            $table->dropForeign(['id_pet']);
            $table->dropColumn('id_pet');
        });
    }
}
