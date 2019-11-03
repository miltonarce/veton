<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIdVeterinaryToClinicalhistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('clinicalhistories', function (Blueprint $table) {
            Schema::table('clinicalhistories', function (Blueprint $table) {
                $table->unsignedInteger('id_veterinary')->default(1)->after('id_user');
                $table->foreign('id_veterinary')->references('id_veterinary')->on('veterinaries');
            });
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
            //
        });
    }
}
