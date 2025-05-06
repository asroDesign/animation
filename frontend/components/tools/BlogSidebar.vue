<template>
  <div class="form max-w-lg mx-auto p-4 sm:p-6">
    <div class="flex flex-col gap-6 pl-4 sm:pl-6 border-l border-[var(--variable-collection-stroke)]">
      <div class="relative flex items-center h-12">
        <input
            v-model.trim="searchQuery"
            type="text"
            placeholder="Search ..."
            class="w-full h-full px-4 bg-[var(--variable-collection-background-shade-1)] border border-[var(--variable-collection-stroke)] rounded-2xl text-[var(--variable-collection-light-shade)] placeholder:opacity-70 focus:outline-none"
            @keyup.enter="handleSearch"
        />
        <SearchNormal
            class="absolute right-4 w-6 h-6 cursor-pointer"
            @click="handleSearch"
        />
      </div>

      <p v-if="isLoading" class="text-white text-sm">Searching...</p>
      <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>

      <h2 class="text-white font-[var(--title-font-family)] text-lg sm:text-xl">
        Follow us
      </h2>
      <div class="flex justify-center gap-3 sm:gap-4 flex-wrap">
        <a
            v-for="{ name, href } in socialLinks"
            :key="name"
            :href="href"
            class="text-3xl sm:text-4xl lg:text-5xl"
        >
          <nuxt-icon :name="`iconsax/bulk/${name}`" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Define SearchNormal as a component
const SearchNormal = {
  emits: ["click"],
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="$emit('click')">
      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 21L16.65 16.65" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
};

// State
const searchQuery = ref("");
const isLoading = ref(false);
const error = ref(null);

const footerConfig = computed(()=>useState('footer').value)
// Social media links
const socialLinks = [
  { name: "youtube", href: footerConfig?.settings?.youtube_url },
  { name: "whatsapp", href: footerConfig?.settings?.twitter_url },
  { name: "facebook", href:footerConfig?.settings?.facebook_url },
  { name: "instagram", href: footerConfig?.settings?.instagram_url },
];
const emit = defineEmits(['search'])
// Search handler
const handleSearch = async () => {
  // if (!searchQuery.value) return;

  isLoading.value = true;
  error.value = null;

  emit('search',searchQuery.value)
};
</script>

<style scoped>
/* No additional styles needed as input styles are now inline */
</style>