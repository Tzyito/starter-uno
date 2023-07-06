import { defineConfig, presetUno, presetAttributify } from "unocss";

export default defineConfig({
  presets: [presetUno({ attributifyPseudo: true }), presetAttributify()],
});
