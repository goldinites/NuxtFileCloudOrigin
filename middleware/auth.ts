const isAuthenticated = true;
const LOGIN_PAGE_URL = '/login'

export default defineNuxtRouteMiddleware((to, from) => {
    if (isAuthenticated && to.path === LOGIN_PAGE_URL) {
        if (from.path !== LOGIN_PAGE_URL) {
            return navigateTo(from.path);
        } else {
            return navigateTo('/');
        }
    }

    if (!isAuthenticated && to.path !== LOGIN_PAGE_URL) {
        return navigateTo(LOGIN_PAGE_URL);
    }
});
