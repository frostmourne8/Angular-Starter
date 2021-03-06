'use strict';

const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common');

const appDir = path.resolve(commonConfig.rootDir, 'public');
const bundlesDir = path.resolve(appDir, 'bundles');

module.exports = webpackMerge(commonConfig, {

    entry: {
        'app': path.resolve(bundlesDir, 'main'),
        'dependencies': path.resolve(bundlesDir, 'dependencies')
    },

    module: {
        loaders: [
            assets(),         
            applicationCode()            
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app'],
            minChunks: Infinity
        }),        

        new HtmlWebpackPlugin({
            template: path.resolve(appDir, 'index.html')
        })
    ]
});

function applicationCode() {
    return { test: /\.ts$/, exclude: /node_modules/, loaders: ['ng-annotate', 'awesome-typescript-loader'] };
}

function assets() {
    return {
        test: commonConfig.resourcePattern,
        loader: 'file?name=[path][name].[ext]&context=public/'
    };
}