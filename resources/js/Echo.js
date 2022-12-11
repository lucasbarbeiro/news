window.Echo.channel('news_database_post-created')
    .listen('PostCreated', (e) => {
        console.log(e)
    });