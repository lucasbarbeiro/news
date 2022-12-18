import { toast } from 'vue3-toastify';

window.Echo.channel('news_database_post-created')
    .listen('PostCreated', (e) => {
        console.log(e.post)
        const myJSON = JSON.stringify('Novo Post: ' + e.post.title);
        toast.success(myJSON);
    });