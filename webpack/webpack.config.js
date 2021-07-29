const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = (envVariable) => {
  const { env } = envVariable;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(common, envConfig);
  return config;
};
