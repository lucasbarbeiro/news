import { toast } from 'vue3-toastify';
import emitter from 'mitt';

const emitter = mitt()

window.Echo.channel('news_database_post-created')
    .listen('PostCreated', (e) => {
        //console.log(e.post)
        //Bus.$emit('post-created', e.post)
        emitter.emit('post-created', e.post)

        const myJSON = JSON.stringify(e.post.name);
        toast.success(myJSON);
    });