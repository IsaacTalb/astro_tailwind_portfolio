import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
import markdocConfig from "./markdoc.config.js";
import tailwind from "@astrojs/tailwind";

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
});
