<template>
  <div class="min-h-screen flex items-center justify-center ">
    <div class="bg-white/5 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium ">Email</label>
          <input
              id="email"
              v-model="form.email"
              type="email"
              class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              required
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium ">Password</label>
          <input
              id="password"
              v-model="form.password"
              type="password"
              class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              required
          />
        </div>
        <div v-if="error" class="mb-4 text-red-600 text-sm">{{ error }}</div>
        <secondary-button
            type="submit"
            class="w-full transition duration-200"
            :disabled="loading"
        >
          {{ loading ? 'Logging in...' : 'Login' }}
        </secondary-button>
      </form>
      <p class="mt-4 text-center text-sm">
        Don't have an account? <nuxt-link to="/auth/register" class="text-blue-500 hover:underline">Register</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script setup>

import SecondaryButton from "~/components/tools/SecondaryButton.vue";
const router = useRouter();

const form = ref({
  email: '',
  password: '',
});
const error = ref('');
const loading = ref(false);

const login = async () => {
  loading.value = true;
  error.value = '';

  try {
    // await $axios.get('/sanctum/csrf-cookie');
    const {data} = await useMyFetch('/login', {
      body:{
        email: form.value.email,
        password: form.value.password,
      },
      method:'POST'
    });
    console.log('Manual login response:', data.value);
    // ذخیره اطلاعات در Pinia
    useCookie('userData').value=JSON.stringify(data.value.user)
    useState('userData').value =data.value.user
    useCookie('CSRF_ASRO_TOKEN').value = data.value.token
    useState('CSRF_ASRO_TOKEN').value = data.value.token

    if (useRoute().query.to){
      router.push(useRoute().query.to)
    }else{
      router.push('/dashboard')
    }
  } catch (err) {
    console.error('Manual login error:', err);
    error.value = err.response?.data?.message || 'Login failed.';
  } finally {
    loading.value = false;
  }
};
</script>