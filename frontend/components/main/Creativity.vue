<script setup lang="ts">
import { ref, onMounted } from 'vue';
import VideoPlayer from "~/components/tools/VideoPlayer.vue";

// Define text content
const titlePart1 = 'There is no limit for ';
const titlePart2 = 'creativity';
const subtitle = 'We create brand and experience';

// Split text into characters for animation
const titleChars1 = titlePart1.split('');
const titleChars2 = titlePart2.split('');
const subtitleChars = subtitle.split('');

// Control visibility of characters
const showAnimation = ref(false);

// Trigger animation with a slight delay on mount
onMounted(() => {
  setTimeout(() => {
    showAnimation.value = true;
  }, 100); // 100ms delay to ensure no flash of content
});
</script>

<template>
  <div class="py-5 md:py-10 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-3 lg:gap-20 max-w-7xl mx-auto px-4">
    <div class="w-full md:w-1/2 max-w-[791px] relative">
      <div class="flex flex-col justify-start items-start gap-4">
        <h1
            v-if="showAnimation"
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-['Shokoh'] leading-tight"
        >
          <span class="text-white">
            <span
                v-for="(char, index) in titleChars1"
                :key="'title1-' + index"
                class="inline-block animate-type"
                :style="{ animationDelay: `${index * 0.05}s` }"
            >
              {{ char }}
            </span>
          </span>
          <span class="text-pink-700">
            <span
                v-for="(char, index) in titleChars2"
                :key="'title2-' + index"
                class="inline-block animate-type"
                :style="{ animationDelay: `${(titleChars1.length + index) * 0.05}s` }"
            >
              {{ char }}
            </span>
          </span>
        </h1>
        <p
            v-if="showAnimation"
            class="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal font-['Impact']"
        >
          <span
              v-for="(char, index) in subtitleChars"
              :key="'subtitle-' + index"
              class="inline-block animate-type"
              :style="{ animationDelay: `${(titleChars1.length + titleChars2.length + index) * 0.05}s` }"
          >
            {{ char }}
          </span>
        </p>
        <div class="w-16 md:w-24 h-1 bg-primary rounded-[3px] transform rotate-180" />
      </div>
    </div>
    <div class="w-full md:w-1/2 max-w-[806px] h-auto mix-blend-lighten object-contain">
      <VideoPlayer video_url="/system/vecteezy_energy_blue_glowing_cosmic_magic_sphere_futuristic_round.webm" />
    </div>
  </div>
</template>

<style scoped>
/* Typing animation */
.animate-type {
  animation: type 0.5s ease forwards;
}

@keyframes type {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>