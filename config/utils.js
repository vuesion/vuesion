const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const resolve = (dir) => {
  return path.join(__dirname, '..', dir);
};
const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';
const analyze = process.env.ANALYZE;

module.exports = { resolve, isProd, isDev, analyze, merge, nodeExternals };
