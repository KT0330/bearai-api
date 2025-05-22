import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import fs from "fs";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  publicDir: path.resolve(import.meta.dirname, "client/public"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/client"),
    emptyOutDir: true,
    rollupOptions: {
      plugins: [
        {
          name: "copy-redirects",
          closeBundle() {
            const src = path.resolve(import.meta.dirname, "client/_redirects");
            const dest = path.resolve(
              import.meta.dirname,
              "dist/client/_redirects",
            );
            if (fs.existsSync(src)) {
              fs.copyFileSync(src, dest);
              console.log("✅ _redirects copied to dist/client/");
            } else {
              console.warn("⚠️ _redirects file not found in client/");
            }
          },
        },
      ],
    },
  },
});
