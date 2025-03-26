import { defineConfig } from "vite";

export default defineConfig({
  base: "/p2pmessenger",
});

/*
import { resolve } from 'path' 
import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        hc_intro: resolve(__dirname, 'hc-intro/index.html'),
      },
    },
  },
});*/
