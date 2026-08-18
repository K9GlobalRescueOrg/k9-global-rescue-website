import { defineConfig } from "astro/config";

export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/k9-global-rescue-website/" : "/",
  output: "static",
  vite: {
    server: {
      allowedHosts:
        process.env.ALLOWED_HOSTS === "all"
          ? true
          : (process.env.ALLOWED_HOSTS?.split(",") ?? [])
    }
  },
  build: {
    format: "directory"
  }
});
