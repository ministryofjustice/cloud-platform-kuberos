var path = require('path')
var webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
var mode = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [
    './src/main.js'
  ],
  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      },
      {
        test: /\.mjs$/i,
        resolve: { byDependency: { esm: { fullySpecified: false } } },
      },
    ]
  }, 
  devServer: {
    static: __dirname
  },  
  devtool: (mode === 'development') ? 'inline-source-map' : false,
  mode: mode,
  performance: {
    hints: false
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery'
    }),
    new VueLoaderPlugin(),
  ]
}
if (mode === 'production') {
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
  ])
}