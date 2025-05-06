
<template>
  <div class="w-full  rounded-3xl flex flex-col gap-7 overflow-hidden">
    <!-- Back to Messages -->
    <router-link
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
    </router-link>

    <div class="border-l-2 border-teal-300">
      <span class="p-2">
        {{data?.description}}
      </span>
    </div>
    <!-- Messages -->
    <div class="flex flex-col gap-4 w-full overflow-y-auto max-h-[600px] sm:max-h-[700px]">
      <div
          v-for="message in data?.replies"
          :key="message.id"
          class="flex"
          :class="message.isSent ? 'justify-end' : 'justify-start'"
      >
        <div
            class="flex items-end gap-2 max-w-[90%] sm:max-w-[80%]"
            :class="message.isSent ? 'flex-row-reverse' : 'flex-row'"
        >
          <img
              :src="message.avatar || 'https://placehold.co/40x40'"
              alt="User Avatar"
              class="w-10 h-10 rounded-full"
          />
          <div class="grid gap-0">
            <div
                class="p-2.5 rounded-tl-[10px] rounded-br-[10px]"
                :class="message.isSent ? 'bg-primary rounded-tr-[10px]' : 'bg-[#514078] rounded-bl-[10px]'"
            >
              <p class="text-white text-sm sm:text-base font-medium font-['Shabnam']">
                {{ message.message }}
              </p>
              <div v-if="message.files" class="mt-2 flex flex-col gap-2">
                <a
                    v-for="(file, index) in message.files"
                    :key="index"
                    :href="file.url"
                    target="_blank"
                    class="text-blue-300 text-sm hover:underline"
                >
                  {{ file.name }}
                </a>
              </div>
            </div>
            <div class="flex items-center gap-1 text-gray-400 text-xs sm:text-sm font-medium font-['Shabnam'] text-nowrap"
                 :class="message.isSent ? 'justify-start' : 'justify-end'">
              <nuxt-icon name="iconsax/bulk/calendar" />
              {{ message?.human_date }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Message Input and Buttons -->
    <div class="flex flex-col gap-4">
      <div class="relative w-full">
        <textarea
            v-model="newMessage"
            placeholder="Write your message ..."
            class="w-full h-32 p-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
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
            @click="sendMessage"
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
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PrimaryButton from "~/components/tools/PrimaryButton.vue";
import SecondaryButton from "~/components/tools/SecondaryButton.vue";
import { useToast } from '~/composables/useToast';


// Initialize toast composable
const { addToast } = useToast();

// Messages Data
const messages = ref();
const {data,status} = await useMyFetch(`tickets/${useRoute().params.id}`,{
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
})

// New Message
const newMessage = ref('');
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

// Send Message
const sendMessage = async() => {
  errors.value = {};

  if (!newMessage.value.trim()) {
    errors.value.message = 'Message is required.';
    return;
  }

  const {data,status,error} = await useMyFetch(`tickets/${useRoute().params.id}`,{
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    method:'POST',
    body:{
      message:newMessage.value,
      files: uploadedFiles.value
    }
  })
  if (status.value=='success'){
    // Clear inputs
    newMessage.value = '';
    uploadedFiles.value = [];
    router.push('/dashboard/support')
    addToast('Ticket replies successfully!','success',5000)
  }else{
    console.log(error.value)
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
