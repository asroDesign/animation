
<template>
  <secondary-button class="btn" onclick="withdraw_modal_3.showModal()">Withdraw</secondary-button>
  <dialog id="withdraw_modal_3" class="modal">
    <div class="modal-box bg-transparent">
      <div
          class="w-full max-w-md sm:max-w-[567px] bg-[#020617] rounded-[42px] flex flex-col items-center gap-7 p-7 sm:p-10 relative overflow-hidden"
      >
        <!-- Gradient Background -->
        <div class="absolute inset-0 bg-gradient-to-b from-pink-600/0 to-violet-700/30 rounded-full blur-[350px]"></div>

        <!-- Close Button -->
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </form>

        <!-- Header -->
        <h1 class="text-white text-4xl sm:text-7xl font-normal font-['Impact']">Withdraw</h1>
        <p class="text-white text-xl sm:text-3xl font-normal font-['Impact']">Select method to withdraw.</p>

        <!-- Form -->
        <form @submit.prevent="submitWithdraw" class="w-full max-w-[507px] bg-[#14082A] rounded-[32px] p-7 flex flex-col gap-7">
          <!-- Payment Method -->
          <div class="flex gap-6 sm:gap-12">
            <label
                v-for="method in paymentMethods"
                :key="method"
                class="flex items-center gap-2 cursor-pointer"
            >
              <div class="relative">
                <input
                    type="radio"
                    :value="method"
                    v-model="formData.paymentMethod"
                    class="hidden"
                />
                <div
                    class="w-6 h-6 rounded-full border"
                    :class="formData.paymentMethod === method ? 'bg-primary border-primary-shade' : 'bg-[#14082A] border-gray-400'"
                ></div>
                <div
                    v-if="formData.paymentMethod === method"
                    class="absolute top-1.5 left-1.5 w-3 h-3 bg-white rounded-full"
                ></div>
              </div>
              <span class="text-white text-sm sm:text-base font-normal font-['Shabnam']">{{ method }}</span>
            </label>
          </div>
          <p v-if="errors.paymentMethod" class="text-red-500 text-sm">{{ errors.paymentMethod }}</p>

          <!-- Card Number (for Credit Card) -->
          <div v-if="formData.paymentMethod === 'Credit Card'" class="relative">
            <input
                v-model="formData.cardNumber"
                type="text"
                placeholder="Card Number"
                class="w-full h-12 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                :class="{ 'border-red-500': errors.cardNumber }"
            />
            <p v-if="errors.cardNumber" class="text-red-500 text-sm mt-1">{{ errors.cardNumber }}</p>
          </div>

          <!-- Amount -->
          <div class="relative">
            <input
                v-model.number="formData.amount"
                type="number"
                placeholder="Amount"
                min="0"
                step="0.01"
                class="w-full h-12 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                :class="{ 'border-red-500': errors.amount }"
            />
            <p v-if="errors.amount" class="text-red-500 text-sm mt-1">{{ errors.amount }}</p>
          </div>

          <!-- File Upload (Optional) -->
          <label class="relative w-full h-12">
            <input
                type="file"
                class="hidden"
                @change="handleFileUpload"
            />
            <span class="absolute inset-0 flex items-center justify-center bg-transparent rounded-3xl border border-primary shadow-[0_0_6px_rgba(202,23,92,1)] text-white text-sm sm:text-base font-medium font-['Shabnam'] cursor-pointer hover:bg-primary/10 transition-colors">
            <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M15.5 12h-12m0 0l3.5-3.5M3.5 12l3.5 3.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21 12h-3.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Upload Verification (Optional)
          </span>
          </label>
          <div v-if="uploadedFile" class="flex items-center gap-2 bg-gray-800 p-2 rounded-lg">
            <span class="text-white text-sm">{{ uploadedFile.name }}</span>
            <button
                @click="uploadedFile = null"
                class="text-red-500 hover:text-red-700"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p v-if="errors.file" class="text-red-500 text-sm">{{ errors.file }}</p>

          <!-- Summary -->
          <div class="flex flex-col gap-2 text-gray-400 text-sm sm:text-base font-normal font-['Shabnam']">
            <p>Tax: 0</p>
            <p>Fee: 0</p>
            <p>
              You will receive:
              <span class="text-2xl font-normal font-['Impact']">{{ formData.amount || 0 }} $</span>
            </p>
          </div>

          <!-- Submit Button -->
          <button
              type="submit"
              class="w-full h-12 bg-primary rounded-3xl shadow-[0_0_6px_rgba(202,23,92,1)] border border-primary text-white text-base font-medium font-['Shabnam'] hover:bg-primary/90 transition-colors"
          >
            Pay and Withdraw
          </button>
        </form>
      </div>
    </div>
  </dialog>

</template>

<script setup>
import { ref } from 'vue';
import PrimaryButton from "~/components/tools/PrimaryButton.vue";
import SecondaryButton from "~/components/tools/SecondaryButton.vue";

defineProps(['balance']);
defineEmits(['close', 'update-balance']);

// Form Data
const formData = ref({
  paymentMethod: 'Credit Card',
  cardNumber: '',
  amount: null,
});

const uploadedFile = ref(null);
const paymentMethods = ['Credit Card', 'Cryptocurrency'];
const errors = ref({});

// File Upload
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  const maxSize = 5 * 1024 * 1024; // 5MB

  if (!allowedTypes.includes(file.type)) {
    errors.value.file = 'Only JPEG, PNG, and PDF files are allowed.';
    return;
  }
  if (file.size > maxSize) {
    errors.value.file = 'File size must be less than 5MB.';
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedFile.value = {
      name: file.name,
      url: e.target.result,
    };
    errors.value.file = '';
  };
  reader.readAsDataURL(file);
};

// Submit Withdraw
const submitWithdraw = async () => {
  errors.value = {};

  if (!formData.value.paymentMethod) {
    errors.value.paymentMethod = 'Please select a payment method.';
  }
  if (formData.value.paymentMethod === 'Credit Card' && !formData.value.cardNumber.trim()) {
    errors.value.cardNumber = 'Card number is required.';
  } else if (
      formData.value.paymentMethod === 'Credit Card' &&
      !/^\d{16}$/.test(formData.value.cardNumber.replace(/\s/g, ''))
  ) {
    errors.value.cardNumber = 'Invalid card number (16 digits required).';
  }
  if (!formData.value.amount || formData.value.amount <= 0) {
    errors.value.amount = 'Please enter a valid amount.';
  }
  if (formData.value.amount > (props.balance || 0)) {
    errors.value.amount = 'Insufficient balance.';
  }
  if (Object.keys(errors.value).length > 0) return;

  try {
    // Simulate API call
    console.log('Withdraw Data:', { ...formData.value, file: uploadedFile.value });
    // Example: await fetch('/api/wallet/withdraw', { method: 'POST', body: JSON.stringify({ ...formData.value, file: uploadedFile.value }) });
    const newBalance = (props.balance || 0) - formData.value.amount;
    $emit('update-balance', newBalance);
    $emit('close');
    alert('Withdrawal successful!');
  } catch (error) {
    errors.value.general = 'Failed to process withdrawal. Please try again.';
    console.error(error);
  }
};
</script>

<style scoped>
/* Tailwind handles all styling */
</style>
