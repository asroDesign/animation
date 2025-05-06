<script setup>
import { ref } from 'vue'
import SecondaryButton from "~/components/tools/SecondaryButton.vue";
import PrimaryButton from "~/components/tools/PrimaryButton.vue";
import { useToast } from '~/composables/useToast';
// Initialize toast composable
const { addToast } = useToast();

const session = ref({})

const {data:order,error:checkout_error} = await useMyFetch(`checkout`,{
  headers:{
    Authorization: `Bearer ${useCookie('CSRF_ASRO_TOKEN')?.value}`
  }
})

if (checkout_error.value){
  addToast(checkout_error.value?.data?.msg,'error',5000)
}
// Reactive state
const gateway = ref('')
const reference_number = ref('')
const coupon_code = ref('')
const showManualTransfer = ref(false)

// Form submission
const checkoutForm = async () => {
  if (!gateway.value && order.value.total > 0) {
    alert('Please select a payment gateway')
    return
  }
  if (gateway.value === 'manual' && !reference_number.value) {
    alert('Please enter a reference number')
    return
  }
  // Simulate form submission
  console.log('Checkout submitted')
  const {data,status,error} = await useMyFetch(`checkout`,{
    body:{ gateway: gateway.value, reference_number: reference_number.value },
    method:'POST',
    headers:{
      Authorization: `Bearer ${useCookie('CSRF_ASRO_TOKEN')?.value}`
    }
  })
  if (error.value){
    addToast(error.value?.data?.message,'error',5000)
  }
  // In a real app, use $fetch or an API call to submit to route('frontend.checkout.store')
}

const get_data = async()=>{
  const {data} = await useMyFetch(`checkout`,{

    headers:{
      Authorization: `Bearer ${useCookie('CSRF_ASRO_TOKEN')?.value}`
    }
  })
  order.value = data.value
}
const applyCoupon = async () => {
  if (!coupon_code.value) {
    session.value['coupon_error'] = 'Please enter a coupon code'
    return
  }
  session['coupon_error'] = ''
  const {data,status,error} = await useMyFetch('post-coupon-code',{
    method:'POST',
    body:{
      coupon_code:coupon_code.value
    },
    headers:{
      Authorization: `Bearer ${useCookie('CSRF_ASRO_TOKEN')?.value}`
    }
  })
  if (status.value=='success'){
    console.log(data?.value)
    addToast(data.value?.msg,'success',5000)
    get_data()
  }
  session.value['coupon_error'] = error.value?.data?.msg
}

const removeCoupon = async () => {
  // Simulate coupon removal
  session['coupon_error'] = ''
  const {data,status,error} = await useMyFetch('coupon-code',{
    method:'DELETE',
    body:{
      coupon_code:coupon_code.value
    },
    headers:{
      Authorization: `Bearer ${useCookie('CSRF_ASRO_TOKEN')?.value}`
    }
  })
  if (status.value=='success'){
    get_data()
    addToast('Coupon removed','success',5000)
  }

  session.value['coupon_error'] = error.value?.data?.msg
  // In a real app, use $fetch to submit to route('frontend.coupon.destroy')
}

// Watch gateway to show/hide manual transfer details
watch(gateway, (newVal) => {
  showManualTransfer.value = newVal === 'manual'
})
definePageMeta({
  layout:'dashboard',
  middleware:'auth'
})
</script>

