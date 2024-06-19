const isAuthenticated = false;
const LOGIN_PAGES_URLS = ['/login', '/register']

export default defineNuxtRouteMiddleware((to, from) => {
    if (isAuthenticated && LOGIN_PAGES_URLS.includes(to.path)) {
        if (!LOGIN_PAGES_URLS.includes(from.path)) {
            return abortNavigation();
        } else {
            return navigateTo('/');
        }
    }

    if (!isAuthenticated && !LOGIN_PAGES_URLS.includes(to.path)) {
        return navigateTo(LOGIN_PAGES_URLS[0]);
    }
});
