// 2021-02-04 https://webpack.js.org/guides/production#setup
const common = require('./webpack.common.js');
const {merge} = require('webpack-merge');
module.exports = merge(common, {mode: 'production'});