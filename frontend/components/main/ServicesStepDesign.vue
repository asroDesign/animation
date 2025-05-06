<template>
  <div class="w-60 h-72 relative justify-self-end">
    <!-- مراحل -->
    <nuxt-link
        v-for="(step, index) in data"
        :key="index"
        :to="`/${step?.slug}-service`"
        class="absolute text-right text-3xl font-normal font-['Impact'] transition-colors duration-300"
        :class="[
        activeStep === index ? 'text-red-500' : 'text-white',
        index === 1 ? 'text-primary' : '',
        getStepPosition(index)
      ]"
    >
      {{ step.name }}
    </nuxt-link>

    <!-- نقاط (Dots) -->
    <div
        v-for="(dot, index) in dots"
        :key="'dot-' + index"
        class="size-2.5 absolute bg-light-shade rounded-full"
        :class="getDotPosition(index)"
    ></div>

    <!-- خطوط (Lines) -->
    <div
        v-for="(line, index) in lines"
        :key="'line-' + index"
        class="w-14 h-0 absolute origin-top-left rotate-90 outline outline-[0.75px] outline-offset-[-0.38px] outline-light-shade"
        :class="getLinePosition(index)"
    ></div>

    <!-- نقطه فعال -->
    <div
        class="size-4 absolute bg-primary rounded-full transition-all duration-300"
        :class="getActiveDotPosition(activeStep)"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props =defineProps({
  data:Object
})

// تعریف نقاط و خطوط
const dots = ref(Object.keys(props?.data||{})); // نقاط برای مراحل 1، 3، 4، 5
const lines = ref(Object.keys(props?.data||{})); // خطوط بین نقاط

// مرحله فعال
const activeStep = ref(1); // به طور پیش‌فرض مرحله دوم فعال است (3D Animation)

// موقعیت مراحل
const getStepPosition = (index) => {
  const positions = [
    'left-[41px] top-0',
    'left-[40px] top-[64px]',
    'left-0 top-[128px]',
    'left-[60px] top-[192px]',
    'left-[13px] top-[256px]',
  ];
  return positions[index];
};

// موقعیت نقاط
const getDotPosition = (index) => {
  const positions = [
    'left-[227px] top-[14px]',
    'left-[227px] top-[142px]',
    'left-[227px] top-[206px]',
    'left-[227px] top-[269px]',
  ];
  return positions[index];
};

// موقعیت خطوط
const getLinePosition = (index) => {
  const positions = [
    'left-[232px] top-[25px]',
    'left-[232px] top-[89px]',
    'left-[232px] top-[153px]',
    'left-[232px] top-[217px]',
  ];
  return positions[index];
};

// موقعیت نقطه فعال
const getActiveDotPosition = (activeStep) => {
  const positions = [
    'left-[224px] top-[12px]', // 2D Animation
    'left-[224px] top-[76px]', // 3D Animation
    'left-[224px] top-[140px]', // Motion Graphics
    'left-[224px] top-[204px]', // Whiteboard
    'left-[224px] top-[267px]', // Logo Animation
  ];
  return positions[activeStep];
};

// تابع برای تغییر مرحله (برای تست یا استفاده در اپلیکیشن)
const setActiveStep = (index) => {
  activeStep.value = index;
};
</script>

<style scoped>
/* Tailwind باید از قبل در پروژه تنظیم شده باشد */
.text-primary {
  color: #your-primary-color; /* رنگ اصلی را جایگزین کنید */
}

.bg-light-shade {
  background-color: #your-light-shade-color; /* رنگ روشن را جایگزین کنید */
}

.bg-primary {
  background-color: #your-primary-color; /* رنگ اصلی را جایگزین کنید */
}

.outline-light-shade {
  outline-color: #your-light-shade-color; /* رنگ روشن را جایگزین کنید */
}
</style>
