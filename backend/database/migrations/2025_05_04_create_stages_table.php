<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('stages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('process_id')->constrained('project_processes')->onDelete('cascade');
            $table->string('stage_type'); // form, invoice, file
            $table->string('type');
            $table->unsignedBigInteger('type_id')->nullable();
            $table->boolean('requires_payment')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stages');
    }
};
