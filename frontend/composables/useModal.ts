// composables/useModal.js
import { ref } from 'vue';

export function useModal() {
  const isOpen = ref(false);

  const openModal = () => {
    isOpen.value = true;
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    isOpen.value = false;
    // Restore body scroll
    document.body.style.overflow = '';
  };

  return { isOpen, openModal, closeModal };
}
