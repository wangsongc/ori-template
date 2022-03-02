import { createApp, defineAsyncComponent } from 'vue'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'
import en from './locales/en.json'
import zh from './locales/zh.json'
import App from './App.vue'
import store from './store'
import FederationErrorComponent from './components/FederationErrorComponent.vue'
import routes from 'virtual:plugin-pages'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    zh
  }
})

const app = createApp(App);
const remoteComponent = defineAsyncComponent({
  loader: () => import('remote/RemoteComponent'),
  errorComponent: FederationErrorComponent,
});
app.component("RemoteComponent", remoteComponent)
app.use(router).use(store).use(i18n).mount('#app')
