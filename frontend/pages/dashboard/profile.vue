
<template>
  <div class="max-w-4xl mx-auto rounded-3xl flex flex-col gap-7">
    <div  class="flex flex-col items-center gap-7 w-full">
      <!-- Profile Photo -->
      <div class="flex flex-col items-center gap-3.5">
        <img
            :src="formData.avatar || 'https://placehold.co/200x200'"
            alt="Profile Photo"
            class="w-48 h-48 rounded-full object-cover"
        />
        <label class="relative w-56 h-12">
          <input
              type="file"
              accept="image/*"
              class="hidden"
              @change="handlePhotoUpload"
          />
          <span class="absolute inset-0 flex items-center justify-center bg-transparent rounded-3xl border border-primary shadow-[0_0_6px_rgba(202,23,92,1)] text-white text-base font-medium font-['Shabnam'] cursor-pointer hover:bg-primary/10 transition-colors">
            Upload Photo
          </span>
        </label>
      </div>

      <!-- Personal Information -->
      <div class="w-full">
        <h2 class="text-white sm:text-2xl text-xl font-normal font-['Impact'] mb-4 text-center sm:text-left">
          Personal Information
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="relative">
            <input
                v-model="formData.full_name"
                type="text"
                placeholder="Full Name"
                class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                :class="{ 'border-red-500': errors?.full_name }"
            />
            <p v-if="errors.full_name" class="text-red-500 text-sm mt-1">{{ errors.full_name }}</p>
          </div>
          <div class="relative">
            <input
                v-model="formData.email"
                type="email"
                placeholder="Email"
                class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                :class="{ 'border-red-500': errors?.email }"
            />
            <p v-if="errors?.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
          </div>
          <div class="relative">
            <input
                v-model="formData.mobile"
                type="tel"
                placeholder="Phone Number"
                class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                :class="{ 'border-red-500': errors?.mobile }"
            />
            <p v-if="errors?.mobile" class="text-red-500 text-sm mt-1">{{ errors.mobile }}</p>
          </div>
          <div class="relative">
            <input
                v-model="formData.secondaryEmail"
                type="email"
                placeholder="Secondary Email"
                class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                :class="{ 'border-red-500': errors?.secondaryEmail }"
            />
            <p v-if="errors?.secondaryEmail" class="text-red-500 text-sm mt-1">{{ errors.secondaryEmail }}</p>
          </div>
        </div>
        <div class="my-3">
          <primary-button
              @click="handleSubmit"
              type="submit"
              class="relative w-56 h-12 flex items-center justify-center bg-primary rounded-3xl shadow-[0_0_6px_rgba(202,23,92,1)] border border-primary text-white text-base font-medium font-['Shabnam'] hover:bg-primary/90 transition-colors"
          >
          <span class="flex items-center gap-2">
            Save Changes
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M5 13L9 17L19 7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          </primary-button>
        </div>
      </div>

      <!-- Password -->
      <div class="w-full">
        <h2 class="text-white text-2xl font-normal font-['Impact'] mb-4 text-center sm:text-left">
          Password
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="relative">
            <input
                v-model="passwordForm.old_password"
                type="password"
                placeholder="Current Password"
                class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                :class="{ 'border-red-500': errors?.old_password }"
            />
            <p v-if="errors?.old_password" class="text-red-500 text-sm mt-1">{{ errors.old_password }}</p>
          </div>
          <div class="hidden sm:block"></div>
          <div class="relative">
            <input
                v-model="passwordForm.newPassword"
                type="password"
                placeholder="New Password"
                class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                :class="{ 'border-red-500': errors?.newPassword }"
            />
            <p v-if="errors?.newPassword" class="text-red-500 text-sm mt-1">{{ errors.newPassword }}</p>
          </div>
          <div class="relative">
            <input
                v-model="passwordForm.confirmPassword"
                type="password"
                placeholder="Confirm Password"
                class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                :class="{ 'border-red-500': errors?.confirmPassword }"
            />
            <p v-if="errors?.confirmPassword" class="text-red-500 text-sm mt-1">{{ errors.confirmPassword }}</p>
          </div>
        </div>
      </div>

      <!-- Buttons -->
      <div class="sm:flex grid lg:justify-start gap-4 w-full justify-center sm:justify-end">
        <div class="row-start-2">
          <nuxt-link
              to="/dashboard"
              class="relative w-52 h-12 flex items-center justify-center bg-transparent rounded-3xl border border-primary shadow-[0_0_6px_rgba(202,23,92,1)] text-white text-base font-medium font-['Shabnam'] hover:bg-primary/10 transition-colors"
          >
          <span class="flex items-center gap-2">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M9 15L3 9L9 3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3 9H21" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Back to Dashboard
          </span>
          </nuxt-link>
        </div>
        <div class="row-start-1">
          <button @click="change_passwordHandle"
              type="submit"
              class="relative w-56 h-12 flex items-center justify-center bg-primary rounded-3xl shadow-[0_0_6px_rgba(202,23,92,1)] border border-primary text-white text-base font-medium font-['Shabnam'] hover:bg-primary/90 transition-colors"
          >
          <span class="flex items-center gap-2">
            Save Changes
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M5 13L9 17L19 7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {useMyFetch} from "~/composables/apiFetch.js";

