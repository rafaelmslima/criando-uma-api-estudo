import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Mantém o suporte ao ambiente do navegador
        ...globals.node // Adiciona suporte ao ambiente Node.js
      },
      sourceType: "module", // Se estiver usando ES Modules
    },
  },
  pluginJs.configs.recommended,
];
