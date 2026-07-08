import { resolve } from "path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// Standalone Vitest config — deliberately does NOT include the crx() plugin, so
// running tests never triggers extension bundling. Aliases mirror vite.config.js.
export default defineConfig({
  plugins: [react({ jsxRuntime: "classic" })],
  resolve: {
    alias: {
      theme: resolve(__dirname, "src/theme"),
      "redux-popup": resolve(__dirname, "src/popup/redux"),
      "redux-options": resolve(__dirname, "src/options/redux")
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./config/vitest.setup.js"],
    // CSS imports are side-effect-only in components; don't process them in tests
    // (mirrors the old jest \.css$ -> empty-module mock).
    css: false
  }
});
