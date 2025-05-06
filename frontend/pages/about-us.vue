<script setup lang="ts">
import { computed } from 'vue';
import PrimaryButton from '~/components/tools/PrimaryButton.vue';
import SecondaryButton from '~/components/tools/SecondaryButton.vue';
import LiveChat from '~/components/LiveChat.vue';
import { useMyFetch } from '~/composables/apiFetch';

// Define interface for API response
interface AboutUsData {
  heading?: string;
  sub_heading?: string;
  meta_title?: string;
  meta_desc?: string;
}

// Fetch data from API
const { data, status, error } = await useMyFetch<AboutUsData>('aboutus');

// Computed property for response to ensure reactivity
const response = computed(() => data?.value || {});

// Set SEO meta tags safely
useSeoMeta({
  title: () => response.value?.heading || 'About Us',
  ogTitle: () => response.value?.meta_title || 'About Us',
  description: () => response.value?.meta_desc || '',
  ogDescription: () => response.value?.meta_desc || '',
  ogType: 'article',
  ogLocale: 'en',
  ogUrl: useRoute().fullPath,
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="relative">
      <NuxtImg
          src="/system/Hero-Image.png"
          class="w-full object-cover"
          sizes="sm:100vw md:100vw lg:100vw"
          loading="lazy"
          alt="About Us Hero Image"
      />
      <div class="absolute inset-0 flex items-center justify-center sm:top-0 top-[16rem]">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-6xl mx-auto text-start sm:text-center">
            <div class="flex items-center justify-start sm:justify-center mb-4">
              <div class="bg-secondary-shade h-1 w-9 mx-1"></div>
              <span class="text-sm uppercase">Know More</span>
            </div>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <p v-if="response.sub_heading" class="text-base sm:text-lg mb-8 max-w-4xl mx-auto">
              {{ response.sub_heading }}
            </p>
            <div v-if="status === 'pending'" class="text-center">Loading...</div>
            <div v-else-if="error" class="text-center text-red-500">Error: {{ error.message }}</div>
            <div v-else class="flex flex-col sm:flex-row items-center justify-start sm:justify-center gap-4">
              <LiveChat />
              <LazyRequestQuote />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Description Sections -->
    <div class="container mx-auto px-3">
      <!-- Section 1: How We Excel -->
      <div class="mt-[14rem] lg:-mt-[12rem] sm:mt-[2rem]">
        <div class="flex items-center text-xs text-start justify-items-start">
          <div class="bg-secondary-shade h-1 w-9 mx-1"></div>
          How We Excel To
        </div>
        <div class="my-6">
          <h2 class="sm:text-4xl text-2xl font-bold">
            Keep Up with<br>the Revolution
          </h2>
        </div>
        <div>
          <div class="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div class="collapse-title font-semibold">How do I create an account?</div>
            <div class="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the registration process.
            </div>
          </div>
          <div class="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div class="collapse-title font-semibold">I forgot my password. What should I do?</div>
            <div class="collapse-content text-sm">
              Click on "Forgot Password" on the login page and follow the instructions sent to your email.
            </div>
          </div>
          <div class="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div class="collapse-title font-semibold">How do I update my profile information?</div>
            <div class="collapse-content text-sm">
              Go to "My Account" settings and select "Edit Profile" to make changes.
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2: Our Promises -->
      <div class="text-center justify-center grid space-y-4">
        <div class="contact-title flex items-center justify-center gap-2 sm:gap-4 sm:w-[100vw] w-full">
          <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative">
            <div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
          </div>
          <h2 class="sm:text-4xl text-xl !leading-8">Our Promises</h2>
          <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative">
            <div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
          </div>
        </div>
        <p>
          As a digital agency, we provide customized services to our prestigious clients to uplift their business efforts. We help<br>
          businesses, irrespective of size, to expand their audience reach and convert them into long-term clients. Our services<br>
          include digital marketing, logo design, mobile and game app development, website design and development.
        </p>
        <NuxtLink to="/our-service">
          <SecondaryButton class="!w-fit flex items-center">
            Explore our services
            <NuxtIcon name="iconsax/linear/arrow-right" class="text-xl" />
          </SecondaryButton>
        </NuxtLink>
      </div>

      <!-- Section 3: Why Businesses Need Us -->
      <div class="grid space-y-6 mt-9">
        <div class="flex items-center text-xs text-start justify-items-start">
          <div class="bg-secondary-shade h-1 w-9 mx-1"></div>
          The Real Question
        </div>
        <div class="my-6">
          <h2 class="sm:text-4xl text-2xl font-bold">Why Businesses Need Us?</h2>
        </div>
        <div>
          <p>
            Digital marketing and technology are evolving at a rapid pace. For many business owners, conquering<br>
            the online arena is an uphill battle, and they might not be well-equipped for it. That is where we come<br>
            in. Our unparalleled team of professionals helps brands gain more visibility and credibility.
          </p>
        </div>
        <NuxtLink to="/our-service">
          <SecondaryButton class="!w-fit flex items-center">
            Explore our services
            <NuxtIcon name="iconsax/linear/arrow-right" class="text-xl" />
          </SecondaryButton>
        </NuxtLink>
      </div>

      <!-- Section 4: How Can We Help -->
      <div class="text-center justify-center grid space-y-4">
        <div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full sm:w-[90vw]">
          <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative">
            <div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
          </div>
          <h2 class="sm:text-4xl text-2xl">How can We Help?</h2>
          <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative">
            <div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
          </div>
        </div>
        <p class="text-center">
          As a services consultancy, we promise novel and strategic solutions through our comprehensive technical expertise. Get<br>
          in touch if you want to increase conversion rates, better web traffic, fan base, advertising efforts, and unlock better<br>
          opportunities. We ensure our partners that we never settle for the average. We work to make great things more<br>
          extraordinary. Get your brand built by true experts.
        </p>
        <div class="text-center">
          <LiveChat />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles for accordion */
.collapse.collapse-plus:not(.collapse-close) > input:is([type="checkbox"], [type="radio"]):checked ~ .collapse-title {
  color: #9F1239;
}
</style>