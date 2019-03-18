const webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        loader: "style-loader"
      },
      {
        test: /\.(css|scss)$/,
        loader: "css-loader",
        query: {
          modules: true,
          localIdentName: "[name]__[local]___[hash:base64:5]"
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss', '.css', '.sass']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}