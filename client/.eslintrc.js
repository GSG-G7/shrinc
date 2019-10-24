module.exports = {
    extends: ["airbnb", "prettier", "prettier/react"],
    // babel-eslint parser is used to support experimental features not supported in ESLint itself yet
    parser: "babel-eslint",
    parserOptions: {
      ecmaVersion: 2018,
      ecmaFeatures: {
        impliedStrict: true //enable global strict mode (if ecmaVersion is 5 or greater)
      }
    },
    env: {
      browser: true,
      node: true,
      jest: true
    },
    rules: {
      //  allow .js extensions for JSX.
      "jsx-a11y/interactive-supports-focus": 0,
      "jsx-a11y/click-events-have-key-events": 0,
      "react/jsx-filename-extension": [
        1,
        {
          extensions: [".js", ".jsx"]
        }
      ],
      quotes: [
        2,
        "single",
        {
          avoidEscape: true, // allows strings to use single-quotes or double-quotes so long as the string contains a quote that would have to be escaped otherwise
          allowTemplateLiterals: true // allows strings to use backticks
        }
      ],
      // configure the prettier plugin
      "prettier/prettier": [
        "error",
        {
          trailingComma: "es5",
          singleQuote: true
        }
      ]
    },
    plugins: ["prettier"]
  };
  