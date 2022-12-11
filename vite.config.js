import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
//import components from "vite-plugin-components";
//import vue from '@vitejs/plugin-vue';
import path from 'path'

export default defineConfig({  //()
    //.withLaraonCertificates()
    //.withPlugins(vue, components)
    //.merge({
    server: {
        //host: '0.0.0.0',
        hmr: {
            host: 'news.test',
            //port: '8080',
        },
        // Proxying websockets or socket.io: ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
        /*'socket.io': {
            target: 'ws://localhost',
            port: '6001',
            ws: true,
        },*/
        watch: {
            //ignored: ['!**/node_modules/your-package-name/**'],
            usePolling: true,
        },
        /* with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // with RegEx: http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
      '^/fallback/.*': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, ''),
      },
      // Using the proxy instance
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy will be an instance of 'http-proxy'
        },
      },*/
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    /*resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            '@': '/resources/js',
        }
    },*/
});