import SecondaryButton from "~/components/tools/SecondaryButton.vue";
import PrimaryButton from "~/components/tools/PrimaryButton.vue";
import { useToast } from '~/composables/useToast';
// Initialize toast composable
const { addToast } = useToast();

// Form Data
const formData = reactive({
  avatar: '',
  full_name: '',
  email: '',
  mobile: '',
  secondaryEmail: '',

});

const passwordForm = reactive({
  old_password: '',
  newPassword: '',
  confirmPassword: '',
})
const {data:user} = await useMyFetch('user',{
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
})
if (user){
  Object.assign(formData,user.value)
}
// Form Errors
const errors = ref({});

const router = useRouter();

// Handle Photo Upload
const handlePhotoUpload = async(event) => {
  const file = event.target.files[0];
  if (file) {
    if (!file.type.startsWith('image/')) {
      errors.value.photo = 'Please upload an image file.';
      return;
    }

    const reader = new FileReader();
    reader.onload = async(e) => {
      // formData.value.photo = ;
      const form = new FormData()
      form.append('image',file)
      const {status,error} = await useMyFetch('update_user_image',{
        body:form,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        method:'POST'
      })
      if (status.value != 'success'){
        errors.value.photo = error.value;
      }else{
        errors.value.photo = '';
      }
    };
    reader.readAsDataURL(file);
  }
};

// Form Validation
const validateForm = () => {
  errors.value = {};

  if (!formData.full_name.trim()) {
    errors.value.fullName = 'Full Name is required.';
  }
  if (!formData.email.trim()) {
    errors.value.email = 'Email is required.';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.value.email = 'Invalid email format.';
  }
  if (formData.mobile && !/^\+?\d{10,15}$/.test(formData.mobile)) {
    errors.value.mobile = 'Invalid phone number.';
  }
  if (formData.secondaryEmail && !/\S+@\S+\.\S+/.test(formData.secondaryEmail)) {
    errors.value.secondaryEmail = 'Invalid secondary email format.';
  }


  return Object.keys(errors.value).length === 0;
};

// Handle Form Submission
const handleSubmit = async () => {
  if (!validateForm()) return;

  try {
    // Simulate API call
    console.log('Form Data:', formData);
    // Example: await api.updateUser(formData.value);
    const {status,error} = await useMyFetch('update_profile',{
      body:formData,
      method:'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    if (status.value=='success'){
      addToast('Changes saved successfully!','success',5000)
    }else{
      errors.value = error.value.data?.errors
    }

  } catch (error) {
    errors.value.general = 'Failed to save changes. Please try again.';
    console.error(error);
  }
};

const validatePasswordForm = () => {
  errors.value = {};
  if (passwordForm.old_password && !passwordForm.old_password) {
    errors.value.old_password = 'New Password is required.';
  }
  if (passwordForm.newPassword && passwordForm.newPassword.length < 8) {
    errors.value.newPassword = 'New Password must be at least 8 characters.';
  }
  if (passwordForm.newPassword !== passwordForm.confirmPassword) {
    errors.value.confirmPassword = 'Passwords do not match.';
  }
  return Object.keys(errors.value).length === 0;
}
const change_passwordHandle = async()=>{
  if (!validatePasswordForm()) return;
  try {
    // Simulate API call
    console.log('Form Data:', passwordForm);
    // Example: await api.updateUser(formData.value);
    const {status,error} = await useMyFetch('change_password',{
      body:passwordForm,
      method:'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    if (status.value=='success'){
      addToast('Changes saved successfully!','success',5000)
    }else{
      errors.value = error.value.data?.errors || {newPassword:error.value.data.msg}
    }

  } catch (error) {
    errors.value.general = 'Failed to save changes. Please try again.';
    console.error(error);
  }
}
definePageMeta({
  layout:'dashboard',
  middleware:'auth'
})
</script>

<style scoped>
/* Tailwind handles all styling */
</style>
