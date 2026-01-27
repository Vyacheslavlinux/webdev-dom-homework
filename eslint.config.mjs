import pluginJs from "@eslint/js";
import globals from "globals";

import config from "eslint-config-prettier"
import plugin, { languageOptions } from "eslint-plugin-prettier/recommended"


export default[{languageOptions: { globals: globals.browser}},
  pluginJs.configs.recommended,
  config,
  plugin
];