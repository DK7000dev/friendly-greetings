import { defineConfig } from "vite";

export default defineConfig({
  server: { host: "::", port: 8080 },
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        app: "app/index.html",
      },
    },
  },
});
