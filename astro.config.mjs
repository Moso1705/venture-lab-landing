// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static one-pager, deployment target not decided yet: keep output fully static
// and host-agnostic (works on Vercel, Netlify, Cloudflare Pages without adapters).
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    build: {
      // lightningcss (the default) folds animation-timeline into the animation
      // shorthand, which browsers reject, silently killing all scroll-driven
      // animations. esbuild minifies without restructuring declarations.
      cssMinify: 'esbuild',
    },
  },
});
