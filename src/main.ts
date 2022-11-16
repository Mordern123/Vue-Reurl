import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/app.css';
import zh from './assets/language/zh.json';
import jp from './assets/language/jp.json';
import en from './assets/language/en.json';
import "dropzone/dist/basic.css"
import "dropzone/dist/dropzone.css"
const i18n = createI18n({
    legacy: false,

    messages: {
      "zh": zh,
      "jp": jp,
      "en": en
    },
    globalInjection: true
});

createApp(App).use(router).use(i18n).mount('#app')
