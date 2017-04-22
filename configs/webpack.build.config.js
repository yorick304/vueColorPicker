'use strict'
const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const autoprefixer = require('autoprefixer')
const px2rem = require('postcss-px2rem')
const fs = require('fs')
const path = require('path')

const fileNameTransfer = fileName => fileName.match(/[A-Z][a-z]*/g).map((e) => e.toLowerCase()).join('-')

const generateEntrys = () => {
  let component = fs.readdirSync('component')
  let entrys = {
    'index': path.resolve(__dirname, '../src/index.js'),
  }
  if(component) {
    component.forEach((e) => {
      if(fs.statSync(`component/${e}`).isDirectory()) {
      entrys[fileNameTransfer(e)] = path.resolve(__dirname, `../component/${e}/index.js`)
    }
  })
    return entrys
  }
}

module.exports = {
  entry: generateEntrys(),
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs2: 'vue',
      amd: 'vue',
      commonjs: 'vue'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
          eslint: {
            configFile: '../.eslintrc.json'
          }
        }
      },
      {
        test: /\.vue$/,
        loaders: [{
          loader: 'vue-loader',
          options: {
            postcss: []
          }
        }]
      },
      {
        test: /\.(scss|sass)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|svg)(\?t=\d+)?$/,
        loaders: [{
          loader: 'url-loader?limit=8192&name=[name]-[hash].[ext]'
        }]
      }
    ]
  },
  plugins: [
    new CleanPlugin(['lib'], {
      root: path.resolve(__dirname, '../'),
    })
  ]
}

if(process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false,
    },
    compress: {
      warnings: false
    }
  }))
}else {
  module.exports.devtool = 'eval-source-map'
}
