<script setup lang="ts">

import Testimonials from "~/components/tools/Testimonials.vue";

const QuickLinks = [
  {title:'Home',link:'/'},
  {title:'About Us',link:'/about-us'},
  {title:'Our Services',link:'/our-service'},
  {title:'Our Work',link:'/our-work'},
  {title:'Process',link:'/process'},
  {title:'Blogs',link:'/blog'},
  {title:'Contact Us',link:'/contact-us'},
]
const Services = [
  {title:'Animation',link:'#'},
  {title:'Website Design',link:'#'},
  {title:'Logo Design',link:'#'},
  {title:'Mobile App',link:'#'},
  {title:'Digital Marketing',link:'#'},
]

const Animations = [
  {title:'2D Animation',link:'#'},
  {title:'3D Animation',link:'#'},
  {title:'Motion Graphics',link:'#'},
  {title:'Logo Animation',link:'#'},
  {title:'Video Editing',link:'#'},
  {title:'Whiteboard Animation',link:'#'},

]


const footerConfig = useState('footer')

if (!footerConfig?.value){
  useMyFetch('footer',{
    lazy:true
  }).then(res=>{
    footerConfig.value = res.data
  }).catch((err)=>{
    console.log(err)
  })
}
await callOnce(async () => {

},{mode:'render'})
</script>

<template>

  <div class="container mx-auto mt-16 px-3">
    <testimonials />
    <div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full">
      <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[600px] h-1 bg-gray-300 rounded relative">
        <div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
      </div>
      <h2 class="sm:text-5xl text-2xl my-6 font-normal font-['Impact']">
        Let’s Connect
      </h2>
      <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[600px] h-1 bg-gray-300 rounded relative">
        <div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
      </div>
    </div>
    <div class="text-center flex items-center justify-center space-x-3">
      <a :href="footerConfig?.settings?.youtube_url" rel="nofollow">
        <nuxt-icon name="iconsax/bulk/youtube" class="text-5xl" />
      </a>
      <a :href="footerConfig?.settings?.twitter_url" rel="nofollow">
        <nuxt-icon name="iconsax/bulk/twitter" class="text-5xl" />
      </a>
      <a :href="footerConfig?.settings?.facebook_url" rel="nofollow">
        <nuxt-icon name="iconsax/bulk/facebook" class="text-5xl" />
      </a>
      <a :href="footerConfig?.settings?.instagram_url" rel="nofollow">
        <nuxt-icon name="iconsax/bulk/instagram" class="text-5xl" />
      </a>
    </div>
    <div class="sm:grid-cols-9 grid-cols-4 grid gap-4">
      <div class="col-span-2">
        <div class="sm:text-2xl text-xl font-bold my-3 ">Quick Links</div>
        <ul class="space-y-3 grid">
          <li v-for="link in QuickLinks">
            <nuxt-link :to="link.link">
              {{link.title}}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-span-2">
        <div class="sm:text-2xl text-xl font-bold my-3 ">Services</div>
        <ul class="space-y-3 grid">
          <li v-for="link in footerConfig?.featured_category">
            <nuxt-link :to="`/${link.slug}-service`">
              {{link.name}}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-span-2">
        <div class="sm:text-2xl text-xl font-bold my-3 ">Animations</div>
        <ul class="space-y-3 grid">
          <li v-for="link in footerConfig?.animation_category">
            <nuxt-link :to="`/${link.slug}-service`">
              {{link.name}}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-span-3">
        <div class="sm:text-2xl text-xl font-bold my-3 ">Contact Info</div>
        <ul class="space-y-3 grid">
          <li class="flex items-center space-x-2">
            <nuxt-icon name="iconsax/bulk/call-calling" class="text-xl animate-ping duration-700 mr-2" />
            {{footerConfig?.settings?.company_phone}}
          </li>
          <li class="flex items-center space-x-2">
            <nuxt-icon name="iconsax/bulk/location" class="text-xl animate-bounce mr-2" />
            {{footerConfig?.settings?.company_adderss}}
          </li>
          <li class="flex items-center space-x-2">
            <nuxt-icon name="iconsax/bulk/messages" class="text-xl animate-ping duration-700 mr-2" />
            {{footerConfig?.settings?.company_phone }}
          </li>
          <li class="flex items-center space-x-2">
            <nuxt-icon name="iconsax/bulk/sms" class="text-xl mr-2" />
            {{footerConfig?.settings?.company_email}}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="text-white bg-[#020617] text-center py-4 ">
    All Rights Reserved - Animation studios inc.
  </div>
</template>

<style>
a:hover{
  color: #9F1239;
}
</style>