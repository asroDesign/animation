<template>
  <ClientOnly>
    <SecondaryButton class="flex items-center gap-2" @click="openModal">
      Request a Quote
      <nuxt-icon name="iconsax/linear/arrow-right" class="text-xl" />
    </SecondaryButton>
    <Teleport to="body">
      <div
          v-if="isOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in"
          @click.self="closeModal"
          role="dialog"
          aria-modal="true"
          aria-label="Contact Form"
      >
        <div
            class="relative w-full max-w-[567px] h-auto max-h-[90vh] bg-background rounded-[42px] overflow-hidden p-6 sm:p-8 animate-slide-up"
        >
          <!-- Close Button -->
          <button
              class="absolute right-4 top-4 w-10 h-10 rounded-full bg-white/40 flex items-center justify-center"
              @click="closeModal"
              aria-label="Close modal"
          >
            <svg
                class="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Background Gradient -->
          <div
              class="absolute inset-0 bg-gradient-to-b from-pink-600/0 to-violet-700/30 rounded-full blur-[150px]"
          ></div>

          <!-- Content -->
          <div class="relative flex flex-col items-center gap-6">
            <!-- Logo -->
            <nuxt-img :src="`${useRuntimeConfig().public.fileURL}/${useState('config')?.value?.my_logo}`" class="w-[150px] h-auto" />

            <!-- Tagline -->
            <p
                class="text-white text-2xl sm:text-3xl font-normal font-['Impact']"
            >
              We are here to help!
            </p>

            <!-- Form -->
            <form
                class="w-full max-w-[507px] bg-background-shade-1 rounded-[32px] p-6 sm:p-7 flex flex-col gap-5"
                @submit.prevent="handleSubmit"
            >
              <div class="relative">
                <input
                    v-model="form.name"
                    type="text"
                    class="w-full h-12 bg-background-shade-1 rounded-2xl border border-stroke pl-4 pr-4 text-light-shade text-base font-normal font-['Shabnam'] placeholder-light-shade"
                    placeholder="Full Name *"
                    required
                />
              </div>
              <div class="relative">
                <input
                    v-model="form.email"
                    type="email"
                    class="w-full h-12 bg-background-shade-1 rounded-2xl border border-stroke pl-4 pr-4 text-light-shade text-base font-normal font-['Shabnam'] placeholder-light-shade"
                    placeholder="Email Address *"
                    required
                />
              </div>
              <div class="relative">
                <input
                    v-model="form.phone"
                    type="tel"
                    class="w-full h-12 bg-background-shade-1 rounded-2xl border border-stroke pl-4 pr-4 text-light-shade text-base font-normal font-['Shabnam'] placeholder-light-shade"
                    placeholder="Phone Number *"
                    required
                />
              </div>
              <div class="relative">
                <input
                    v-model="form.company"
                    type="text"
                    class="w-full h-12 bg-background-shade-1 rounded-2xl border border-stroke pl-4 pr-4 text-light-shade text-base font-normal font-['Shabnam'] placeholder-light-shade"
                    placeholder="Company"
                />
              </div>
              <div class="relative">
                <textarea
                    v-model="form.message"
                    class="w-full h-32 bg-background-shade-1 rounded-2xl border border-stroke p-4 text-light-shade text-base font-normal font-['Shabnam'] placeholder-light-shade"
                    placeholder="To help us understand better enter a brief description of your project."
                ></textarea>
              </div>
              <button
                  type="submit"
                  class="w-full h-12 bg-primary rounded-3xl shadow-[0px_0px_6px_0px_rgba(202,23,92,1)] border border-primary text-white text-base font-medium font-['Shabnam']"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup>
import { ref } from 'vue';
import { Teleport } from 'vue';
import SecondaryButton from "~/components/tools/SecondaryButton.vue"; // Explicitly import Teleport
import { useToast } from '~/composables/useToast';
// import {useAuthStore} from "~/stores/auth.js";

// const authStore = useAuthStore();

// Initialize toast composable
const { addToast } = useToast();
// Modal state (controlled via composable)
const { isOpen, closeModal,openModal } = useModal();

// Form state
const form = ref({
  name: '',//authStore.user?.full_name,
  email: '',//authStore.user?.email,
  phone: '',
  company: '',
  message: '',
});

// Form submission
const handleSubmit = async() => {
  const {data , status} = await useMyFetch('request-quote',{
    body:form.value,
    method:'POST'
  })
  if (status.value=='success'){
    addToast(data.value.msg,'success',5000)
    form.value = {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    };
    // Close modal
    closeModal();
  }
};
</script>

<style scoped>
/* Tailwind custom animations defined in tailwind.config.js */
</style>
