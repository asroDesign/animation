<script setup lang="ts">
import { useMyFetch } from "~/composables/apiFetch";

const props = defineProps<{
  services: Array<{ id: string | number; name: string }>;
  service_id:String
}>();

const is_service_id = computed(()=>props.service_id)
const portfolio_selected = ref<string | number | undefined>(undefined);
const portfolios = ref<any[]>([]); // برای ذخیره داده‌های دریافتی

// تابع برای بارگذاری داده‌ها
const fetchPortfolio = async (serviceId: string | number | undefined) => {
  if (!serviceId) return; // اگر مقدار نامعتبر بود، درخواست ارسال نشود
  const { data, status } = await useMyFetch(`/portfolio/${serviceId}`, {
    immediate: true,
  });
  if (status.value === "success") {
    portfolios.value = data.value;
  }
};

// نظارت بر تغییرات portfolio_selected
watch(portfolio_selected, (newValue) => {
  fetchPortfolio(newValue);
});

// تنظیم مقدار اولیه (اختیاری: می‌توانید اولین سرویس را به‌صورت پیش‌فرض انتخاب کنید)

onMounted(() => {
  if (props.services?.length > 0) {
    portfolio_selected.value = props.services[0].id;
  }

  if (is_service_id.value){
    portfolio_selected.value = props.service_id
  }
});

const portfolio_changed = (service_id: string | number) => {

  portfolio_selected.value = service_id;
};
</script>

<template>
  <div role="tablist" class="tabs tabs-border group">
    <a
        role="tab"
        v-for="service in services"
        @click="portfolio_changed(service.id)"
        :class="{
        'tab-active !text-secondary-shade': portfolio_selected === service.id,
      }"
        class="tab group-has-[a]:text-white"
    >
      {{ service?.name }}
    </a>
  </div>
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 sm:grid-rows-2 grid-cols-1 gap-3">
    <div v-for="item in portfolios" class="rounded-xl overflow-auto group relative">
      <nuxt-link
          :to="`/portfolio/${item.slug}`"
          class="items-center absolute h-full w-full bg-gray-400 transform transition duration-700 ease-in-out hidden backdrop-blur-xl bg-opacity-5 group-hover:flex justify-center"
      >
        <nuxt-icon
            name="iconsax/bulk/search-zoom-in"
            class="text-3xl flex items-center group-hover:text-white"
        />
      </nuxt-link>
      <nuxt-img :src="item?.image_url || '/system/main_mask.png'" class="w-full" />
    </div>
  </div>
</template>

<style scoped>
</style>