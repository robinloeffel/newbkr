import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      $components: "src/lib/components",
      $images: "src/lib/images",
      $styles: "src/lib/styles",
      $types: "src/lib/types",
      $utilities: "src/lib/utilities"
    }
  }
};
