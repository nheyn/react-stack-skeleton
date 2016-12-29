import path from 'path';
import { DefinePlugin } from 'webpack';

export default {
  entry: [
    'babel-polyfill',
    path.join(__dirname, './src/client.js'),
  ],
  output: {
    path: path.join(__dirname, './public'),
    filename: "app.js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [
          /(node_modules|lib|flow-typed|public|__tests__)/,
          path.join(__dirname, './src/server.js'),
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify(process.env.NODE_ENV),
       },
    }),
  ],
};
