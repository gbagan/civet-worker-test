import { defineConfig } from 'vite';
import civetPlugin from '@danielx/civet/vite';

export default defineConfig({
  base: "./",
  plugins: [
    civetPlugin({
      ts: "preserve",
    }),
  ],
  worker: {
    plugins: () => [
      civetPlugin({
        ts: "preserve",
      })
    ],
  },
  build: {
    target: 'esnext',
  },
  server: {
    port: 3000,
  },
});
