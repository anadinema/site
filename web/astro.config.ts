import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'static',     // static by default; individual pages opt into SSR
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
})
