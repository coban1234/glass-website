// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const githubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: 'https://coban1234.github.io',
  base: githubPages ? '/glass-website' : '/',
  trailingSlash: 'always',
  redirects: {
    '/estimate/': '/contact/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
