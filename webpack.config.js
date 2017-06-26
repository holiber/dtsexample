module.exports = {
  entry: './index.ts',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },

  devtool: 'sourcemap',

  resolve: {
      extensions: ['.js', '.jsx']
  },

  module: {

    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
