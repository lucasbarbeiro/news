import './bootstrap';

import Vue from 'vue';
import VueToastify from 'vue-toastify';
import postsComponent from './components/Posts/Posts.vue';

export default {
    name: 'App',
    /*    components: {
            'postsComponent': postsComponent
        } */
};

//const app = Vue.createApp({})
Vue.use(VueToastify)
Vue.component('postsComponent', postsComponent)
//postsComponent.define('postsComponent', Vue(postsComponent).default);