import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                gallery: 'gallery.html',
                weather: 'weather.html',
                passes: 'passes.html'
            },
        },
    },
});