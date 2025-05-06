<template>
  <div v-observe="{ callback: onVisible }">
    <div class="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 sm:gap-6 gap-3">
      <nuxt-link
          v-for="(item, index) in items"
          :key="index" :data-tip="item?.sub_heading"
          class="bg-white tooltip backdrop-blur-xs p-9 rounded-xl lg:w-[14rem] lg:h-[14rem] w-[12rem] h-[12rem] transition transform ease-in-out duration-700 hover:scale-110"
          :class="[
            index % 2 === 0 ? 'bg-opacity-10' : 'bg-opacity-5',
            isVisible ? 'fade-shake-enter-active' : ''
          ]"
          :style="{ '--index': index }"
      >
        <nuxt-img
            :src="item?.image || '/system/Logo.png'"
            class="h-full  w-full objet-contain"
            :alt="item?.heading || 'Item image'"
            loading="lazy"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  items:Object
})

// Intersection Observer Directive
const isVisible = ref(false);
const onVisible = (entries, observer) => {
  if (entries[0].isIntersecting) {
    isVisible.value = true;
    observer.disconnect();
  }
};

const vObserve = {
  mounted(el, binding) {
    const observer = new IntersectionObserver(binding.value.callback, {
      threshold: 0.1,
    });
    observer.observe(el);
  },
};
</script>

<style scoped>
/* Animation for fade-shake */
.fade-shake-enter-active {
  animation: fadeIn 0.5s ease-out, shake 0.2s ease-in-out 0.5s;
  animation-delay: calc(var(--index) * 0.2s);
  opacity: 1;
}

.fade-shake-enter-active:not(.fade-shake-enter-active) {
  opacity: 0;
}

/* Keyframes for fade-in */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Keyframes for shake */
@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  20%, 60% {
    transform: translateX(-4px);
  }
  40%, 80% {
    transform: translateX(4px);
  }
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .fade-shake-enter-active {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>