<template>
  <div class=" py-12">
    <div class="container mx-auto px-4">
      <!-- Secure Checkout Header -->
      <div class="mb-8">
        <div class=" p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold mb-4">Secure Checkout</h2>
          <!-- Optimized Staging Section -->
          <div class="relative flex justify-between items-center">
            <!-- Connecting Line -->
            <div class="absolute top-[37%] w-[90%] mx-auto left-0 right-0 h-0 border-t-4 border-primary transform -translate-y-1/2"></div>
            <!-- Steps -->

            <div class="relative z-10 flex flex-col items-center gap-2">
              <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <nuxt-icon name="iconsax/bulk/bag" class="text-4xl "/>

              </div>
              <a  class="text-primary text-lg font-bold">Cart Items</a>
            </div>
            <div class="relative z-10 flex flex-col items-center gap-2">
              <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <nuxt-icon name="iconsax/bulk/card-pos" class="text-4xl "/>

              </div>
              <span class="text-primary text-lg font-bold">Payment</span>
            </div>
            <div class="relative z-10 flex flex-col items-center gap-2">
              <div class="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                <nuxt-icon name="iconsax/bulk/receive-square" class="text-4xl text-gray-500"/>
              </div>
              <span class="text-gray-400 text-lg font-bold">Download</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Payment Details and Order Summary -->
      <div v-if="order" class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Payment Details -->
        <div class="lg:col-span-7">
          <div class="bg-white/5 p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold  mb-4">Payment Details</h2>
            <!-- Error Message -->
            <div v-if="session?.error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 flex justify-between items-center">
              <span>{{ session.error }}</span>
              <button @click="session.error = null" class="text-red-700 hover:text-red-900">×</button>
            </div>

            <!-- Payment Form -->
            <form @submit.prevent="checkoutForm" id="checkoutform">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div v-if="order?.total > 0" class="space-y-2">
                  <!-- Payment Gateways -->
                  <label v-if="order?.setting?.is_checked_paypal" class="block bg-white p-2 rounded-lg shadow-md flex items-center justify-between cursor-pointer transition-all duration-200 border"
                         :class="{ '!bg-red-200 !border-red-500': gateway == 'paypal' }">
                    <div class="flex items-center space-x-4">
                      <img src="/images/paypal.png" alt="PayPal" class="h-4">
                      <p class="text-lg font-medium text-gray-800">PayPal</p>
                    </div>
                    <input v-model="gateway" type="radio" name="gateway" value="paypal" class="hidden">
                  </label>
                  <label v-if="order?.setting?.is_checked_stripe" class="block bg-white p-2 rounded-lg shadow-md flex items-center justify-between cursor-pointer transition-all duration-200 border"
                         :class="{ '!bg-red-200 !border-red-500': gateway == 'stripe' }">
                    <div class="flex items-center space-x-4">
                      <img src="/images/stripe.png" alt="Stripe" class="h-4">
                      <p class="text-lg font-medium text-gray-800">Stripe</p>
                    </div>
                    <input v-model="gateway" type="radio" name="gateway" value="stripe" class="hidden">
                  </label>
                  <label v-if="order?.setting?.is_checked_razorpay" class="block bg-white p-2 rounded-lg shadow-md flex items-center justify-between cursor-pointer transition-all duration-200 border"
                         :class="{ '!bg-red-200 !border-red-500': gateway == 'razorpay' }">
                    <div class="flex items-center space-x-4">
                      <img src="/images/razorpay.png" alt="Razorpay" class="h-4">
                      <p class="text-lg font-medium text-gray-800">Razorpay</p>
                    </div>
                    <input v-model="gateway" type="radio" name="gateway" value="razorpay" class="hidden">
                  </label>
                  <label v-if="order?.setting?.is_checked_manual_transfer" class="block bg-white p-2 rounded-lg shadow-md flex items-center justify-between cursor-pointer transition-all duration-200 border"
                         :class="{ '!bg-red-200 !border-red-500': gateway == 'manual' }">
                    <div class="flex items-center space-x-4">
                      <img src="/images/manual_transfer.png" alt="Manual Transfer" class="h-10">
                      <p class="text-lg font-medium text-gray-800">Manual Transfer</p>
                    </div>
                    <input v-model="gateway" type="radio" name="gateway" value="manual" class="hidden">
                  </label>
                </div>
                <div v-else class="text-center py-4">
                  <p class="text-gray-600 text-lg">No Payment Required</p>
                  <input type="hidden" name="gateway" value="free">
                </div>
              </div>

              <!-- Manual Transfer Details -->
              <div v-if="showManualTransfer" class="mb-4">
                <div v-html="order?.setting?.manual_transfer_details" class="prose text-gray-700"></div>
                <div class="mt-4">
                  <input v-model="reference_number" type="text" placeholder="Enter Reference no." class="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
                  <label class="text-sm text-gray-600 mt-1">Enter Reference no.</label>
                </div>
              </div>

              <!-- Submit Button -->
              <secondary-button type="submit" class="w-full !p-4 transition">
                {{ order?.total > 0 ? 'Pay and Continue' : 'Continue' }}
              </secondary-button>
            </form>
          </div>
        </div>

        <!-- Order Details -->
        <div class="lg:col-span-5">
          <div class="bg-white/5 p-6 rounded-lg shadow-md mb-6">
            <h2 class="text-2xl font-bold  mb-4">Order Details</h2>
            <div class="flex justify-between mb-2">
              <p class="">Total Products</p>
              <p class="">{{ order?.total_product ?? 0 }}</p>
            </div>
            <div class="flex justify-between mb-2">
              <p class="">Subtotal</p>
              <p class="">{{ order?.price_symbol }}{{ order?.subtotal ?? 0 }}</p>
            </div>
            <div class="flex justify-between mb-2">
              <p class="">Tax</p>
              <p class="">{{ order?.price_symbol }}{{ order?.tax ?? 0 }}</p>
            </div>
            <div class="flex justify-between mb-2">
              <p class="">Discount</p>
              <div v-if="order?.discount" class="flex items-center space-x-2">
                <p>{{ order?.discount_code }} - {{ order?.price_symbol }}{{ order?.discount ?? 0 }}</p>
                <button type="submit" @click="removeCoupon" class="text-red-600 hover:text-red-800">
                  <nuxt-icon name="iconsax/bulk/trash" />
                </button>
              </div>
              <p v-else>- {{ order?.price_symbol }}{{ order?.discount ?? 0 }}</p>
            </div>
            <div class="border-t pt-4 mt-4 flex justify-between">
              <p class="text-gray-200 font-semibold">Total</p>
              <p class="text-gray-200 font-semibold">{{ order?.price_symbol }}{{ order?.total }}</p>
            </div>
          </div>

          <!-- Coupon Form -->
          <div v-if="order?.total > 0" class="bg-white/5 p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-bold mb-4">Discount Code</h2>
            <form @submit.prevent="applyCoupon" class="flex space-x-2">
              <div>
                <input v-model="coupon_code" type="text" placeholder="Enter Discount Code"
                       class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                >
              </div>
              <PrimaryButton type="submit" class="text-white px-4 py-2">
                Apply
              </PrimaryButton>
            </form>
            <span v-if="session['coupon_error']" class="text-red-400 my-2">{{session?.coupon_error}}</span>
          </div>
        </div>
      </div>
      <div else class="bg-red-500/5 p-4 text-center rounded-lg text-red-500">
        {{checkout_error?.data?.msg}}
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tailwind handles most styling, but we can add custom styles if needed */
.prose :where(ul, ol):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  margin-bottom: 0;
}
</style>