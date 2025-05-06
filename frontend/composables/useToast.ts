import { ref } from 'vue';

// Define Toast type
interface Toast {
    id: number;
    message: string;
    type: 'success' | 'error' | 'info';
    duration?: number;
}

// Store toasts
const toasts = ref<Toast[]>([]);
let toastId = 0;

// Composable for managing toasts
export function useToast() {
    // Add a new toast
    function addToast(message: string, type: Toast['type'] = 'info', duration = 3000) {
        const id = toastId++;
        toasts.value.push({ id, message, type, duration });

        // Auto-remove toast after duration
        setTimeout(() => {
            removeToast(id);
        }, duration);
    }

    // Remove a toast by ID
    function removeToast(id: number) {
        toasts.value = toasts.value.filter(toast => toast.id !== id);
    }

    return {
        toasts,
        addToast,
        removeToast,
    };
}