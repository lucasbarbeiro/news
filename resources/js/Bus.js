/*
import { createApp } from 'vue/dist/vue.esm-bundler.js';

export default createApp({
    name: 'app'
});
app.mount('#app');
*/

// eventBus.js
import emitter from 'tiny-emitter/instance'

export default {
    $on: (...args) => emitter.on(...args),
    $once: (...args) => emitter.once(...args),
    $off: (...args) => emitter.off(...args),
    $emit: (...args) => emitter.emit(...args)
}
//https://stackoverflow.com/questions/63471824/vue-js-3-event-bus