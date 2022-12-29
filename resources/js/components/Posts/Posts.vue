<template>
    <div>
        Component Vue !
    </div>
    <h1>Posts</h1>
    <div v-for="(post, index) in posts.data" :key="index">
        {{ index - post.name }}
        <hr>
    </div>
</template>

<script>
//https://michaelnthiessen.com/force-re-render/
import axios from 'axios';
import mitt from 'mitt';
import { ref } from 'vue';
const index = ref(0);

const forceRerender = () => {
  index.value += 1;
};

const emitter = mitt()

export default {
    mounted() {
        this.loadPosts()

        emitter.on('post-created', post => this.post.data.unshift(post))
        //Bus.$on('post-created', post => this.post.data.unshift(post))
    },
    /*
    beforeDestroy() {
        this.emitter.all.clear()
    },
    */

    data() {
        return{
            posts:{
                data:[]
            },
        }
    },

    methods: {
        loadPosts(){
            axios.get('/api/posts')
                .then(response => {
                    //console.log(response)
                    this.posts = response.data
            })
            .catch(response => {
                //const myJSON = JSON.stringify(response)
                this.$toast.error('Erro ao carregar os posts na Api')
            })
        },
        forcerenderer(){
            this.index +=1;
        }
    },
}
</script>