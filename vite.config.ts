
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

export default defineConfig({
  base: "/iwamad-sis2-blog/",
  plugins: [
    react(),
    {
      name: "copy-index-for-github-pages-404",
      closeBundle() {
        const docs = resolve(process.cwd(), "docs");
        copyFileSync(
          resolve(docs, "index.html"),
          resolve(docs, "404.html")
        );
      }
    }
  ],
  build: {
    outDir: "docs",
    emptyOutDir: true
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    globals: true
  }
});
