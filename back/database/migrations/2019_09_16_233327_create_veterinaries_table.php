<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVeterinariesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('veterinaries', function (Blueprint $table) {
            $table->increments('id_veterinary');
            $table->string('business_name', 150);
            $table->string('fantasy_name', 150);
            $table->integer('cuit_cuil')->unsigned();
            $table->string('image', 255);
            $table->integer('phone1')->unsigned();
            $table->integer('phone2')->unsigned();
            $table->string('street', 100);
            $table->string('between_streets', 200);

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
        Schema::dropIfExists('veterinaries');
    }
}
