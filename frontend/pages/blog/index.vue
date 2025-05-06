<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import LiveChat from '~/components/LiveChat.vue';
import SecondaryButton from '~/components/tools/SecondaryButton.vue';

// مقدار اولیه برای جستجو
const q = ref<string>('');

// فراخوانی API با useMyFetch
const { data, status, execute } = await useMyFetch('blogs', {
  query: { search: q },
  immediate: true, // اجرای خودکار در بارگذاری اولیه
});

// مدیریت پاسخ API
const blogs = computed(() => data.value?.data || []);

// تابع جستجو با debounce
const handleSearch = (searchTerm: string) => {
  q.value = searchTerm;
};

// واکنش به تغییرات q برای اجرای خودکار جستجو
watch(q, () => {
  execute();
});
</script>

<template>
  <div class="relative">
    <nuxt-img
        src="/system/blog_mask.png"
        class="w-full object-cover"
        sizes="sm:100vw md:100vw lg:100vw"
        format="webp"
        quality="80"
        loading="lazy"
        alt="Blog banner"
    />
    <div
        class="absolute inset-0 flex items-center justify-center top-[16rem] sm:top-0"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto text-start sm:text-center">
          <div
              class="flex items-center justify-start sm:justify-center mb-4 gap-2"
          >
            <div class="bg-secondary-shade h-1 w-9"></div>
            <span class="text-sm uppercase">What You Need to Know</span>
          </div>
          <h2
              class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight"
          >
            Get an Expert Team<br />for Video Animation
          </h2>
          <div
              class="flex flex-col sm:flex-row items-center justify-start sm:justify-center gap-4"
          >
            <LiveChat />
            <LazyRequestQuote />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="col-span-1 lg:col-span-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <nuxt-link
              v-for="blog in blogs"
              :key="blog.slug"
              :to="`/blog/${blog.slug}`"
              class="block p-4 sm:p-5 bg-white/5 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 rounded-3xl outline outline-1 outline-white/40"
          >
            <nuxt-img
                :src="blog.image || 'https://placehold.co/478x358'"
                class="w-full h-64 sm:h-80 object-cover rounded-3xl"
                format="webp"
                quality="80"
                loading="lazy"
                :alt="blog.heading"
            />
            <div class="mt-4">
              <h3
                  class="text-xl sm:text-2xl font-bold font-['Impact'] text-white"
              >
                {{ blog.heading }}
                </h3>
                <p class="text-sm sm:text-base text-white font-['Shabnam'] mt-2">
                  {{ blog.sub_heading }}
                </p>
                <p class="text-sm text-light-shade font-['Shabnam'] mt-4">
                  {{ new Date(blog.created_at).toLocaleDateString() }}
                </p>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="col-span-1">
        <ToolsBlogSidebar @search="handleSearch" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 1.5rem;
}

@media (max-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
}

.rounded-3xl {
  border-radius: 1.5rem;
}

.outline {
  outline: 1px solid rgba(255, 255, 255, 0.4);
}
</style>