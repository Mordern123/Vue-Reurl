import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/app.css';
import zh from './assets/language/zh-TW.json';
import en from './assets/language/en-US.json';
const i18n = createI18n({
    legacy: false,
    locale: "zh-TW",
    fallbackLocale: "zh-TW",
    messages: {
      "zh-TW": zh,
      "en-US": en
    },
    globalInjection: true
});

createApp(App).use(router).use(i18n).mount('#app')
