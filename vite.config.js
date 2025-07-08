import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "src/background.js", dest: "." }, // only copy background
      ],
    }),
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "index.html"),
        content: resolve(__dirname, "src/content.entry.js"),
      },
      output: {
        entryFileNames: (chunk) => {
          if (chunk.name === "content") return "content.js";
          return "[name].js";
        },
      },
    },
  },
});
