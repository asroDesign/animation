<script setup lang="ts">
import LiveChat from "~/components/LiveChat.vue";
import SecondaryButton from "~/components/tools/SecondaryButton.vue";
</script>

<template>
  <section class="relative text-white">
    <!-- Hero Section -->
    <div class="relative">
      <nuxt-img
          src="/system/process_mask.png"
          class="w-full  object-cover"
          sizes="sm:100vw md:100vw lg:100vw"
          loading="lazy"
      />
      <div class="absolute inset-0 flex items-center justify-center  top-[16rem]">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-6xl mx-auto text-center sm:text-left">
            <div class="flex items-center justify-center sm:justify-start mb-4">
              <div class="bg-pink-500 h-1 w-12 mr-2"></div>
              <span class="text-sm uppercase">Our Streamlined</span>
            </div>
            <h2 class="text-2xl sm:text-4xl font-bold mb-6">Process</h2>
            <p class="text-base sm:text-lg mb-8 max-w-4xl mr-auto">
              Our team creates custom strategies for business owners after carefully studying the numbers in their industry and understanding their target audience’s psychology. Let’s leverage our digital experience to set your brand apart.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
              <live-chat />
              <LazyRequestQuote />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Process Steps -->
    <div class="container mx-auto lg:-mt-[2rem] mt-[14rem] sm:mt-[2rem] px-3">
      <div class="text-center mb-12">
        <span class="text-sm uppercase text-gray-400">Steps To Achieve Your Goals</span>
        <h2 class="text-2xl sm:text-4xl font-bold mt-2 mb-4">
          Matching Your Business Needs Effectively
        </h2>
        <p class="text-base max-w-2xl mx-auto">
          We’re determined to explore more than what may be just a quick fix for your business. Together, we can tailor our proven processes for continual growth.
        </p>
      </div>

      <div class="relative">
        <!-- Vertical Timeline line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full sm:block hidden"></div>

        <div class="space-y-16 relative">
          <!-- Step 1 -->
          <div class="flex flex-col sm:flex-row items-center gap-8 relative">
            <!-- Timeline marker and horizontal line -->
            <div class="absolute left-1/2 transform -translate-x-1/2 sm:block hidden">
              <div class="w-8 h-8 bg-pink-500 rounded-full border-4 border-gray-900 relative z-10"></div>
