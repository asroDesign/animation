<template>
  <div :key="$route.fullPath" class=" bg-gradient-to-r from-[#020617] via-[#1A0A37] to-[#14082A] min-h-screen">
    <NuxtLayout>
      <Toast />
      <NuxtPage />

    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">
import Toast from '~/components/tools/Toast.vue';
const websiteConfig = useState('config')

await callOnce(async () => {
    $fetch('get-configs',{
    baseURL:'http://pixelstudio.asrodev.ir/api'
  }).then(res=>{
      websiteConfig.value = res
    }).catch((err)=>{
      console.log(err)
    })
}, { mode: 'navigation' })
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ],
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} %separator %siteName` : '%siteName';
    },
    templateParams: {
        siteName: websiteConfig.value?.site_name,
        separator: '-'
    }
})
</script>
<style>
body{
  color: white;
}
.animate-fade-slide {
  animation-delay: calc(var(--index) * 0.1s);
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade-slide {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>