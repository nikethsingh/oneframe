var webpack = require('webpack')
module.exports = {
    entry: {
        entry: __dirname + '/src/index.js'
    },
    output: {
        filename: 'oneframe/index.js',
        libraryTarget: "umd"
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
        'object-assign': 'object-assign',
        'styled-components': 'styled-components',
        'react-is': 'react-is'

      },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
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