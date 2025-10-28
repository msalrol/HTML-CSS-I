module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: [
    "stylelint-scss",
    "stylelint-selector-bem-pattern"
  ],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,

    // Variables Sass
    "scss/dollar-variable-pattern": "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",

    // Patrón BEM
    "plugin/selector-bem-pattern": {
      "componentName": "[a-z]+",
      "componentSelectors": {
        "initial": "^\\.{componentName}(?:__([a-z0-9]+))?(?:--([a-z0-9]+))?$"
      },
      "utilitySelectors": "^\\.u-[a-z0-9]+$"
    },

    "color-no-invalid-hex": true,
    "block-no-empty": true,
    "unit-allowed-list": ["em", "rem", "%", "s", "px", "deg", "vw", "vh"], // actualizada (antes era whitelist)
    "property-no-unknown": [true, { "ignoreProperties": ["composes"] }],
    "max-nesting-depth": 4
  },
  ignoreFiles: ["dist/**", "node_modules/**"]
};
