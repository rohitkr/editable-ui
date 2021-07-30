const merge = require('webpack-merge');
const path = require('path');
const webpackShellPlugin = require('webpack-shell-plugin');

// const outputFileName = `WhatfixMiddleware-[contenthash].bundle.js`;
const outputFileName = 'editable.ui.dev.bundle.js';

const TerserPlugin = require('terser-webpack-plugin');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js$/,
        extractComments: 'all',
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  output: {
    path: path.resolve(__dirname, '../../w3o-whatfix-dashboard-editor-common/war/lib/js/'),
    // path: path.resolve(__dirname, '../build/js/'),
    filename: outputFileName,
  },
  plugins: [
    new webpackShellPlugin({
      // onBuildStart: [`chmod +x scripts/prebuild.sh`, `scripts/prebuild.sh`],
      // onBuildEnd: ['chmod +x scripts/postbuild.sh', `scripts/postbuild.sh`],
    }),
  ],
});
