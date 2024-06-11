const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = function override(config, env) {
  // Adiciona os fallbacks necessários
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "path": require.resolve("path-browserify"),
    "fs": false,
    "tls": false,
    "net": false,
    "zlib": false,
    "http": false,
    "https": false,
    "stream": false,
    "crypto": false,
    "crypto-browserify": require.resolve('crypto-browserify'),
    "os": require.resolve('os-browserify/browser'),
  };
  
  // Adiciona o plugin de polyfill
  config.plugins.push(new NodePolyfillPlugin());

  // Adiciona o plugin dotenv-webpack
  config.plugins.push(new Dotenv({
    systemvars: true
  }));

  return config;
};

