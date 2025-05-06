const isUserLoggedIn = () => !!(useState('userData').value || useCookie('CSRF_ASRO_TOKEN')?.value)

export default defineNuxtRouteMiddleware((to, from) => {

    // isAuthenticated() is an example method verifying if a user is authenticated
    if (isUserLoggedIn() === false) {
        return navigateTo('/auth/login')
    }
})