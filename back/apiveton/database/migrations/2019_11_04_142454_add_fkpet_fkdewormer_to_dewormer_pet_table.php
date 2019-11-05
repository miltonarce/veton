<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFkpetFkdewormerToDewormerPetTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('dewormer_pet', function (Blueprint $table) {
            $table->foreign('id_pet')->references('id_pet')->on('pets');
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
        Schema::table('dewormer_pet', function (Blueprint $table) {
            $table->dropForeign(['id_pet']);
            $table->dropForeign(['id_dewormer']);
        });
    }
}
