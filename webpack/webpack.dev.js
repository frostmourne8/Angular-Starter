'use strict';

const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const deployedConfig = require('./webpack.deployed');
const distDir = path.resolve(deployedConfig.rootDir, 'public');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

const DEV_ENDPOINTS = ['/users'];
const PROXY_TARGET = {host: "localhost", protocol: 'http:', port: 3000};

module.exports = webpackMerge(deployedConfig, {

    debug: true,

    devServer: {
        contentBase: distDir,     
        port: 9000,
        inline: false,
        proxy: createDevProxy()
    },
    
    output: {
        filename: '[name].js',
        path: distDir
    },

    plugins: [ new webpack.SourceMapDevToolPlugin() ]
});

function createDevProxy() {
    let proxy = {};
    DEV_ENDPOINTS.forEach((endpoint) => {
        proxy[endpoint] = {target: PROXY_TARGET};
    });

    return proxy;
}