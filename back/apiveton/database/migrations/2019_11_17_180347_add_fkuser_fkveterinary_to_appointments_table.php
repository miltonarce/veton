<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFkuserFkveterinaryToAppointmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('appointments', function (Blueprint $table) {
            $table->unsignedInteger('id_user')->after('id_appointment');
            $table->unsignedInteger('id_veterinary')->after('id_appointment');
            $table->foreign('id_user')->references('id_user')->on('users');
            $table->foreign('id_veterinary')->references('id_veterinary')->on('veterinaries');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('appointments', function (Blueprint $table) {
            $table->dropForeign(['id_user']);
            $table->dropForeign(['id_veterinary']);
        });
    }
}
