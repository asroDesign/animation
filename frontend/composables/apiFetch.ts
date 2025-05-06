
export const useApiFetch = $fetch.create({
    onRequest({ request, options, error }) {
        options.headers = {
            ...options.headers,
            // Authorization: `Bearer ${useAuthStore().token}`,
        }
        options.baseURL = 'http://pixelstudio.asrodev.ir/api'
    },
});

// import {useAuthStore} from "~/stores/auth.js";
export const useMyFetch: typeof useFetch = (request, opts?) => {
    const config = useRuntimeConfig()
    // const authStore = useAuthStore();
    const args = opts || {}
    if (useRoute().meta.middleware=='auth'){
        Object.assign(args,{
            headers: {
                Authorization: `Bearer ${useCookie('CSRF_ASRO_TOKEN').value}`,
            }
        })
    }

    return useFetch(request, { baseURL: 'http://pixelstudio.asrodev.ir/api', ...opts })
}