/*
import './bootstrap';

//  https://stackoverflow.com/questions/72927325/using-vue3-components-in-laravel-blade-vite

import { createApp } from 'vue';
import VueToastify from 'vue-toastify';
import { head } from '@inertiajs/inertia'
import posts from './components/Posts/Posts.vue';
/*
const postscompo = createApp({
    data() {
        return {
            message: 'Hello root Component 1'
        };
    },
    components: {
        'posts': posts
    },
},
);
postscompo.mount('#App');
*/
/*
export default {
    name: 'App',
    //    components: {
    //        'posts': posts
    //    }
};

//createApp.use(VueToastify)
createApp.Component('posts', posts).default;

const app = createApp({
    name: 'app',
    components: {
        'posts': posts,
    },
});
//app.use(VueToastify);
app.mount('#app');
*/

require('./bootstrap');

import Vue from ('vue').default;
import VueToastify from 'vue-toastify';
import postscompo from './components/Posts/Posts.vue';

//import store from './vuex/store'
//import router from './routes'
window.vue = Vue;
Vue.use(VueToastify, { position: 'top-right' })

Vue.component('postscompo', postscompo).default;

const app = new Vue({
    el: '#app',
    //  store,
    //  router
});

//store.dispatch('getMe')