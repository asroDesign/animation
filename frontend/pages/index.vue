<script setup lang="ts">

import LiveChat from "~/components/LiveChat.vue";
import SecondaryButton from "~/components/tools/SecondaryButton.vue";
import ServicesStepDesign from "~/components/main/ServicesStepDesign.vue";
import {useMyFetch} from "~/composables/apiFetch";
import VideoPlayer from "~/components/tools/VideoPlayer.vue";

const service_active = ref(0)
const configs = computed(()=>useState('config')?.value)
const { data,status} = await useMyFetch('/')
const response = computed(()=>data?.value)
useState('animation_category').value = response?.animation_category
useState('featured_category').value = response?.featured_category
useSeoMeta({
  title: configs.value?.site_title,
  ogTitle: configs.value?.meta_title,
  description: configs.value?.site_meta_desc,
  ogDescription: configs.value?.site_meta_desc,
  keywords:configs.value?.site_meta_keywords,
  ogType:'article',
  ogLocale:configs.value?.current_lang,
  ogUrl:useRoute().fullPath,
  ogImage:`${useRuntimeConfig().public.baseURL}/${configs.value?.my_logo}`
})


</script>

<template>
  <div>
    <nuxt-img src="/system/main_mask.png" class="w-full relative hover:scale-105 transition transform duration-700"  />
    <div class="sm:absolute grid grid-cols-2 gap-3 container mx-auto sm:px-0 px-2" style="align-self: anchor-center;justify-self: anchor-center;">
      <div class="grid text-start sm:col-span-1 col-span-2">
        <div class="flex items-center text-xs justify-start">
          <div class="bg-secondary-shade h-1 w-9 mx-1"></div>
          Welcome to Animation Studio
        </div>
        <h2 class="sm:text-4xl font-bold text-xl leading-8 my-6">
          REDEFINING ANIMATION IN
          <br>
          THE DIGITAL AGE
        </h2>

        <p>
          Through captivating animated content and cutting-edge technologies,
          <br>
          showcase what sets your brand apart, bring your story to life, and foster
          <br>
          lasting connections. Embrace the dynamic potential of animation to
          <br>
          elevate your brand and drive growth.
        </p>
        <div class="flex items-center justify-start mx-auto my-4 space-x-2">
          <live-chat/>
          <LazyRequestQuote />
        </div>
      </div>
      <div class="sm:col-span-1 col-span-2">
        <ServicesStepDesign :data="response?.animation_category" />
      </div>
    </div>
  </div>
  <div class="container mx-auto px-2">
    <div class="lg:-mt-[16rem] mt-[2rem] px-3 z-50 relative">
      <div class="flex items-center text-xs text-start justify-items-start">
        <div class="bg-secondary-shade h-1 w-9 mx-1"></div>
        Why choose
      </div>
      <div class="my-6 font-[Impact]">
        <h2 class="sm:text-4xl text-xl font-bold ">
          Animation Studios  
          <br>
          for Animation?
        </h2>
      </div>
      <div>
        <div
            v-for="(item, key) in response?.why_choose_us"
            :key="key"
            class="collapse collapse-plus text-white"
        >
          <input
              type="radio"
              name="my-accordion-3"
              class="peer"
              :checked="key === 0"
          />
          <div
              class="collapse-title font-['Impact'] sm:text-3xl text-gray-400 peer-checked:text-secondary-shade"
          >
            {{ item.heading }}
          </div>
          <div class="collapse-content text-sm">
            {{ item.sub_heading }}
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="container mx-auto grid gap-9 px-2">

    <div class="text-center grid gap-9 w-full my-9">
      <div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full">
        <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[400px] h-1 bg-gray-300 rounded relative">
          <div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
        </div>
        <h2 class="title text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-normal font-['Impact'] text-center font-display whitespace-nowrap">
          OUR ANIMATION TOOLKIT
        </h2>
        <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[400px] h-1 bg-gray-300 rounded relative">
          <div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
        </div>
      </div>
      <LazyMainAnimationToolkit :items="response?.start_section" />
    </div>

    <div class="text-center justify-center grid space-y-4">

      <div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full">
        <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[400px] h-1 bg-gray-300 rounded relative">
          <div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
        </div>
        <div class="grid gap-0.5">
          <small>Animation Services</small>
          <h2 class="sm:text-5xl text-xl font-normal font-['Impact']">
            Animation for the digital age
          </h2>
        </div>
        <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[400px] h-1 bg-gray-300 rounded relative">
          <div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
        </div>
      </div>
      <div class="w-[90vw] overflow-scroll flex space-x-2" >
        <div v-for="(service,key) in response?.animation_category"
             class="border border-secondary-shade rounded-full hover:bg-secondary-shade px-5 py-1 text-nowrap cursor-pointer"
             :class="{'bg-secondary-shade':service_active==key}" @click="service_active = key">
          {{service?.name}}
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
        <div class="relative z-10 sm:col-span-2 col-start-1 sm:col-start-2 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
          <h2 class="text-xl font-bold text-white sm:text-4xl sm:leading-7 md:text-3xl sm:text-start">{{response?.animation_category[service_active]?.name}}</h2>
        </div>
        <div class="col-start-1 sm:col-span-2 row-start-2 sm:col-start-2 px-4 sm:pb-16">
          <p class="text-start" v-html="response?.animation_category[service_active]?.short_desc">

          </p>
        </div>
        <div class="col-start-1 sm:col-span-2 sm:col-start-2 row-start-3 space-y-3 px-4 text-start my-4">
          <nuxt-link :to="`/${response?.animation_category[service_active]?.slug}-service`">
            <secondary-button class="!sm:w-fit">
              Learn More
              <nuxt-icon name="iconsax/linear/arrow-right" class="text-xl" />
            </secondary-button>
          </nuxt-link>
        </div>
        <div class="col-start-1 row-start-1 flex sm:row-span-3">
          <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
            <div class="relative col-span-3 row-span-2">
              <nuxt-img :src="`${useRuntimeConfig().public.fileURL}/${response?.animation_category[service_active].file}`" alt="" class="sm:absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="py-5 md:py-10 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-3 lg:gap-20 max-w-7xl mx-auto px-4">

      <div class="w-full md:w-1/2 max-w-[791px] relative">
        <div class="flex flex-col justify-start items-start gap-4">
          <h1 class=" text-4xl sm:text-5xl grid gap-1 md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            <span class="text-white line-1 anim-typewriter">There is no limit for </span>
            <span class="text-pink-700">creativity</span>
          </h1>
          <p class="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal font-['Impact']">
            We create brand and experience
          </p>
          <div class="w-16 md:w-24 h-1 bg-primary rounded-[3px] transform rotate-180" />
        </div>
      </div>
      <div class="w-full md:w-1/2 max-w-[806px] h-auto mix-blend-lighten object-contain">
        <VideoPlayer video_url="/system/vecteezy_energy_blue_glowing_cosmic_magic_sphere_futuristic_round.webm" />
      </div>

    </div>

    <div class="text-center justify-center grid space-y-4">

      <div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full">
        <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[600px] h-1 bg-gray-300 rounded relative">
          <div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
        </div>
        <h2 class="sm:text-5xl text-xl font-normal font-['Impact']">
          Portfolio
        </h2>
        <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[600px] h-1 bg-gray-300 rounded relative">
          <div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
        </div>
      </div>
      <Portfolio :services="response?.featured_category" />
    </div>


    <div class="text-center justify-center grid space-y-4 mt-9 justify-items-center">
      <div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full">
        <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[300px] h-1 bg-gray-300 rounded relative">
          <div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
        </div>
        <div class="grid gap-0">
          <small>Process</small>
          <h2 class="sm:text-5xl text-xl font-normal font-['Impact']">
            Matching Your Business Needs Effectively
          </h2>
          <span class="text-xs text-wrap">We’re determined to explore more than what may be just a quick fix for your business. Together, we can tailor our proven processes for continual growth.</span>
        </div>
        <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[300px] h-1 bg-gray-300 rounded relative">
          <div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
        </div>
      </div>
      <LazyMainProcessStep  :process_step="response?.process_step_section"/>
    </div>
  </div>
</template>

<style scoped>
.line-1{
  position: relative;
  top: 50%;
  width: 24em;
  margin: 0 auto;
  border-right: 2px solid rgba(255,255,255,.75);
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);
}

/* Animation */
.anim-typewriter{
  animation: typewriter 4s steps(44) 1s 1 normal both,
  blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 24em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}
</style>