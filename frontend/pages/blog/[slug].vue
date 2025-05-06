<script setup lang="ts">

import LiveChat from "~/components/LiveChat.vue";
import SecondaryButton from "~/components/tools/SecondaryButton.vue";

const {data,status} = await useMyFetch(`blog/${useRoute().params.slug}`)
const response  = computed(()=>data.value)
</script>

<template>
  <div class="relative">
    <nuxt-img
        src="/system/single_blog.png"
        class="w-full object-cover"
        sizes="sm:100vw md:100vw lg:100vw"
        loading="lazy"
    />
    <div class="absolute inset-0 flex items-center justify-center sm:top-0 top-[16rem]">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto text-start">
          <div class="flex items-center justify-start  mb-4">
            <div class="bg-secondary-shade h-1 w-9 mx-1"></div>
            <span class="text-sm uppercase">Blog</span>
          </div>

          <h2 class="self-stretch justify-start text-White text-7xl font-normal font-['Impact'] sm:max-w-2xl">
            {{ response?.heading }}
          </h2>
          <div class="my-4">
            {{new Date(response.created_at).toDateString()}}
          </div>
          <div class="flex flex-col sm:flex-row items-center justify-start gap-4">
            <live-chat />
            <LazyRequestQuote />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto" v-html="response?.description">

  </div>
</template>

<style scoped>

</style>