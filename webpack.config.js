const webpack             = require('webpack')
const path                = require('path')
const CleanWebpackPlugin  = require('clean-webpack-plugin')
const UglifyJsPlugin      = require('uglifyjs-webpack-plugin')

var config = {

  entry: [
    'babel-polyfill',
    './src/scripts/main.js'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'scripts/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: [
                [ 'env', { 'modules': false } ],
                'stage-3'
              ]
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([
      'scripts/*.*'
    ], {
      root: path.resolve(__dirname, './dist'),
      verbose: true
    })
  ]

}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    let rules = [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader'
          }
        ]
      }
    ]
    rules.map(rule => {
      config.module.rules.push(rule)
    })

    let plugins = [
      new webpack.HotModuleReplacementPlugin()
    ]
    plugins.map(plugin => {
      config.plugins.push(plugin)
    })

    config.devServer = {
      historyApiFallback: true,
      noInfo: true,
      overlay: {
      warnings: true,
        errors: true
      },
      hot: true,
      host: '0.0.0.0',
        port: 8000,
        disableHostCheck: true,
        // open: true,
      // contentBase: './dist',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }

    config.stats = {
      colors: true
    }
    console.log('Starting dev server...')
    console.log('Listening at http://localhost:8000')
  }

  if (argv.mode === 'production') {
    let plugins = [
      new webpack.HashedModuleIdsPlugin(),
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      })
    ]
    plugins.map(plugin => {
      config.plugins.push(plugin)
    })
  }

  return config
}
