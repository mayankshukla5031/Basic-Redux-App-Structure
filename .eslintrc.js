module.exports = {
  extends: ["react-app", "airbnb"],
  plugins: ["react", "jsx-a11y", "import"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "jsx-a11y/href-no-hash": "off",
    semi: ["error", "never"],
    indent: 2,
    "arrow-parens": ["error", "as-needed"],
    "no-underscore-dangle": ["error", { allow: ["_links", "_embedded"] }],
    'comma-dangle': [
      'error',
      {
        functions: 'ignore',
        objects: 'always-multiline',
        arrays: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    'react/jsx-no-bind': ['warn', {}],
  },
}