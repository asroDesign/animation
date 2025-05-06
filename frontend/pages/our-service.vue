<script setup lang="ts">
import LiveChat from "~/components/LiveChat.vue";
import SecondaryButton from "~/components/tools/SecondaryButton.vue";
</script>

<template>
  <section class="relative text-white">
    <!-- Hero Section -->
    <div class="relative">
      <nuxt-img
          src="/system/our_service_mask.png"
          class="w-full object-cover"
          sizes="sm:100vw md:100vw lg:100vw"
          loading="lazy"
      />
      <div class="absolute inset-0 flex items-center justify-center  top-[20rem]">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-6xl mx-auto text-start">
            <div class="flex items-center justify-start mb-4">
              <div class="bg-pink-500 h-1 w-12 mr-2"></div>
              <span class="text-sm uppercase">What We Offer</span>
            </div>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
            <p class="text-base sm:text-lg mb-8 max-w-4xl mr-auto">
              Our prescribed, authenticated, and advanced technological solutions will scour new grounds for expansion. Animation Studio experts are aligned with innovative strategies to empower businesses to accomplish goals and achieve sustainable digital growth.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-start gap-4">
              <live-chat />
              <LazyRequestQuote />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Services Section -->
    <div class="container mx-auto lg:-mt-[4rem] mt-[18rem] sm:mt-[2rem] px-3">
      <!-- Logo Design -->
      <div class="flex flex-col lg:flex-row items-center gap-8 mb-12">
        <div class="flex-1">
          <h3 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-['Impact']">Logo Design</h3>
          <p class="text-base sm:text-lg mb-6 text-justify">
            If your logo is more concealed than evident and more problematic than precise, you might lose your audience. Evoke a sense of connection between a brand and consumer with our creative logo design and symbolize the uniqueness of your brand.
          </p>
          <secondary-button class="flex items-center">
            Explore Our Logo Service
            <nuxt-icon name="iconsax/linear/arrow-right" class="text-xl" />
          </secondary-button>
        </div>
        <nuxt-img
            class="w-full lg:w-1/3 h-64 object-cover rounded-lg"
            src="/system/our_service/logo_design.png"
            loading="lazy"
        />
      </div>

      <hr class="border-gray-700 my-8" />

      <!-- Mobile App Development -->
      <div class="flex flex-col lg:flex-row-reverse items-center gap-8 mb-12">
        <div class="flex-1">
          <h3 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-['Impact'] text-right lg:text-right">Mobile App Development</h3>
          <p class="text-base sm:text-lg mb-6 text-justify lg:text-right">
            To keep up with growing industry demand, businesses are turning to technology through mobile application development. Our specialists will help you change the world with highly functional applications that increase brand visibility, generate ROI, and make you lead the industry.
          </p>
          <secondary-button class="flex items-center">
            Explore Our Mobile App Service
            <nuxt-icon name="iconsax/linear/arrow-right" class="text-xl" />
          </secondary-button>
        </div>
        <nuxt-img
            class="w-full lg:w-1/3 h-64 object-cover rounded-lg"
            src="/system/our_service/mobile_app.png"
            loading="lazy"
        />
      </div>

      <hr class="border-gray-700 my-8" />

      <!-- Digital Marketing -->
      <div class="flex flex-col lg:flex-row items-center gap-8 mb-12">
        <div class="flex-1">
          <h3 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-['Impact']">Digital Marketing</h3>
          <p class="text-base sm:text-lg mb-6 text-justify">
            Are ads not working anymore? Don’t panic; you could just be lacking the correct digital marketing strategy. We’ll help you build a reputable online presence by enabling you to form high-conversion marketing campaigns and ever-lasting relationships with your customers.
          </p>
          <secondary-button class="flex items-center">
            Explore Our Services
            <nuxt-icon name="iconsax/linear/arrow-right" class="text-xl" />
          </secondary-button>

        </div>
        <nuxt-img
            class="w-full lg:w-1/3 h-64 object-cover rounded-lg"
            src="/system/our_service/digital_marketing.png"
            loading="lazy"
        />
      </div>

      <hr class="border-gray-700 my-8" />

      <!-- How We Serve -->
      <div class="text-center py-12">
        <h3 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-['Impact']">How We Serve</h3>
        <p class="text-base sm:text-lg mb-8 max-w-3xl mx-auto">
          Our digital agency provides innovative solutions that lead to productivity and success. We’re passionate about facilitating your business with our advanced technology solutions. You can focus on your business while we care for your website, applications, and everything else.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <live-chat />
          <LazyRequestQuote />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional custom styles for responsiveness */
section {
  @apply min-h-screen;
}

/* Ensure buttons and images scale properly */
.w-72, .w-80, .w-60 {
  @apply w-full  max-w-full;
}

h3 {
  @apply leading-tight;
}

p {
  @apply leading-relaxed;
}

/* Adjust image sizes for smaller screens */
img {
  @apply max-w-full h-auto;
}
</style>