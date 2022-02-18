module.exports = {
    "globals": {
        "$": true
    },
    "env": {
        "jquery": true,
     },
    parserOptions: {
      parser: 'babel-eslint'
    },
    extends: [
      'plugin:vue/recommended',
      'standard'
    ],
    plugins: [
      'vue'
    ]
  }