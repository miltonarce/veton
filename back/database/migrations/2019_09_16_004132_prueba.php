<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Prueba extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id_user');
            $table->string('email', 100)->unique();
            $table->string('password', 255);
            $table->string('nombre', 60);
            $table->string('apellido', 60);
            $table->string('imagen', 255)->nullable();
            $table->unsignedInteger('dni')->unique();
            $table->unsignedInteger('permisos')->default(2);
            $table->date('nacimiento');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
