//import { createApp } from 'vue/dist/vue.esm-bundler.js';

window.Echo.channel('news_database_post-created')
    .listen('PostCreated', (e) => {
        console.log(e)
        console.log(e.post)

        //toast.success(`Titulo do Post ${e.post}`, 'Novo Post');

        /*
        const notify = () => {
            createApp().$toast.success(`Titulo do Post ${e.post}`, 'Novo Post').default;
            // or
            //toast.success('toastify success');
        };
        */
    })