<script setup lang="ts">

import LiveChat from "~/components/LiveChat.vue";
import SecondaryButton from "~/components/tools/SecondaryButton.vue";
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="relative">
      <nuxt-img
          src="/system/our_work_mask.png"
          class="w-full object-cover"
          sizes="sm:100vw md:100vw lg:100vw"
          loading="lazy"
      />
      <div class="absolute inset-0 flex items-center justify-center top-[16rem]">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-6xl mx-auto text-center sm:text-left">
            <div class="flex items-center justify-center sm:justify-start mb-4">
              <div class="bg-pink-500 h-1 w-12 mr-2"></div>
              <span class="text-sm uppercase">A Glimpse Of</span>
            </div>
            <h2 class="text-2xl sm:text-4xl font-bold mb-6">Our Work</h2>
            <p class="text-base sm:text-lg mb-8 max-w-4xl mr-auto">
              Over the years, we’ve perfected our skills in various domains of animation, logo design, web design, mobile app development, and digital marketing. Now, we’re ready to support your plans for digital expansion.            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
              <live-chat />
              <LazyRequestQuote />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto lg:-mt-[8rem] mt-[14rem] sm:mt-[2rem] px-3">
    <div class="text-center justify-center grid space-y-4">
      <div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full">
        <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative">
          <div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
        </div>
        <h2 class="sm:text-4xl text-2xl">
          Portfolio
        </h2>
        <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative">
          <div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
        </div>
      </div>
      <Portfolio />
    </div>
  </div>
</template>

<style scoped>

</style>