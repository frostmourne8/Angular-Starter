'use strict';

const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {

    devtool: 'inline-source-map',

    resolve: {
        alias: {
            'tests': path.resolve(commonConfig.rootDir, 'tests')
        }
    },

    module: {
        preLoaders: [
            lintLoader()
        ],
        loaders: [
            assets(),
            testTranspileLoader()
        ],
        postLoaders: [
            coverageLoader()
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],

    tslint: {
        emitErrors: true
    }
});

function lintLoader() {
    return { exclude: /node_modules/, loader: 'tslint', test: /\.ts$/ };
}

function assets() {
    return {
        test: commonConfig.resourcePattern,
        loader: 'null'
    };
}

function testTranspileLoader() {
    return {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: [/node_modules/],
        query: {
            sourceMap: false,
            inlineSourceMap: true,
            compilerOptions: {
                removeComments: true
            }
        }
    }
}

function coverageLoader() {
    return {
                test: /\.ts$/,
                loader: 'istanbul-instrumenter-loader',
                include: [
                    /public/
                ]
            };
}