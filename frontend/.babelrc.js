module.exports = {
  "presets": [
      [
          "@babel/preset-env",
          {
              "useBuiltIns": "usage",
              "corejs": "2.6.9",
              "modules": false,
              "targets": {
                  "browsers": "last 2 versions, not ie <= 9"
              }
          }
      ]
     
  ],
 
  "plugins": [
      [
          "@babel/plugin-transform-runtime"
      ]
  ]
}