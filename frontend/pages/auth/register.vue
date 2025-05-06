<template>
  <div class="min-h-screen flex items-center justify-center ">
    <div class="bg-white/5 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center">register</h1>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium ">Full name</label>
          <input
              id="name"
              v-model="form.name"
              type="text"
              class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              required
          />
          <span v-if="errors['full_name']" class="text-red-400 text-start" >{{errors['full_name'][0]}}</span>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium ">Email</label>
          <input
              id="email"
              v-model="form.email"
              type="email"
              class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              required
          />
          <span v-if="errors['email']" class="text-red-400 text-start" >{{errors['email'][0]}}</span>
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
          <span v-if="errors['password']" class="text-red-400 text-start" >{{errors['password'][0]}}</span>
        </div>
        <div v-if="error" class="mb-4 text-red-600 text-sm" v-html="error"></div>
        <secondary-button
            type="submit"
            class="w-full hover:bg-blue-600"
            :disabled="loading"
        >
          {{ loading ? 'Registering...' : 'Register' }}
        </secondary-button>

      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SecondaryButton from "~/components/tools/SecondaryButton.vue";

const router = useRouter();
const form = reactive({
  name: '',
  email: '',
  password: '',
});
const errors = ref({})
const error = ref('');
const loading = ref(false);

const register = async () => {
  loading.value = true;
  error.value = '';


  try {
    const {data,status,error} = await useMyFetch('/register', {
      method: 'POST',
      body: form,
    });
    if (status.value =='success'){
      useState('email').value = form?.email
      router.push('/auth/verify');
    }else{
      errors.value = error.value.data.errors
      loading.value = false;
    }
  } catch (err) {
    error.value = err.data?.message || 'Registration was unsuccessful.';
  } finally {
    loading.value = false;
  }
};
</script>