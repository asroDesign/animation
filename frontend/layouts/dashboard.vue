```vue
<template>
  <div class="flex flex-col min-h-screen ">
    <!-- Main Content -->
    <div class="flex flex-1 flex-col lg:flex-row w-full">
      <!-- Sidebar Menu (Left on Desktop, Bottom on Mobile) -->
      <nav class="fixed bottom-0 w-full shadow-lg bg-shade-1 lg:static lg:w-48 lg:min-h-screen lg:shadow-none z-10">
        <nuxt-link to="/" class="h-9 sm:flex items-center justify-center py-9 hidden">
          <nuxt-img src="/system/logo.png" />
        </nuxt-link>
        <div class="flex flex-row lg:flex-col sm:sticky sm:top-0 justify-around lg:justify-start items-center p-4  gap-4">
          <nuxt-link
              v-for="item in menuItems"
              :key="item.name"
              :to="item.path"
              exact
              active-class="sm:border-l-2 border-b-2 sm:border-b-0 border-secondary-shade text-primary bg-primary/10"
              class="flex items-center gap-2 p-2 w-full hover:bg-primary hover:text-white rounded-lg transition-colors"
              :aria-current="$route.path === item.path ? 'page' : undefined"
          >
            <nuxt-icon :name="item.icon" class="text-2xl" />
            <span class="hidden lg:block text-sm font-medium font-['Shabnam']">{{ item.name }}</span>
          </nuxt-link>
        </div>
      </nav>

      <!-- Main Content Area -->
      <main class="lg:grid-cols-4 grid gap-6 w-full">
        <div class="navbar shadow-sm col-span-4 sticky top-0 bg-shade-1 z-40 sm:px-[5rem] !w-auto">
          <div class="flex-1">
            <a class="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div class="flex gap-2">
            <div class="dropdown dropdown-end">
              <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <ul
                  tabindex="0"
                  class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <nuxt-link to="/dashboard/profile" class="justify-between">
                    Profile
                  </nuxt-link>
                </li>
                <li><span @click="logout">Logout</span></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Dashboard Info -->
        <section class="rounded-xl sm:col-span-3 col-span-4 shadow-md p-6">
          <slot />
        </section>

        <!-- FAQ Section (Below Dashboard on Mobile, Right on Desktop) -->
        <section class=" sm:col-span-1 col-span-4 px-2 mt-4">
          <nuxt-img
              src="/system/dashboard_mask.png"
              alt="FAQ Banner"
              class="w-full object-cover rounded-lg mb-4"
          />
          <h2 class="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div class=" mb-4 sticky top-9">
            <input
                v-model="searchQuery"
                type="text"
                placeholder="Search FAQs..."
                class="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                @input="filterFAQs"
            />
            <MagnifyingGlassIcon class="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
          <ToolsFaqSection />
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  CogIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/24/outline';
// import {useAuthStore} from "~/stores/auth.js";
// const authStore = useAuthStore();
// Menu Items
const menuItems = [
  { name: 'Dashboard', path: '/dashboard'.replace(/\/$/, ''), icon: 'iconsax/bulk/element-4' },
  { name: 'Cart', path: '/dashboard/cart', icon: 'iconsax/bulk/bag' },
  { name: 'Orders', path: '/dashboard/orders', icon: 'iconsax/bulk/receipt-item' },
  { name: 'Request Quote', path: '/dashboard/process', icon: 'iconsax/bulk/folder-open' },
  { name: 'Wallet', path: '/dashboard/wallet', icon: 'iconsax/bulk/empty-wallet' },
  { name: 'Support', path: '/dashboard/support', icon: 'iconsax/bulk/24-support' },
];

// FAQ Data
const faqs = ref([
  {
    id: 1,
    question: 'How do I reset my password?',
    answer: 'Go to the settings page and click on "Reset Password" to receive an email with instructions.',
  },
  {
    id: 2,
    question: 'What is the dashboard used for?',
    answer: 'The dashboard provides an overview of key metrics like users, revenue, and orders.',
  },
  {
    id: 3,
    question: 'How can I contact support?',
    answer: 'Use the Live Chat feature or email support@dashboard.com.',
  },
]);

// FAQ Search
const searchQuery = ref('');
const filteredFAQs = computed(() =>
    faqs.value.filter(
        (faq) =>
            faq.question.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
);

const filterFAQs = () => {
  // Computed property handles filtering
};

const logout = ()=>{
  useMyFetch('logout',{
    method:'POST',
  })
  authStore.clearAuth()
  useRouter().push('/')
}

definePageMeta({
  middleware: 'auth',
  layout:'dashboard'
});
</script>

<style scoped>
/* Tailwind handles all styling */
</style>
```