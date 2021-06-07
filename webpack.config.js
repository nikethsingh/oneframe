var webpack = require('webpack')
const path = require('path');
const glob = require('glob');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
      filename: 'index.js',
      libraryTarget: "commonjs2",
      path: path.resolve(__dirname, 'lib')
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'object-assign': 'object-assign',
        'styled-components': 'styled-components',
        'react-is': 'react-is'

      },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                        ['@babel/preset-env', { targets: "defaults" }]
                      ]
                    }
                  }
            }
        ]
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    }
}