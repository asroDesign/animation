<template>
  <div class="star-rating flex items-center">
    <span v-for="i in 5" :key="i" class="text-yellow-400">
      <i
          :class="{
          'fas fa-star': i <= Math.floor(rating),
          'fas fa-star-half-alt': i === Math.ceil(rating) && rating % 1 !== 0,
          'far fa-star': i > Math.ceil(rating),
        }"
      ></i>
    </span>
    <span v-if="showRating" class="ml-2 text-sm text-gray-600">{{ rating.toFixed(1) }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  showRating: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
/* Font Awesome is included globally in the project */
</style>