import { defineConfig } from 'astro/config';
import checker from 'vite-plugin-checker';

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    server: { port: 3002 },
    plugins: [
      react(),
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint "./src/**/*.{ts,tsx,astro}"',
        },
      }),
    ],
  },
});
