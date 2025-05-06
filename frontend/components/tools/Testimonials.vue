
<template>
  <div class="my-12">
    <div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full">
      <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative">
        <div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
      </div>
      <h2 class="sm:text-5xl text-2xl font-normal font-['Impact']">
        Our valuable success clients story
      </h2>
      <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative">
        <div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
      </div>
    </div>
    <div class="w-full p-4 overflow-hidden">
      <client-only>
        <Swiper
            :slides-per-view="1"
            :space-between="16"
            :breakpoints="{
        640: { slidesPerView: 2.1, spaceBetween: 20 },
        1024: { slidesPerView: 2.5, spaceBetween: 24 },
        1280: { slidesPerView: 3.1, spaceBetween: 24 }
      }"
            :pagination="{ clickable: true }"
            :navigation="true"
            :autoplay="true"
            class="w-full"
        >
          <SwiperSlide v-for="(item, index) in testimonials" :key="index">
            <div
                class="w-full max-w-md h-auto px-5 py-4 hover:border-teal-400 hover:shadow-teal-400 hover:shadow-lg my-5 mx-2 bg-white/5 rounded-3xl border border-white/40 flex flex-col justify-start items-start gap-2"
            >
              <!-- نام شرکت -->
              <div class="w-full text-white text-3xl font-normal font-['Impact']">
                {{ item.company }}
              </div>

              <!-- امتیاز (ستاره‌ها) -->
              <div class="flex items-center gap-1">
            <span v-for="n in 5" :key="n" class="text-yellow-500">
              <svg
                  class="w-5 h-5"
                  :class="{ 'opacity-40': n > Math.round(item.rating) }"
                  fill="currentColor"
                  viewBox="0 0 20 20"
              >
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.448a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.367-2.448a1 1 0 00-1.175 0l-3.367 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.81 9.397c-.784-.57-.382-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.97z"
                />
              </svg>
            </span>
              </div>

              <!-- امتیاز متنی -->
              <div class="text-light-shade text-sm font-bold font-['Shabnam']">
                {{ item.rating }} from 5
              </div>

              <!-- نظر -->
              <div class="w-full text-white text-base font-normal font-['Shabnam']">
                {{ item.message }}
              </div>

              <!-- نام شخص -->
              <div class="w-full text-light-shade text-2xl font-normal font-['Impact']">
                {{ item.name }}
              </div>

              <!-- عنوان شغلی -->
              <div class="w-full text-light-shade text-base font-normal font-['Shabnam']">
                {{ item.title }}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </client-only>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

import {useMyFetch} from "~/composables/apiFetch";

const {data:testimonials} = await useMyFetch('testimonials')

</script>

<style scoped>
/* استایل‌های Tailwind برای رنگ‌های سفارشی */
.text-light-shade {
  color: #d1d5db; /* جایگزین با رنگ دلخواه */
}

.bg-light-shade {
  background-color: #d1d5db; /* جایگزین با رنگ دلخواه */
}

/* استایل‌های Swiper */
:deep(.swiper-pagination-bullet) {
  background: #ffffff;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  background: #ffffff;
  opacity: 1;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #ffffff;
}
</style>