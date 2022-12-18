import { toast } from 'vue3-toastify';

window.Echo.channel('news_database_post-created')
    .listen('PostCreated', (e) => {
        console.log(e.post)

        toast.success('Novo Post');

    });