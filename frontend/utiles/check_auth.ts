/**
 * Return if user is logged in
 * This is completely up to you and how you want to store the token in your frontend application
 * e.g. If you are using cookies to store the application please update this function
 */

export const isUserLoggedIn = () => !!(useState('userData').value || useCookie('CSRF_ASRO_TOKEN')?.value)
export const LogoutProcess = () => {
    useCookie('CSRF_ASRO_TOKEN').value=null
    useCookie('userData').value = null
    useState('userData').value = null
    return true
}