import { resolve as _resolve, join } from 'path';

export const entry = './src/index.js';
export const output = {
  path: _resolve(__dirname, 'dist'),
  filename: 'bundle.js',
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
  ],
};
export const resolve = {
  extensions: ['.js', '.jsx'],
};
export const devServer = {
  static: {
    directory: join(__dirname, 'public'),
  },
  compress: true,
  port: 3000,
};
