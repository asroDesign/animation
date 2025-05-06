```vue
<template>
  <section class="faq-section max-w-6xl mx-auto  flex flex-col gap-6">
    <!-- Title with Separators -->
    <slot name="title" />

    <!-- FAQ Items -->
    <div v-for="(item, index) in faqItems" :key="index" class="faq-item bg-white/5 border border-white/40 rounded-2xl p-4  cursor-pointer" :class="{ 'faq-item-open': openItems[index] }">
      <div class="faq-question flex justify-between items-center" @click="toggleItem(index)">
        <p class="question-text text-white text-md sm:text-lg md:text-xl font-medium font-title flex-1">
          {{ item.title }}
        </p>
        <svg v-if="!openItems[index]" class="arrow-icon w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
        <svg v-else class="arrow-icon w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </div>
      <p v-if="openItems[index]" class="answer-text text-white text-sm sm:text-base font-normal font-body mt-4">
        {{ item.caption }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// FAQ Data
const {data:faqItems,status} = await useMyFetch('faq-get')
// const faqItems = ref([
//   {
//     question: 'What types of animation services do you offer at your studio?',
//     answer: 'At Pixel Studios Inc., we offer a wide range of animation services, including 2D and 3D animation, motion graphics, stop motion animation, and more. Whether you need a captivating explainer video or a visually stunning advertisement, we have the expertise to bring your vision to life.',
//   },
//   {
//     question: 'What types of animation services do you offer at your studio?',
//     answer: 'We provide comprehensive animation solutions tailored to your needs, including character animation, VFX, and interactive media.',
//   },
//   {
//     question: 'What types of animation services do you offer at your studio?',
//     answer: 'Our studio specializes in creating high-quality animations for commercials, films, and digital platforms.',
//   },
//   {
//     question: 'What types of animation services do you offer at your studio?',
//     answer: 'We offer bespoke animation services, from storyboarding to final rendering, ensuring your project stands out.',
//   },
//   {
//     question: 'What types of animation services do you offer at your studio?',
//     answer: 'Our team delivers creative animation solutions, including explainer videos, game cinematics, and more.',
//   },
// ]);

// Track open FAQ items
const openItems = ref([]);

// Toggle FAQ item
const toggleItem = (index) => {
  openItems.value[index] = !openItems.value[index];
};
</script>

<style scoped>
/* Tailwind handles all styling */
</style>
```