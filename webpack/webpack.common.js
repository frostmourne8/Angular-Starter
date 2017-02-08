'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootDir = path.resolve(__dirname, '..');
const appDir = path.resolve(rootDir, 'public');
const bundlesDir = path.resolve(appDir, 'bundles');

const resourcePattern = /\.(png|jpe?g|gif|svg|ico)$/;

module.exports = {

    rootDir: rootDir,
    resourcePattern: resourcePattern,

    resolve: {
        extensions: ['', '.ts', '.js'],
        root: appDir
    },

    module: {
        loaders: [
            html(),
            applicationStyles(),
            applicationTemplates()
        ]
    },
    
    plugins: [
        new webpack.ProvidePlugin({   
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
};

function html() {
    return { test: /\.html$/, loader: 'html' };
}

function applicationTemplates() {
    return { test: /\.ts$/, exclude: /node_modules/, loader: 'angular2-template-loader' };
}

function applicationStyles() {
    return { test: /\.css$/, include: appDir, loader: "style-loader!css-loader" };
}