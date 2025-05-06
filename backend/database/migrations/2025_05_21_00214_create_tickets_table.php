<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->text('description');
            $table->enum('priority', ['low', 'medium', 'high'])->default('low');
            $table->enum('department', ['management', 'sale', 'other'])->default('other');
            $table->enum('status', ['open', 'closed'])->default('open');
            $table->timestamps();
        });

        Schema::create('ticket_transfers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ticket_id')->constrained()->onDelete('cascade');
            $table->enum('from_department', ['management', 'sale', 'other']);
            $table->enum('to_department', ['management', 'sale', 'other']);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('ticket_transfers');
        Schema::dropIfExists('tickets');
    }
};
