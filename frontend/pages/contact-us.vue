<script setup lang="ts">

import LiveChat from "~/components/LiveChat.vue";
import SecondaryButton from "~/components/tools/SecondaryButton.vue";
import ContactForm from "~/components/tools/ContactForm.vue";
import FaqSection from "~/components/tools/FaqSection.vue";
</script>

<template>
  <section class="relative text-white">
    <!-- Hero Section -->
    <div class="relative">
      <nuxt-img
          src="/system/contact_us_mask.png"
          class="w-full  object-cover"
          sizes="sm:100vw md:100vw lg:100vw"
          loading="lazy"
      />
      <div class="absolute inset-0 flex items-center justify-center top-[16rem]">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-6xl mx-auto text-center sm:text-left">
            <div class="flex items-center justify-center sm:justify-start mb-4">
              <div class="bg-pink-500 h-1 w-12 mr-2"></div>
              <span class="text-sm uppercase">Get In Touch Now</span>
            </div>
            <h2 class="text-2xl sm:text-4xl font-bold mb-6">Contact Us</h2>
            <p class="text-base sm:text-lg mb-8 max-w-4xl mr-auto">
              Whether you’re curious about features, pricing, or free trials, you can consult an advisor to create a customized marketing plan that guarantees results. Here’s how to reach out to us.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
              <live-chat />
              <LazyRequestQuote />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto lg:-mt-[2rem] mt-[14rem] sm:mt-[2rem] px-3">
      <div class="text-center justify-center grid space-y-4">
        <div class="divider">
          <h2 class="sm:text-4xl text-xl">
            We’d Love to Hear from You!
          </h2>
        </div>
      </div>
      <div class="grid sm:grid-cols-2 gap-3">
        <div class="col-span-1">
          <div class="sm:w-[617px] h-96 inline-flex flex-col justify-start items-start gap-5 overflow-hidden">
            <div class="w-10 h-[5px] bg-Primary rounded-[3px]"></div>
            <div class="flex items-center justify-center sm:justify-start mb-4">
              <div class="bg-pink-500 h-1 w-12 mr-2"></div>
              <span class="text-sm uppercase">Get in touch with us</span>
            </div>
            <div class="self-stretch justify-start text-White text-7xl font-normal font-['Impact']">Our Teams<br/>Are Here To Help.</div>
            <div class="self-stretch flex flex-col justify-start items-start">
              <div class="self-stretch justify-start text-White text-3xl font-normal font-['Impact']">Call +98 21 0000 0000 or drop us a line for further inquiries.</div>
              <div class="self-stretch text-justify justify-start text-light-shade text-2xl font-normal font-['Shabnam']">You’ve got tens of questions, and we’ve tons of answers, so let’s get this conversation started!</div>
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <ContactForm />
        </div>
      </div>
      <FaqSection >
        <template #title>
          <div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full">
            <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative">
              <div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
            </div>
            <h2 class="title text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center font-display whitespace-nowrap">
              FAQs About Animation Studio
            </h2>
            <div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative">
              <div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded"></div>
            </div>
          </div>
        </template>
      </FaqSection>
    </div>
  </section>
</template>

<style scoped>

</style>