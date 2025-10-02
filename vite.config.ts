import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// removed lovable-tagger import (watermark) per project cleanup

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // IMPORTANT: set `base` to your repository name when deploying to
  // GitHub Pages at https://<user>.github.io/<repo>/
  // If your repo name changes, update this value.
  base: '/hook-todo-charm/',

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
