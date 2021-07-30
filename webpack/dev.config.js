const merge = require('webpack-merge');
const path = require('path');
const webpackShellPlugin = require('webpack-shell-plugin');
const baseConfig = require('./base.config');

const filename = 'editable.ui.dev.bundle.js';

module.exports = merge(baseConfig, {
  devtool: 'inline-source-map',
  mode: 'development',
  optimization: {
    minimize: false,
  },
  stats: {
    colors: true,
  },
  output: {
    path: path.resolve(__dirname, '../../w3o-whatfix-dashboard-editor-common/war/lib/js/'),
    filename,
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/,
  },
  plugins: [
    new webpackShellPlugin({
      dev: false,
      onBuildEnd: [
        // 'chmod +x scripts/postbuild_dev.sh',
        // `scripts/postbuild_dev.sh`,
      ],
    }),
  ],
});
