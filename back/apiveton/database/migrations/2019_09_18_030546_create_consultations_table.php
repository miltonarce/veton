<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConsultationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consultations', function (Blueprint $table) {
            $table->increments('id_consultation');
            $table->text('comments');
            $table->text('afflictions_procedures');
            $table->string('image_1', 255)->nullable();
            $table->string('image_2', 255)->nullable();
            $table->string('image_3', 255)->nullable();
            $table->date('next_dosis_vaccine')->nullable();
            $table->date('next_dosis_dewormer')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('consultations');
    }
}
