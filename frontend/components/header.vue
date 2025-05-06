<script setup lang="ts">

import RequestQuote from "~/components/RequestQuote.vue";

const config = computed(()=>useState('config').value)
</script>

<template>
  <div class="flex py-5 mx-auto container justify-between absolute top-0 right-0 text-nowrap left-0 w-full z-50 px-3 sm:px-0">
    <nuxt-link to="/">
      <nuxt-img :src="`${useRuntimeConfig().public.fileURL}/${config?.my_logo}`" class="w-[150px] h-auto" />
    </nuxt-link>
    <div class="text-white flex items-center space-x-2">
      <a class="hidden space-x-1 sm:flex" :href="`tel:`+ (config?.company_phone)">
        <nuxt-icon name="iconsax/linear/call-calling" class="text-xl mx-2 text-main" />
        {{config?.company_phone}}
      </a>
      <RequestQuote />
      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <!-- Page content here -->
          <label for="my-drawer" class="drawer-button">
            <nuxt-icon name="iconsax/linear/menu" class="text-2xl"/>
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay">My Services</label>
          <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <!-- Sidebar content here -->
            <li v-for="service in useState('footer').value?.featured_category">
              <nuxt-link :to="`/${service.slug}-service`">{{ service.name }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>