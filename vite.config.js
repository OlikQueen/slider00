import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  base: "./",
  outDir: "./dist",
  build: {
    lib: {
      // entry: mode === "production" && resolve(__dirname, "main-publish.js"),
      entry: resolve(__dirname, 'main.js'),
      name: "slider00",
      fileName: "slider00",
    },
    rollupOptions: {
      output: {
        assetFileNames: "slider00.[ext]",
      },
    },
  },
  emptyOutDir: false,
}));
