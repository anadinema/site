import cloudflare from "@astrojs/cloudflare";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  output: "static",
  compressHTML: true,

  fonts: [
    {
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      provider: fontProviders.google(),
      weights: [300, 400, 500, 600],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["monospace"],
      formats: ["woff2"],
      display: "block",
    },
  ],

  build: {
    inlineStylesheets: "always",
  },

  adapter: cloudflare({
    imageService: {
      build: "compile",
      runtime: "cloudflare-binding",
    },
  }),
});
