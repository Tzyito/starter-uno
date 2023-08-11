import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS()],
  // build: {
  //   lib: {
  //     entry: resolve(__dirname, "./src/main.ts"),
  //     name: "starter-uno",
  //     formats: ["es", "cjs"],
  //   },
  //   rollupOptions: {
  //     // 除外不想打包进库的依赖
  //     // external: ["vue"],
  //     output: {
  //       // 在UMD构建模式下为这些外部化依赖提供一个全局变量
  //       globals: {
  //         vue: "Vue",
  //       },
  //       name: "use.js",
  //     },
  //   },
  //   terserOptions: {
  //     mangle: false,
  //     format: {
  //       beautify: true,
  //     },
  //   },
  //   cssCodeSplit: false,
  // },
});
