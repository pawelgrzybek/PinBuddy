import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./src/manifest.json";

export default defineConfig({
  plugins: [
    // React 16.5 has no automatic JSX runtime, so use the classic runtime
    // (matches the `import React from "react"` in every component).
    react({ jsxRuntime: "classic" }),
    crx({ manifest })
  ],
  resolve: {
    alias: {
      theme: resolve(__dirname, "src/theme"),
      "redux-popup": resolve(__dirname, "src/popup/redux"),
      "redux-options": resolve(__dirname, "src/options/redux")
    }
  }
});
