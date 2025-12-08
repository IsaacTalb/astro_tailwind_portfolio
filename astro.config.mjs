import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
import markdocConfig from "./markdoc.config.js";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/server";

export default defineConfig({
  integrations: [
    markdoc({
      config: markdocConfig,
      components: {
        Callout: "./src/components/Callout.astro",
      },
      extend: {
        variables: (frontmatter) => ({
          ...frontmatter,
        }),
      },
    }),
    tailwind(),
  ],
  output: "server",
  adapter: vercel(),
});
