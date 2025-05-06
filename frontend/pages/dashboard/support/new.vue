<template>
  <div class="w-full  rounded-3xl flex flex-col gap-7 overflow-hidden">
    <!-- Back to Messages -->
    <nuxt-link
        to="/dashboard/support"
        class="relative w-52 h-12 flex items-center justify-center bg-transparent rounded-3xl border border-primary shadow-[0_0_6px_rgba(202,23,92,1)] text-white text-base font-medium font-['Shabnam'] hover:bg-primary/10 transition-colors"
    >
      <span class="flex items-center gap-2">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9 15L3 9L9 3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M3 9H21" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        Back to Messages
      </span>
    </nuxt-link>

    <!-- Ticket Form -->
    <form @submit.prevent="sendTicket" class="flex flex-col gap-7 w-full">
      <!-- Subject -->
      <div class="relative">
        <input
            v-model="formData.subject"
            type="text"
            placeholder="Conversation Subject"
            class="w-full h-12 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            :class="{ 'border-red-500': errors.subject }"
        />
        <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
      </div>

      <!-- Message -->
      <div class="relative flex-1">
        <textarea
            v-model="formData.message"
            placeholder="Write your message ..."
            class="w-full h-64 sm:h-96 p-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            :class="{ 'border-red-500': errors.message }"
        ></textarea>
        <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
        <div v-if="uploadedFiles.length" class="mt-2 flex flex-wrap gap-2">
          <div
              v-for="(file, index) in uploadedFiles"
              :key="index"
              class="flex items-center gap-2 bg-gray-800 p-2 rounded-lg"
          >
            <span class="text-white text-sm">{{ file.name }}</span>
            <secondary-button
                @click="removeFile(index)"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </secondary-button>
          </div>
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-end">
        <label class="relative w-44 h-12">
          <input
              type="file"
              multiple
              class="hidden"
              @change="handleFileUpload"
          />
          <span class="absolute inset-0 flex items-center justify-center bg-transparent rounded-3xl border border-primary shadow-[0_0_6px_rgba(202,23,92,1)] text-white text-base font-medium font-['Shabnam'] cursor-pointer hover:bg-primary/10 transition-colors">
            <nuxt-icon name="iconsax/linear/paperclip-2" />
            Attachment
          </span>
        </label>
        <primary-button
            type="submit"
            class="justify-center"
        >
          <span class="flex items-center gap-2">
            Send Message
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M5 13L9 17L19 7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </primary-button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SecondaryButton from "~/components/tools/SecondaryButton.vue";
import PrimaryButton from "~/components/tools/PrimaryButton.vue";

import { useToast } from '~/composables/useToast';


// Initialize toast composable
const { addToast } = useToast();
// Form Data
const formData = reactive({
  subject: '',
  message: '',
});

// Uploaded Files
const uploadedFiles = ref([]);
const errors = ref({});

const router = useRouter();

// File Upload
const handleFileUpload = (event) => {
  const files = Array.from(event.target.files);
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  const maxSize = 5 * 1024 * 1024; // 5MB

  files.forEach((file) => {
    if (!allowedTypes.includes(file.type)) {
      errors.value.files = 'Only JPEG, PNG, and PDF files are allowed.';
      return;
    }
    if (file.size > maxSize) {
      errors.value.files = 'File size must be less than 5MB.';
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      uploadedFiles.value.push({
        name: file.name,
        url: e.target.result,
      });
      errors.value.files = '';
    };
    reader.readAsDataURL(file);
  });
};

// Remove File
const removeFile = (index) => {
  uploadedFiles.value.splice(index, 1);
};

// Send Ticket
const sendTicket = async () => {
  errors.value = {};

  if (!formData.subject.trim()) {
    errors.subject = 'Subject is required.';
  }
  if (!formData.message.trim()) {
    errors.value.message = 'Message is required.';
  }
  if (Object.keys(errors.value).length > 0) return;

  try {
    const {data,status} = await useMyFetch('/tickets', {
      method: 'POST',
      body: {files:uploadedFiles,...formData},
    });
    if (status.value=='success'){
      addToast('Ticket created successfully!','success',5000)

      router.push('/dashboard/support');
    }else{
      addToast(data.value.error?.message,'error',3000)
    }
  } catch (error) {
    console.error('Error creating ticket:', error);
    addToast('Failed to create ticket.','error',3000)
  }
};
definePageMeta({
  layout:'dashboard',
  middleware:'auth'
})
</script>

<style scoped>
/* Tailwind handles all styling */
</style>
