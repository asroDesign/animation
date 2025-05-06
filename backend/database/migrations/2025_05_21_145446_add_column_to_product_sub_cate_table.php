<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('product_sub_categories', function (Blueprint $table) {
            $table->text('desc')->nullable();
            $table->text('short_desc')->nullable();
            $table->string('banner_image')->nullable();
            $table->text('features')->nullable()->toJson();
            $table->string('file');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('product_sub_categories', function (Blueprint $table) {

        });
    }
};
