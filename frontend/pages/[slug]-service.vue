<script setup lang="ts">


const {data,status} = await useMyFetch(`service-view/${useRoute().params.slug}`)
const service = computed(()=>data.value)
// const animations = ref([
//   {
//     title: '2D Animation',
//     description: 'Our 2D animation services showcase artistry and mechanics that communicate your brand purpose to your target audience and create awareness regarding products and services. These are cost-effective, faster to produce, and easy to update, making them perfect for including in marketing campaigns.'
//   },
//   {
//     title: '3D Animation',
//     description: '3D animated videos greatly stir curiosity and create dynamic influence in the marketplace. The audio-visual representation of information makes it easier for the audience to grasp and retain the brand, product, or service ideology, leading to more conversions and better sales.'
//   },
//   {
//     title: 'Motion Graphics',
//     description: 'Do you feel your content is dry, dull, and boring? Our motion graphics videos are engaging, digestible, easily shareable, and memorable. Here you’ve got the freedom to be creative, generate higher retention rates, and increase brand recall while guaranteeing more significant ROI.'
//   },
//   {
//     title: 'Whiteboard',
//     description: 'The foundation of animated explainer videos resides in storytelling. Our whiteboard services make dry topics more entertaining and complex ideas easier to understand. Each video reduces the website’s bounce rate and drives organic traffic from search engines.'
//   },
//   {
//     title: 'Logo Animation',
//     description: 'Creating an animated logo uplifts brand personality, accents the brand story, increases brand awareness, and creates an original image for the brand. Our animators capture the true essence of storytelling in the logo to get the audience’s attention and evoke emotions.'
//   }
// ]);
</script>

<template>
  <!-- Hero Section -->
  <div class="relative">
    <nuxt-img
        src="/system/my_service.png"
        class="w-full object-cover"
        sizes="sm:100vw md:100vw lg:100vw"
        loading="lazy"
    />
    <div class="absolute inset-0 flex items-center justify-center  top-[20rem]">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto text-start">
          <div class="flex items-center justify-start mb-4">
            <div class="bg-pink-500 h-1 w-12 mr-2"></div>
            <span class="text-sm uppercase">Welcome To {{ service?.name }}</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">{{ service?.name }} Services</h2>
          <p class="text-base sm:text-lg mb-8 max-w-4xl mr-auto">
            {{service?.desc || service?.short_desc}}
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-start gap-4">
            <LazyLiveChat />
            <LazyRequestQuote />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-3 mt-[16rem] lg:-mt-[4rem] sm:mt-[2rem]">
    <div v-if="service" class="text-center justify-center grid space-y-4">
      <div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full">
        <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[600px] h-1 bg-gray-300 rounded relative">
          <div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
        </div>
        <h2 class="sm:text-5xl text-xl font-normal font-['Impact']">
          Portfolio
        </h2>
        <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[600px] h-1 bg-gray-300 rounded relative">
          <div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
        </div>
      </div>
      <LazyPortfolio :service_id="service?.id" />
    </div>

    <div class="w-full max-w-screen-xl mx-auto flex flex-col items-center gap-6 px-4 py-8 overflow-hidden mt-9">
      <!-- Title -->
      <h1 class="text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-['Impact']">
        {{service?.name}} tips
      </h1>

      <!-- Description -->
      <p class="text-center text-white text-sm sm:text-base md:text-lg font-normal font-['Shabnam'] max-w-3xl">
        {{service?.short_desc}}
      </p>

      <!-- Animation Types -->
      <div v-if="service?.features" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full">
        <div v-for="animation in JSON.parse(service?.features)"
             v-show="animation?.title"
             :key="animation.title" class="flex flex-col items-center p-5 bg-white/5 rounded-3xl border border-white/40">
          <h2 class="text-center text-white text-xl sm:text-2xl md:text-3xl font-normal font-['Impact']">
            {{ animation.title }}
          </h2>
          <div class="w-10 h-1 bg-primary rounded-full my-2"></div>
          <p class="text-center text-white text-sm sm:text-base font-normal font-['Shabnam']">
            {{ animation.caption }}
          </p>
        </div>
      </div>

      <!-- Studio Section -->
      <h2 class="text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-['Impact'] mt-8">
        What Makes Animation Studio A Professional Animation Company
      </h2>
      <p class="text-center text-white text-lg sm:text-xl md:text-2xl font-normal font-['Impact'] max-w-3xl">
        Explore your options now!
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-start sm:justify-center gap-4">
        <LazyLiveChat />
        <LazyRequestQuote />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>