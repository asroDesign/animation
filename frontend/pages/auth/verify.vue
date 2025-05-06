<template>
  <div class="min-h-screen flex items-center justify-center ">
    <div class="bg-white/5 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center">Email verification</h1>
      <form @submit.prevent="verify">
        <span v-if="errors['password']" class="text-red-400 text-start" >{{errors['email'][0]}}</span>
        <div class="mb-6">
          <label for="code" class="block text-sm font-medium ">Verification code</label>
          <input
              id="code"
              v-model="form.code"
              type="text"
              class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              required
          />
          <span v-if="errors['password']" class="text-red-400 text-start" >{{errors['code'][0]}}</span>
        </div>
        <div v-if="error" class="mb-4 text-red-600 text-sm">{{ error }}</div>
        <secondary-button
            type="submit"
            class="w-full p-2 rounded-md hover:bg-blue-600"
            :disabled="loading"
        >
          {{ loading ? 'Confirming...' : 'Confirmed' }}
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
const form = ref({
  email: useState('email').value,
  code: '',
});
const errors = ref({})
const error = ref('');
const loading = ref(false);

const verify = async () => {
  loading.value = true;
  error.value = '';

  try {
    const {data,status,error} = await useMyFetch('/verify', {
      method: 'POST',
      body: form.value,
    });
    if (status.value == 'success'){
      router.push('/auth/login');
    }else{
      errors.value = error.value.data.errors

    }
  } catch (err) {
    error.value = err.data?.message || 'Verification failed.';
  } finally {
    loading.value = false;
  }
};
</script>