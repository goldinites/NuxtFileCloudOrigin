// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['@/assets/scss/style.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "@/assets/scss/variables.scss";
                        @import "@/assets/scss/mixins.scss";
                    `
                }
            }
        }
    },
    modules: ['nuxt-icons', "@nuxt/eslint"]
})