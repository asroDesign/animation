<template>
  <div class="w-full  rounded-3xl flex flex-col gap-7 overflow-hidden">
    <!-- Tabs and New Conversation Button -->
    <div class="flex flex-col justify-between sm:flex-row gap-4 items-center">
      <div role="tablist" class="tabs tabs-border">
        <a v-for="tab in tabs"
           :key="tab"
           @click="activeTab = tab"
           :aria-current="activeTab === tab ? 'true' : 'false'" role="tab" class="tab" :class="{'tab-active':activeTab === tab}">{{ tab }}</a>

      </div>
      <nuxt-link to="/dashboard/support/new">
        <PrimaryButton>
          New Conversation
        </PrimaryButton>
      </nuxt-link>
    </div>

    <!-- Conversation List -->
    <div class="flex flex-col gap-4 w-full">
      <nuxt-link
          v-for="conversation in filteredConversations"
          :key="conversation.id"
          class="p-4 rounded-2xl border"
          :to="`/dashboard/support/${conversation.id}`"
          :class="{
          'border-amber-300': conversation.status === 'Pending',
          'border-emerald-500': conversation.status === 'Responded',
          'border-gray-400': conversation.status === 'Closed',
        }"
      >
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2 flex-wrap">
            <nuxt-icon name="iconsax/bulk/message" />
            <h3 class="text-white text-xl sm:text-2xl font-normal font-[\'Impact\'] flex-1">
              {{ conversation.title }}
            </h3>
            <span
                class="px-4 py-1 rounded-3xl border text-white text-sm sm:text-base font-medium font-[\'Shabnam\'] text-center"
                :class="{
                'border-amber-300': conversation.status === 'Pending',
                'border-emerald-500': conversation.status === 'Responded',
                'border-gray-400': conversation.status === 'Closed',
              }"
            >
              {{ conversation.status }}
            </span>
          </div>
          <p class="text-gray-400 text-sm sm:text-base font-medium font-[\'Shabnam\']">
            {{ conversation.lastMessage?.message || conversation.description }}
          </p>
          <div class="flex items-center gap-2 text-gray-400 text-sm sm:text-base font-medium font-[\'Shabnam\']">
            <nuxt-icon name="iconsax/bulk/calendar" />
            {{ new Date(conversation.lastMessage?.created_at || conversation.created_at).toDateString() }}
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import PrimaryButton from "~/components/tools/PrimaryButton.vue";

// Tabs
const tabs = ['All', 'Ongoing', 'Closed'];
const activeTab = ref('All');

const {data:conversations} = useMyFetch('tickets',{
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
})
// Conversations Data
// const conversations = ref([
//   {
//     id: 1,
//     title: 'Title of Conversation',
//     lastMessage: 'The message, It could be anything the user asked, this text field presents the last message in the conversation.',
//     status: 'Pending',
//     date: '13 Apr 2025',
//     time: '13:54',
//   },
//   {
//     id: 2,
//     title: 'Title of Conversation',
//     lastMessage: 'The message, It could be anything the user asked, this text field presents the last message in the conversation.',
//     status: 'Responded',
//     date: '13 Apr 2025',
//     time: '13:54',
//   },
//   {
//     id: 3,
//     title: 'Title of Conversation',
//     lastMessage: 'The message, It could be anything the user asked, this text field presents the last message in the conversation.',
//     status: 'Closed',
//     date: '13 Apr 2025',
//     time: '13:54',
//   },
//   {
//     id: 4,
//     title: 'Title of Conversation',
//     lastMessage: 'The message, It could be anything the user asked, this text field presents the last message in the conversation.',
//     status: 'Pending',
//     date: '13 Apr 2025',
//     time: '13:54',
//   },
// ]);

// Filtered Conversations
const filteredConversations = computed(() => {
  if (activeTab.value === 'All') return conversations.value;
  if (activeTab.value === 'Ongoing') {
    return conversations.value.filter(
        (c) => c.status === 'Pending' || c.status === 'Responded'
    );
  }
  return conversations.value.filter((c) => c.status === 'Closed');
});

// New Conversation
const startNewConversation = () => {
  console.log('Starting new conversation...');
  // Add logic to open a new conversation form or redirect
};
definePageMeta({
  layout:'dashboard',
  middleware:'auth'
})
</script>

<style scoped>
/* Tailwind handles all styling */
</style>