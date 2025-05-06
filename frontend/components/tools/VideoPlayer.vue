<script setup>
import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

defineProps({
  video_url:String
})
const videoRef = ref(null);
const isVisible = ref(false);

useIntersectionObserver(
    videoRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        isVisible.value = true;
      }
    },
    { threshold: 0.1 }
);
</script>

<template>
  <div>
    <video
        ref="videoRef"
        :src="isVisible ? video_url : null"
        autoplay
        loop
        muted
        playsinline
        class="w-full h-auto"
        aria-label="Sample video"
    >
      <source type="video/webm" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>