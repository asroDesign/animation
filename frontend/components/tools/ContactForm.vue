<template>
  <div class="contact-form-container">
    <form @submit.prevent="handleSubmit" class="contact-form">
      <div class="form-group">
        <label for="fullName" class="form-label">Full Name *</label>
        <input
            id="fullName"
            v-model="form.name"
            type="text"
            placeholder="Enter your full name"
            class="form-input"
            required
        />
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Email Address *</label>
        <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            class="form-input"
            required
        />
      </div>
      <div class="form-group">
        <label for="phone" class="form-label">Phone Number *</label>
        <input
            id="phone"
            v-model="form.phone"
            type="tel"
            placeholder="Enter your phone number"
            class="form-input"
            required
        />
      </div>
      <div class="form-group">
        <label for="company" class="form-label">Company</label>
        <input
            id="company"
            v-model="form.company"
            type="text"
            placeholder="Enter your company name"
            class="form-input"
        />
      </div>
      <div class="form-group col-span-1 md:col-span-2">
        <label for="message" class="form-label">Message *</label>
        <textarea
            id="message"
            v-model="form.message"
            placeholder="Write your message..."
            class="form-input"
            rows="4"
            required
        ></textarea>
      </div>
      <div class="col-span-1 md:col-span-2">
        <PrimaryButton type="submit" class="!w-full !justify-center">Submit Now</PrimaryButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PrimaryButton from '~/components/tools/PrimaryButton.vue';
import { useToast } from '~/composables/useToast';


// Initialize toast composable
const { addToast } = useToast();
// Form data
const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
});

// Handle form submission
const handleSubmit = async() => {
  const {data,status} = await useMyFetch('post-contact-us',{method:'POST',body:form})
  console.log(status,data,'oooooo')
  if (status.value == 'success'){
    addToast(data.value.msg,'success',5000)
    resetForm();
  }else{
    addToast(data.value?.error?.msg,'error',5000)
  }

};

// Reset form
const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  };
};
</script>

<style scoped>
.contact-form-container {
  @apply max-w-5xl mx-auto p-4 sm:p-6 lg:p-8;
}

.contact-form {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl shadow-lg;
  background-color: #14082A;
}

.form-group {
  @apply flex flex-col;
}

.form-label {
  @apply text-sm font-medium mb-2 text-gray-400;
}

.form-input {
  @apply w-full py-2 px-3 sm:py-3 sm:px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-transparent;
  border-color: #514078;
  color: #A39CB1;
}

.form-input::placeholder {
  @apply text-gray-500;
}

textarea.form-input {
  @apply resize-y min-h-[100px] sm:min-h-[120px];
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .contact-form {
    @apply p-4;
  }

  .form-input {
    @apply py-2 px-3;
  }
}
</style>