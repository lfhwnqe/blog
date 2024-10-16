const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './modules/react16/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: false }],
              ['@babel/preset-react', {
                pragma: 'React.createElement',
                pragmaFrag: 'React.Fragment'
              }]
            ]
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react': path.resolve(__dirname, 'modules/react16/entry.js'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};