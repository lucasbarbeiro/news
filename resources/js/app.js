import './bootstrap';

//  https://stackoverflow.com/questions/72927325/using-vue3-components-in-laravel-blade-vite
//  https://github.com/Maronato/vue-toastification 
//  https://vue-toastification.maronato.dev/

import { createApp } from 'vue/dist/vue.esm-bundler.js';
import VueToastify, { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import postsc from './components/Posts/Posts.vue';

const app = createApp({
    name: 'app',
    components: {
        'postsc': postsc,
        'toastify': VueToastify
    },
});

app.mount('#app');