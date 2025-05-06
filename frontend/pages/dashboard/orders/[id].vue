<template>
  <div class="w-full flex flex-col gap-7 overflow-hidden">
    <!-- Order Header -->
    <div class="w-full flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
      <div class="flex items-center gap-2">
        <nuxt-link to="/dashboard/orders" class="text-white text-base font-normal font-['Shabnam'] underline" >Orders</nuxt-link>
        <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="text-white text-sm font-bold font-['Shabnam']">{{ orderId }}</span>
      </div>
      <div class="flex-1"></div>
      <div class="flex items-center justify-between sm:justify-end gap-4">
        <h2 class="text-white text-2xl sm:text-3xl font-normal font-['Impact']">Order Summary</h2>
        <span class="text-teal-300 text-xl sm:text-2xl font-normal font-['Impact']">Successful</span>
      </div>
    </div>

    <!-- Order Summary Table -->
    <div class="w-full">
      <!-- Desktop Table (Visible on sm and above) -->
      <div class="hidden sm:block overflow-x-auto">
        <table class="w-full text-left">
          <thead>
          <tr class="text-zinc-500 text-sm font-normal font-['Shabnam']">
            <th class="py-2 px-4">Id</th>
            <th class="py-2 px-4">File Name</th>
            <th class="py-2 px-4">Duration</th>
            <th class="py-2 px-4">Price</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in orderItems" :key="item.id" class="border-t border-neutral-700/50">
            <td class="py-2 px-4 text-white text-sm font-bold font-['Shabnam']">{{ item.id }}</td>
            <td class="py-2 px-4 text-white text-sm font-bold font-['Shabnam']">{{ item.fileName }}</td>
            <td class="py-2 px-4 text-white text-sm font-bold font-['Shabnam']">{{ item.duration }}</td>
            <td class="py-2 px-4 text-white text-sm font-bold font-['Shabnam']">{{ item.price }}</td>
          </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile Cards (Visible below sm) -->
      <div class="block sm:hidden space-y-4">
        <div
            v-for="item in orderItems"
            :key="item.id"
            class="bg-[#14082A] rounded-lg p-4 flex flex-col gap-2 border border-neutral-700/50"
        >
          <div class="flex justify-between">
            <span class="text-zinc-500 text-xs font-normal font-['Shabnam']">Id</span>
            <span class="text-white text-sm font-bold font-['Shabnam']">{{ item.id }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-zinc-500 text-xs font-normal font-['Shabnam']">File Name</span>
            <span class="text-white text-sm font-bold font-['Shabnam']">{{ item.fileName }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-zinc-500 text-xs font-normal font-['Shabnam']">Duration</span>
            <span class="text-white text-sm font-bold font-['Shabnam']">{{ item.duration }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-zinc-500 text-xs font-normal font-['Shabnam']">Price</span>
            <span class="text-white text-sm font-bold font-['Shabnam']">{{ item.price }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- List of Items -->
    <div class="w-full">
      <h2 class="text-white text-2xl sm:text-3xl font-normal font-['Impact'] mb-4">List of Items</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7">
        <div
            v-for="item in cartItems"
            :key="item.id"
            class="bg-[#1e1e2e] rounded-[20px] p-3.5 flex flex-col col-span-1 gap-2.5"
        >
          <img
              :src="item.image"
              alt="Cart Item"
              class="w-full h-40 sm:h-52 rounded-2xl object-cover"
          />
          <h3 class="text-white text-xl sm:text-2xl font-normal font-['Impact']">{{ item.name }}</h3>
          <div class="flex flex-col gap-1 text-sm sm:text-base">
            <div class="flex justify-between">
              <span class="text-zinc-400 font-normal font-['Shabnam']">Type:</span>
              <span class="text-white font-medium font-['Shabnam']">{{ item.type }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-zinc-400 font-normal font-['Shabnam']">Duration:</span>
              <span class="text-white font-medium font-['Shabnam']">{{ item.duration }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-zinc-400 font-normal font-['Shabnam']">Price:</span>
              <span class="text-white font-medium font-['Shabnam']">{{ item.price }}</span>
            </div>
          </div>
          <div class="flex gap-2">
            <primary-button class="text-xs !px-3"
                @click="downloadItem(item.id)"
            >
              Download Item
            </primary-button>
            <secondary-button class="text-xs !px-3"
                @click="removeItem(item.id)"
            >
              Remove Item
            </secondary-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SecondaryButton from "~/components/tools/SecondaryButton.vue";
import PrimaryButton from "~/components/tools/PrimaryButton.vue";

// Order Data
const orderId = ref(useRoute().params.id);
const orderItems = ref([
  {
    id: 'AN2787',
    fileName: 'Animation.mp4',
    duration: '30s',
    price: '$54,000',
  },
  {
    id: 'RZ8308',
    fileName: 'Animation.mp4',
    duration: '13/01/2022', // Note: Original data has inconsistency; assuming date as placeholder
    price: '$86,050',
  },
  {
    id: 'RZ8765',
    fileName: 'Animation.mp4',
    duration: '13/01/2022', // Note: Original data has inconsistency
    price: '$4,000',
  },
]);

// Cart Items Data
const cartItems = ref([
  {
    id: 1,
    name: 'Cart Item Name',
    image: 'https://placehold.co/300x206',
    type: 'Video (MP4)',
    duration: '30s',
    price: '$20',
  },
  {
    id: 2,
    name: 'Cart Item Name',
    image: 'https://placehold.co/300x206',
    type: 'Video (MP4)',
    duration: '30s',
    price: '$20',
  },
  {
    id: 3,
    name: 'Cart Item Name',
    image: 'https://placehold.co/300x206',
    type: 'Video (MP4)',
    duration: '30s',
    price: '$20',
  },
  {
    id: 4,
    name: 'Cart Item Name',
    image: 'https://placehold.co/300x206',
    type: 'Video (MP4)',
    duration: '30s',
    price: '$20',
  },
]);

// Actions
const downloadItem = (id) => {
  console.log(`Downloading item ${id}...`);
  // Simulate API call
  // Example: await fetch(`/api/items/${id}/download`);
  alert(`Item ${id} download initiated!`);
};

const removeItem = (id) => {
  console.log(`Removing item ${id}...`);
  // Simulate API call
  // Example: await fetch(`/api/items/${id}`, { method: 'DELETE' });
  cartItems.value = cartItems.value.filter((item) => item.id !== id);
  alert(`Item ${id} removed!`);
};
definePageMeta({
  layout:'dashboard'
})
</script>

<style scoped>
/* Tailwind handles all styling */
</style>