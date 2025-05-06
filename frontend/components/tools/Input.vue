<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: String,
  type:String,
  text:String
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
  <label class="block font-medium text-sm text-gray-700">
    <span v-if="text">{{ text }}</span>
    <span v-else><slot /></span>
  </label>
    <input
        ref="input"
        :type="type"
        class="border-gray-300 focus:border-indigo-500 dark:text-gray-400 dark:bg-slate-800  focus:ring-indigo-500 rounded-md shadow-sm"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
</template>
