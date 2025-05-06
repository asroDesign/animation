<template>
  <div class="w-full rounded-3xl flex flex-col gap-7 overflow-hidden">
    <!-- Wallet Header (Unchanged) -->
    <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-7 w-full">
      <nuxt-img
          :src="walletImage"
          alt="Wallet Image"
          class="w-48 h-48 sm:w-72 sm:h-72 rounded-lg object-cover"
      />
      <div class="flex flex-col gap-2 text-center sm:text-left">
        <span class="text-white text-sm font-bold font-['Shabnam']">Wallet Balance</span>
        <span class="text-white text-4xl sm:text-7xl font-normal font-['Impact']">{{ balance||0 }} $</span>
      </div>
      <div class="flex-1"></div>
      <div class="flex flex-col gap-4 sm:gap-7 w-full sm:w-auto">
        <!-- Modals (Unchanged) -->
        <DepositModal v-if="balance"
            :balance="balance"
            @close="showDepositModal = false"
            @update-balance="updateBalance"
        />
        <WithdrawModal v-if="withdraw_amount"
            :balance="withdraw_amount"
            @close="showWithdrawModal = false"
            @update-balance="updateBalance"
        />
      </div>
    </div>

    <!-- Recent Transactions -->
    <div class="w-full">
      <h2 class="text-white text-2xl sm:text-3xl font-normal font-['Impact'] mb-4">
        Recent Transactions
      </h2>

      <!-- Desktop Table (Visible on sm and above) -->
      <div class="hidden sm:block overflow-x-auto">
        <table class="w-full text-left">
          <thead>
          <tr class="text-zinc-500 text-sm font-normal font-['Shabnam']">
            <th class="py-2 px-4">Amount</th>
            <th class="py-2 px-4">Type</th>
            <th class="py-2 px-4">Date</th>
            <th class="py-2 px-4">Order ID</th>
            <th class="py-2 px-4">Status</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="transaction in transactions?.data.data" :key="transaction.id" class="border-t border-neutral-700/50">
            <td class="py-2 px-4 text-white text-sm font-bold font-['Shabnam']">
              {{ transaction.amount }} $
            </td>
            <td class="py-2 px-4 text-white text-sm font-bold font-['Shabnam']">
              {{ transaction.type }}
            </td>
            <td class="py-2 px-4 text-white text-sm font-bold font-['Shabnam']">
              {{ transaction.date }}
            </td>
            <td class="py-2 px-4 text-white text-sm font-bold font-['Shabnam']">
              {{ transaction.orderId || '-' }}
            </td>
            <td
                class="py-2 px-4 text-sm font-bold font-['Shabnam']"
                :class="{
                  'text-pink-700': transaction.status === 'Failed',
                  'text-teal-300': transaction.status === 'Success',
                  'text-amber-300': transaction.status === 'Pending',
                }"
            >
              {{ transaction.status }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile Cards (Visible below sm) -->
      <div class="block sm:hidden space-y-4">
        <div
            v-for="transaction in transactions"
            :key="transaction.id"
            class="bg-[#14082A] rounded-lg p-4 flex flex-col gap-2 border border-neutral-700/50"
        >
          <div class="flex justify-between">
            <span class="text-zinc-500 text-xs font-normal font-['Shabnam']">Amount</span>
            <span class="text-white text-sm font-bold font-['Shabnam']">{{ transaction.amount }} $</span>
          </div>
          <div class="flex justify-between">
            <span class="text-zinc-500 text-xs font-normal font-['Shabnam']">Type</span>
            <span class="text-white text-sm font-bold font-['Shabnam']">{{ transaction.type }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-zinc-500 text-xs font-normal font-['Shabnam']">Date</span>
            <span class="text-white text-sm font-bold font-['Shabnam']">{{ transaction.date }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-zinc-500 text-xs font-normal font-['Shabnam']">Order ID</span>
            <span class="text-white text-sm font-bold font-['Shabnam']">{{ transaction.orderId || '-' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-zinc-500 text-xs font-normal font-['Shabnam']">Status</span>
            <span
                class="text-sm font-bold font-['Shabnam']"
                :class="{
                'text-pink-700': transaction.status === 'Failed',
                'text-teal-300': transaction.status === 'Success',
                'text-amber-300': transaction.status === 'Pending',
              }"
            >
              {{ transaction.status }}
            </span>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue';
import DepositModal from "~/components/tools/DepositModal.vue";
import WithdrawModal from "~/components/tools/WithdrawModal.vue";
// import {useAuthStore} from "~/stores/auth.js";

// const authStore = useAuthStore();

// Wallet Data
const walletImage = ref('/system/wallet_mask.png');
const {data: { balance ,withdraw_amount, ...transactions}} = await useMyFetch('get-wallet',{
  method:'get',

})
// const transactions = ref([
//   {
//     id: 1,
//     amount: 20,
//     type: 'Withdraw',
//     date: '13/01/2022',
//     orderId: null,
//     status: 'Failed',
//   },
//   {
//     id: 2,
//     amount: 30,
//     type: 'Order',
//     date: '13/01/2022',
//     orderId: 'AS9876352',
//     status: 'Success',
//   },
//   {
//     id: 3,
//     amount: 74,
//     type: 'Deposit',
//     date: '13/01/2022',
//     orderId: null,
//     status: 'Pending',
//   },
// ]);

// Modal Visibility
const showDepositModal = ref(false);
const showWithdrawModal = ref(false);

// Update Balance
const updateBalance = (newBalance) => {
  balance.value = newBalance;
};
definePageMeta({
  layout:'dashboard',
  middleware: 'auth',
})
</script>

<style scoped>
/* Tailwind handles all styling */
</style>
