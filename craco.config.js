const webpack = require('webpack');

module.exports = {
  node: {
    Buffer: true,
  },
  webpack: {
    configure: {
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
        }),
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
      ],
      resolve: {
        fallback: {
          fs: false,
          tls: false,
          buffer: require.resolve("buffer"),
          net: false,
          path: false,
          zlib: false,
          http: false,
          https: false,
          child_process: false,
          readline: false,
          stream: false,
          os: false,
          crypto: require.resolve("crypto-browserify"),
          "crypto-browserify": require.resolve("crypto-browserify"),
        },
      },
    },
  },
};
