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

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const i18n = createI18n({
    legacy: false,
    messages: {
      "zh": zh,
      "jp": jp,
      "en": en
    },
    globalInjection: true
});

createApp(App).use(router).use(i18n).use(VueSweetalert2).mount('#app')