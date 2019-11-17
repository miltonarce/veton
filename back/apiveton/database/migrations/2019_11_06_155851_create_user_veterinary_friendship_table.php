<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserVeterinaryFriendshipTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_veterinary_friendship', function (Blueprint $table) {
            $table->unsignedInteger('id_user');
            $table->unsignedInteger('id_veterinary');
            $table->integer('is_following')->default(1);
            $table->integer('followed')->default(0);
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
        Schema::dropIfExists('user_veterinary_friendship');
    }
}
