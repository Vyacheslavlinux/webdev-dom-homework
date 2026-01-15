import pluginJs from "@eslint/js";
import globals from "globals";
// import { defineConfig } from "eslint/config";
import config from "eslint-config-prettier"
import plugin, { languageOptions } from "eslint-plugin-prettier/recommended"

// export default defineConfig([
  // { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
// ]);
export default[{languageOptions: { globals: globals.browser}},
  pluginJs.configs.recommended,
  config,
  plugin
];