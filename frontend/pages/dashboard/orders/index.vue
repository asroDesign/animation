<template>
  <div class="w-full flex flex-col gap-7 overflow-hidden">
    <!-- Header -->
    <div class="w-full">
      <h2 class="text-white text-2xl sm:text-3xl font-normal font-['Impact']">Recent Purchases</h2>
    </div>

    <!-- Desktop Table (Visible on sm and above) -->
    <div class="hidden sm:block overflow-x-auto">
      <table class="w-full text-left">
        <thead>
        <tr class="text-zinc-500 text-sm font-normal font-['Shabnam']">
          <th class="py-2 px-4">Id</th>
          <th class="py-2 px-4">File Name</th>
          <th class="py-2 px-4">Date</th>
          <th class="py-2 px-4">Invoiced Amount</th>
          <th class="py-2 px-4">Status</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="purchase in purchases" :key="purchase.id" class="border-t border-neutral-700/50">
          <td class="py-2 px-4 text-white text-sm font-bold font-['Shabnam']">
            <nuxt-link :to="`/dashboard/orders/${purchase.id}`">
              {{ purchase.id }}
            </nuxt-link>
          </td>
          <td class="py-2 px-4 text-white text-sm font-bold font-['Shabnam']">
            {{ purchase.fileName }}
          </td>
          <td class="py-2 px-4 text-white text-sm font-bold font-['Shabnam']">
            {{ purchase.date }}
          </td>
          <td class="py-2 px-4 text-white text-sm font-bold font-['Shabnam']">
            {{ purchase.invoicedAmount }}
          </td>
          <td
              class="py-2 px-4 text-sm font-bold font-['Shabnam']"
              :class="{
                'text-amber-300': purchase.status === 'Pending',
                'text-teal-300': purchase.status === 'Delivered',
                'text-pink-700': purchase.status === 'Failed',
              }"
          >
            {{ purchase.status }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile Cards (Visible below sm) -->
    <div class="block sm:hidden space-y-4">
      <div
          v-for="purchase in purchases"
          :key="purchase.id"
          class="bg-[#14082A] rounded-lg p-4 flex flex-col gap-2 border border-neutral-700/50"
      >
        <div class="flex justify-between">
          <span class="text-zinc-500 text-xs font-normal font-['Shabnam']">Id</span>
          <span class="text-white text-sm font-bold font-['Shabnam']">{{ purchase.id }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-zinc-500 text-xs font-normal font-['Shabnam']">File Name</span>
          <span class="text-white text-sm font-bold font-['Shabnam']">{{ purchase.fileName }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-zinc-500 text-xs font-normal font-['Shabnam']">Date</span>
          <span class="text-white text-sm font-bold font-['Shabnam']">{{ purchase.date }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-zinc-500 text-xs font-normal font-['Shabnam']">Invoiced Amount</span>
          <span class="text-white text-sm font-bold font-['Shabnam']">{{ purchase.invoicedAmount }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-zinc-500 text-xs font-normal font-['Shabnam']">Status</span>
          <span
              class="text-sm font-bold font-['Shabnam']"
              :class="{
              'text-amber-300': purchase.status === 'Pending',
              'text-teal-300': purchase.status === 'Delivered',
              'text-pink-700': purchase.status === 'Failed',
            }"
          >
            {{ purchase.status }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Purchases Data
const  {data:purchases,status} = await useMyFetch('orders',{

})
definePageMeta({
  layout:'dashboard',
  middleware:'auth'
})
</script>

<style scoped>
/* Tailwind handles all styling */
</style>