<!--              <div class="absolute -top-3.5 left-8 w-[calc(50%+11rem)] h-0.5 border-t-2 border-dashed"></div>-->
            </div>
            <div class="w-full sm:w-1/2 order-2 sm:order-2 left-[20rem]">
              <div class="flex items-center gap-2 mb-4">
                <div class="bg-pink-500 h-1 w-8"></div>
                <span class="text-5xl font-bold text-pink-500">01</span>
              </div>
              <h3 class="text-3xl sm:text-4xl font-bold mb-4">Workshops</h3>
              <p class="text-base sm:text-lg">
                To understand the unique demands of your business, we run multiple workshops for running an extensive business analysis, comprehending campaign objectives, preparing proposals, and deciding deliverables.
              </p>
            </div>
            <div class="w-full sm:w-1/2 order-1 sm:order-1">
              <nuxt-img
                  src="/system/process/Research-paper-pana.png"
                  class="w-full max-w-md mx-auto"
                  sizes="sm:100vw md:50vw lg:400px"
                  loading="lazy"
              />
            </div>
          </div>

          <!-- Step 2 -->
          <div class="flex flex-col sm:flex-row-reverse items-center gap-8 relative">
            <!-- Timeline marker and horizontal line -->
            <div class="absolute left-1/2 transform -translate-x-1/2 sm:block hidden">
              <div class="w-8 h-8 bg-pink-500 rounded-full border-4 border-gray-900 relative z-10"></div>
              <div class="absolute top-3.5 right-8 w-[calc(50%-2rem)] h-0.5 border-t-2 border-dashed border-gray-700"></div>
            </div>
            <div class="w-full sm:w-1/2 order-2">
              <div class="flex items-center gap-2 mb-4 justify-end">
                <span class="text-5xl font-bold text-pink-500">02</span>
                <div class="bg-pink-500 h-1 w-8"></div>
              </div>
              <h3 class="text-3xl sm:text-4xl font-bold mb-4 text-right">Planning</h3>
              <p class="text-base sm:text-lg text-right">
                A lot goes into the planning stage, such as industry research, competitor research, selecting marketing channels, and strategy development. We recommend the best course of action for digitalization.
              </p>
            </div>
            <div class="w-full sm:w-1/2 order-1">
              <nuxt-img
                  src="/system/process/Version-control-amico.png"
                  class="w-full max-w-md mx-auto"
                  sizes="sm:100vw md:50vw lg:400px"
                  loading="lazy"
              />
            </div>
          </div>

          <!-- Step 3 -->
          <div class="flex flex-col sm:flex-row items-center gap-8 relative">
            <!-- Timeline marker and horizontal line -->
            <div class="absolute left-1/2 transform -translate-x-1/2 sm:block hidden">
              <div class="w-8 h-8 bg-pink-500 rounded-full border-4 border-gray-900 relative z-10"></div>
              <div class="absolute top-3.5 left-8 w-[calc(50%-2rem)] h-0.5 border-t-2 border-dashed border-gray-700"></div>
            </div>
            <div class="w-full sm:w-1/2 order-2 sm:order-2">
              <div class="flex items-center gap-2 mb-4">
                <div class="bg-pink-500 h-1 w-8"></div>
                <span class="text-5xl font-bold text-pink-500">03</span>
              </div>
              <h3 class="text-3xl sm:text-4xl font-bold mb-4">A/B Testing</h3>
              <p class="text-base sm:text-lg">
                From experimenting with content to testing advertisements and marketing techniques, we do all it takes to analyze the audience’s behavior and make alterations accordingly for maximum outreach.
              </p>
            </div>
            <div class="w-full sm:w-1/2 order-1 sm:order-1">
              <nuxt-img
                  src="/system/process/Animation-pana.png"
                  class="w-full max-w-md mx-auto"
                  sizes="sm:100vw md:50vw lg:400px"
                  loading="lazy"
              />
            </div>
          </div>

          <!-- Step 4 -->
          <div class="flex flex-col sm:flex-row-reverse items-center gap-8 relative">
            <!-- Timeline marker and horizontal line -->
            <div class="absolute left-1/2 transform -translate-x-1/2 sm:block hidden">
              <div class="w-8 h-8 bg-pink-500 rounded-full border-4 border-gray-900 relative z-10"></div>
              <div class="absolute top-3.5 right-8 w-[calc(50%-2rem)] h-0.5 border-t-2 border-dashed border-gray-700"></div>
            </div>
            <div class="w-full sm:w-1/2 order-2">
              <div class="flex items-center gap-2 mb-4 justify-end">
                <span class="text-5xl font-bold text-pink-500">04</span>
                <div class="bg-pink-500 h-1 w-8"></div>
              </div>
              <h3 class="text-3xl sm:text-4xl font-bold mb-4 text-right">Execution</h3>
              <p class="text-base sm:text-lg text-right">
                Moving forth with execution, we analyze processes, create campaigns, optimize strategies, and produce content to secure a better ranking. We aim for quality, results, and business growth.
              </p>
            </div>
            <div class="w-full sm:w-1/2 order-1">
              <nuxt-img
                  src="/system/process/Animation-amico.png"
                  class="w-full max-w-md mx-auto"
                  sizes="sm:100vw md:50vw lg:400px"
                  loading="lazy"
              />
            </div>
          </div>

          <!-- Step 5 -->
          <div class="flex flex-col sm:flex-row items-center gap-8 relative">
            <!-- Timeline marker and horizontal line -->
            <div class="absolute left-1/2 transform -translate-x-1/2 sm:block hidden">
              <div class="w-8 h-8 bg-pink-500 rounded-full border-4 border-gray-900 relative z-10"></div>
<!--              <div class="absolute top-3.5 left-8 w-[calc(50%-2rem)] h-0.5 border-t-2 border-dashed border-gray-700"></div>-->
            </div>
            <div class="w-full sm:w-1/2 order-2 sm:order-2">
              <div class="flex items-center gap-2 mb-4">
                <div class="bg-pink-500 h-1 w-8"></div>
                <span class="text-5xl font-bold text-pink-500">05</span>
              </div>
              <h3 class="text-3xl sm:text-4xl font-bold mb-4">Implementation</h3>
              <p class="text-base sm:text-lg">
                Now for the exciting part, we get our hands dirty with launching your project and incorporating changes as your business changes. Are you ready to get started?
              </p>
            </div>
            <div class="w-full sm:w-1/2 order-1 sm:order-1">
              <nuxt-img
                  src="/system/process/Video-files-pana.png"
                  class="w-full max-w-md mx-auto"
                  sizes="sm:100vw md:50vw lg:400px"
                  loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Using Tailwind CSS, no additional scoped styles needed */
</style>