const path = require('path');
module.exports = {
  entry: {
    'app': './main.tsx',
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  externals: {
    // '@firebase/app': '@firebase/app',
    // '@firebase/auth': '@firebase/auth',
    // '@firebase/firestore': '@firebase/firestore',
    'firebaseui': 'firebaseui'
  },
  module: {
    rules: [
      { test: /.tsx?$/, loader: 'ts-loader' }
    ]
  },
  devtool: "source-map",
  devServer: {
  }
}