import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    },
    base: "./",
    configureWebpack: {
        plugins: [
            new GoogleFontsPlugin({
                fonts: [{ family: "Poppins" }]
            })
        ]
    }
});
