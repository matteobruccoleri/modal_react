import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.js",
      name: "Modal",
      fileName: (format) =>
        format === "es" ? "modal-react.es.js" : "modal-react.cjs",
      formats: ["es", "cjs"],
    },
    copyPublicDir: false,
    emptyOutDir: true,
    rollupOptions: {
      external: ["react", "react-dom", "styled-components", "prop-types"],
    },
  },
});