const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function () {
  let plugins = [];
  plugins.push(new UglifyJsPlugin());

  return {
    entry: {
      // Array syntax to workaround https://github.com/webpack/webpack/issues/300
      'index': ['./index.src.js'],
    },

    module: {
      rules: [
        {
          test: /\.js$/,

          use: {
            "transform": {
              "^.+\\.js?$": "babel-jest"
            },

            loader: 'babel-loader',
            options: {
              presets: ['env', 'stage-2'],
              plugins: ["add-module-exports","syntax-dynamic-import", "transform-runtime"]
            }
          }
        }
      ]
    },
    plugins: plugins,
    resolve: {
      modules: [
        "node_modules"
      ]
    },
    output: {
      filename: 'index.js',
      libraryTarget: 'umd',
      library: '[name]'
    }
  }
};
