var webpack = require('webpack')
const path = require('path');
var glob = require('glob');

module.exports = {
    entry: glob.sync('./app/**/!(*index).{js,jsx}').reduce(function(obj, el){
      obj[path.parse(el).name] = el;
      return obj
   },{}),
    output: {
        filename: "[name].js",
        libraryTarget: "umd",
        path: path.resolve(__dirname, 'lib'),
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
                exclude: [/node_modules/,path.resolve(__dirname,'app/index.js')],
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
    }
}