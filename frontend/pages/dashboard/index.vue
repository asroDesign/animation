<script setup lang="ts">

definePageMeta({
  layout:'dashboard',
  middleware:'auth'
})
</script>

<template>
  <h1 class="text-2xl font-bold text-gray-800 mb-4">Dashboard Overview</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="bg-blue-50 p-4 rounded-lg">
      <h2 class="text-lg font-semibold text-blue-800">Request</h2>
      <p class="text-2xl font-bold text-blue-600">0</p>
    </div>
    <div class="bg-green-50 p-4 rounded-lg">
      <h2 class="text-lg font-semibold text-green-800">Ticket</h2>
      <p class="text-2xl font-bold text-green-600">0</p>
    </div>
    <div class="bg-purple-50 p-4 rounded-lg">
      <h2 class="text-lg font-semibold text-purple-800">Orders</h2>
      <p class="text-2xl font-bold text-purple-600">0</p>
    </div>
  </div>
</template>

<style scoped>

</style>