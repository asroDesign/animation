<script setup>
import { gsap } from 'gsap';
import { ref, onMounted } from 'vue';
defineProps({
  video_ur:String
})
const videoRef = ref(null);

onMounted(() => {
  gsap.fromTo(
      videoRef.value,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
  );
});
</script>

<template>
  <div>
    <video
        ref="videoRef"
        autoplay
        loop
        muted
        playsinline
        class="w-full h-auto"
    >
      <source :src="video_ur" type="video/webm" />
    </video>
  </div>
</template>

<style scoped>
video {
  animation: fadeInScale 1s ease-out;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>