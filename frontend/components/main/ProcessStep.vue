<template>
  <div
      class="flex overflow-auto w-[calc(100vw-20%)] space-x-4 !mt-12 my-3 "
      v-observe="{ callback: onVisible }"
  >
    <div
        v-for="(item, index) in process_step"
        :key="item.title"
        class="grid gap-2 items-center place-items-center group"
        :class="{
          'active opacity-100 scale-100': index === activeIndex,
          'opacity-50 scale-95': index !== activeIndex,
        }"
        :aria-hidden="index !== activeIndex"
        :tabindex="index === activeIndex ? 0 : -1"
        @click="setActiveIndex(index)"
    >
      <div
          class="rounded-full sm:w-[9rem] sm:h-[9rem] transform transition origin-center group-hover:rotate-180 duration-700 w-[11rem] h-[11rem] p-3  bg-gradient-to-r from-secondary-shade to-[#ed56ab] flex items-center justify-center text-center"
      >
        <nuxt-img :src="item.image" class="text-6xl h-[60%]" :aria-label="item.heading" />
      </div>
      <div class="text-xl sm:text-2xl font-bold font-['Shabnam']">
        {{ item.heading }}
      </div>
      <p class="sm:text-md text-xs font-['Shabnam']">
        {{ item.sub_heading }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props =defineProps({
  process_step:Object
})
// Sample data (replace with your actual data)
// const process_step = [
//   {title:'Workshops',desc:'To understand the unique demands of your business, we run multiple workshops for running an extensive business analysis, comprehending campaign objectives, preparing proposals, and deciding animation deliverables.',icon:'iconsax/bulk/scan'},
//   {title:'Planning',desc:'To understand the unique demands of your business, we run multiple workshops for running an extensive business analysis, comprehending campaign objectives, preparing proposals, and deciding animation deliverables.',icon:'iconsax/bulk/pen-tool-2'},
//   {title:'A/B Testing',desc:'To understand the unique demands of your business, we run multiple workshops for running an extensive business analysis, comprehending campaign objectives, preparing proposals, and deciding animation deliverables.',icon:'iconsax/bulk/programming-arrows'},
//   {title:'Execution',desc:'To understand the unique demands of your business, we run multiple workshops for running an extensive business analysis, comprehending campaign objectives, preparing proposals, and deciding animation deliverables.',icon:'iconsax/bulk/magicpen'},
//   {title:'Implementation',desc:'To understand the unique demands of your business, we run multiple workshops for running an extensive business analysis, comprehending campaign objectives, preparing proposals, and deciding animation deliverables.',icon:'iconsax/bulk/share'},
// ]

// Intersection Observer for visibility
const isVisible = ref(false);
const onVisible = (entries, observer) => {
  if (entries[0].isIntersecting) {
    isVisible.value = true;
    observer.disconnect(); // Stop observing once visible
  }
};

const vObserve = {
  mounted(el, binding) {
    const observer = new IntersectionObserver(binding.value.callback, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });
    observer.observe(el);
  },
};
const activeIndex = ref(0);
let intervalId = null;

const setActiveIndex = (index) => {
  activeIndex.value = index;
};

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % props.process_step.length;
};

onMounted(() => {
  intervalId = setInterval(nextSlide, 3000); // هر ۳ ثانیه اسلاید بعدی
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
.process-wrap {
  @apply flex justify-center;
}

.mob-sliderxs {
  @apply flex-shrink-0;
}

.proces-box-wrap {
  @apply bg-white rounded-lg shadow-md p-6 m-2 w-64 sm:w-80 flex-none  transform transition-all duration-300;
}

.proces-box-wrap.active {
  @apply shadow-lg;
}

.proces-box-wrap img {
  @apply mx-auto;
}

@media (max-width: 640px) {
  .proces-box-wrap {
    @apply w-56;
  }
}
</style>
