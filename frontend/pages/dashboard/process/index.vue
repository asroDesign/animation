<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Your Processes</h1>

    <!-- Loading State -->
    <div v-if="isLoading" class="text-center text-gray-500 py-4">
      Loading processes...
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="bg-red-100 text-red-800 p-4 rounded-md mb-4">
      {{ error }}
    </div>

    <!-- Process List -->
    <div v-else>
      <div v-if="processes.length === 0" class="text-center text-gray-500 py-4">
        No processes available.
      </div>
      <div v-else class="space-y-4">
        <div
            v-for="process in processes"
            :key="process.id"
            class="border border-gray-100 shadow-md rounded-lg p-6 transition-transform hover:-translate-y-1"
        >
          <div class="flex justify-between items-center">
            <div>
              <p class="text-lg"><span class="font-semibold">ID:</span> {{ process.id }}</p>
              <p class="text-lg"><span class="font-semibold">Description:</span> {{ process.description }}</p>
              <p class="text-lg">
                <span class="font-semibold">Status:</span>
                <span :class="{
                  'text-green-600': process.status === 'completed',
                  'text-yellow-600': process.status === 'pending',
                  'text-red-600': process.status === 'failed'
                }">{{ process.status }}</span>
              </p>
            </div>
            <button
                @click="viewProcess(process.id)"
                class="bg-gray-600 text-white hover:bg-gray-700 px-4 py-2 rounded-md font-medium transition-colors"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      <!-- Pagination Controls -->
      <div v-if="totalPages > 1" class="flex justify-between items-center mt-6">
        <button
            :disabled="currentPage === 1"
            @click="fetchProcesses(currentPage - 1)"
            class="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span class="text-gray-700">
          Page {{ currentPage }} of {{ totalPages }} ({{ totalItems }} processes)
        </span>
        <button
            :disabled="currentPage === totalPages"
            @click="fetchProcesses(currentPage + 1)"
            class="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useMyFetch } from '#imports';

// import {useAuthStore} from "~/stores/auth.js";

// const authStore = useAuthStore();
const processes = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const totalItems = ref(0);
const isLoading = ref(false);
const error = ref(null);
const router = useRouter();

async function fetchProcesses(page = 1) {
  isLoading.value = true;
  error.value = null;
  try {
    const { data, error: fetchError } = await useMyFetch(`/processes?page=${page}`,{

    });
    if (fetchError.value) {
      throw new Error('Failed to fetch processes.');
    }
    processes.value = data.value?.data || [];
    currentPage.value = data.value?.current_page || 1;
    totalPages.value = data.value?.last_page || 1;
    totalItems.value = data.value?.total || 0;
  } catch (err) {
    console.error('Error fetching processes:', err);
    error.value = 'Failed to load processes. Please try again.';
  } finally {
    isLoading.value = false;
  }
}

function viewProcess(id) {
  router.push(`/dashboard/process/${id}`);
}

onMounted(() => {
  fetchProcesses();
});

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
});
</script>