<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UserVeterinaryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_veterinary', function (Blueprint $table) {
            $table->unsignedInteger('id_user');
            $table->unsignedInteger('id_veterinary');
            $table->primary(['id_user', 'id_veterinary']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_veterinary');
    }
}
