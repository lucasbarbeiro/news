<template>
    <div>
        Component Vue !
    </div>
    <h1>Posts</h1>
    <div v-for="(post, index) in posts.data" :key="index">
        {{ post.name }}
        <hr>
    </div>
</template>

<script>
import axios from 'axios';
import emitter from 'mitt';

//const emitter = mitt()

export default {
    mounted() {
        this.loadPosts()

        emitter.on('post-created', post => this.post.data.unshift(post))
        //Bus.$on('post-created', post => this.post.data.unshift(post))
    },

    data() {
        return{
            posts:{
                data:[]
            }
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
        }
    },
}
</script>