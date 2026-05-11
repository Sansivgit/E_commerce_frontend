// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnv } from "vite";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, "");
  const proxyTarget =
    env.VITE_BACKEND_ORIGIN?.trim().replace(/\/$/, "") ||
    "http://localhost:5000";

  return {
    tanstackStart: {
      server: { entry: "server" },
    },
    /** Dev: `/api/*` → `VITE_BACKEND_ORIGIN` from `.env` (default Express :5000). */
    vite: {
      server: {
        proxy: {
          "/api": {
            target: proxyTarget,
            changeOrigin: true,
          },
        },
      },
    },
  };
});
