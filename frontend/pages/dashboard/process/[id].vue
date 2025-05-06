<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-4">Process #{{ process.id }}</h1>
    <div class=" shadow-md rounded-lg p-6 mb-6">
      <p class="text-lg mb-2"><span class="font-semibold">Description:</span> {{ process.description }}</p>
      <p class="text-lg">
        <span class="font-semibold">Status:</span>
        <span :class="{
          'text-green-600': process.status === 'completed',
          'text-yellow-600': process.status === 'pending',
          'text-red-600': process.status === 'failed'
        }">{{ process.status }}</span>
      </p>
    </div>

    <h2 class="text-2xl font-semibold  mt-8 mb-4">Stages</h2>
    <div v-for="stage in process.stages" :key="stage.id" class="border border-gray-300 shadow-md rounded-lg p-6 mb-4 transition-transform hover:-translate-y-1">
      <div class="flex justify-between items-center mb-3">
        <p class="text-lg"><span class="font-semibold">Type:</span> {{ stage.stage_type }}</p>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
              :class="stage.requires_payment ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-400'">
          {{ stage.requires_payment ? 'Payment Required' : '' }}
        </span>
      </div>

      <div v-if="stage.stage_type === 'form' && stage.typed && !process.stages.some(i=>i.requires_payment==1)">
        <h3 class="text-xl font-medium text-gray-700 mb-3">Form: {{ stage.type.name }}</h3>
        <form @submit.prevent="submitForm(stage)" class="space-y-4">
          <div v-for="field in stage.typed.fields" :key="field.id" class="space-y-1">
            <label :for="`field_${field.id}`" class="block text-sm font-medium">
              {{ field.label }} {{ field.required ? '*' : '' }}
            </label>
            <input
                v-if="field.type === 'text'"
                v-model="formResponses[field.id]"
                :id="`field_${field.id}`"
                :required="field.required"
                type="text"
                class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
                v-if="field.type === 'textarea'"
                v-model="formResponses[field.id]"
                :id="`field_${field.id}`"
                :required="field.required"
                class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                rows="4"
            ></textarea>
            <select
                v-if="field.type === 'select'"
                v-model="formResponses[field.id]"
                :id="`field_${field.id}`"
                :required="field.required"
                class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="" disabled>Select an option</option>
              <option v-for="option in field.options?.split(',')" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <secondary-button
              type="submit"
          >
            Submit
          </secondary-button>
        </form>
      </div>

      <div v-if="stage.stage_type === 'invoice' && stage.typed">
        <p class="text-lg mb-2"><span class="font-semibold">Amount:</span> {{ stage.typed.amount }}</p>
        <p class="text-lg mb-2">
          <span class="font-semibold mr-2">Status:</span>
          <span class="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium"
                :class="stage.typed.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'">
            {{ stage.typed.status }}
          </span>
        </p>
        <button
            v-if="stage.typed.status === 'pending'"
            @click="payInvoice(stage.typed)"
            class="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md font-medium transition-colors"
        >
          Pay Now
        </button>
      </div>

      <div v-if="stage.stage_type === 'file' && stage.typed && !process.stages.some(i=>i.requires_payment==1)">
        <p class="text-lg">
          <span class="font-semibold">File:</span>
          <a :href="`/storage/${stage.typed.path}`" download class="text-blue-600 hover:underline">
            {{ stage.typed.name }}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useMyFetch } from '#imports';


// import {useAuthStore} from "~/stores/auth.js";
import SecondaryButton from "~/components/tools/SecondaryButton.vue";

// const authStore = useAuthStore();

const route = useRoute();
const process = ref({});
const formResponses = ref({});

onMounted(async () => {
  const { data } = await useMyFetch(`/processes/${route.params.id}`,{

  });
  process.value = data.value;
});

async function submitForm(stage) {
  const responses = Object.entries(formResponses.value).map(([form_field_id, value]) => ({
    form_field_id,
    value,
  }));
  await useMyFetch(`/stages/${stage.id}/responses`, {
    body: {responses},
    method: 'POST',
  });
  formResponses.value = {};
  const { data } = await useMyFetch(`/processes/${route.params.id}`,{

  });
  process.value = data.value;
}

async function payInvoice(invoice) {
  await useMyFetch(`/invoices/${invoice.id}/payments`, {
    body: { amount: invoice.amount },
    method: 'POST',

  });
  const { data } = await useMyFetch(`/processes/${route.params.id}`,{

  });
  process.value = data.value;
}
definePageMeta({
  layout:'dashboard',
  middleware: 'auth',
})
</script>