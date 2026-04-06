import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    return {
        base: `/${env.VITE_REPO_NAME}/`,
        plugins: [vue(), tailwindcss()],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
                vmdi: path.resolve(
                    __dirname,
                    "node_modules/vue-material-design-icons",
                ),
            },
        },
    };
});
