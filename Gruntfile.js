
/* jshint node: true */
"use strict";

var webpack = require("webpack");

module.exports = function (grunt) {
    grunt.initConfig({
        webpack: {
            options: {
                module: {
                    loaders: [{
                        test: /\.js$/,
                        loader: '6to5-loader'
                    }]
                },
                output: {
                    path: __dirname + "/dist",
                    filename: "bundle.js",
                    sourceMapFilename: "bundle.js.map",
                },
                devtool: '#source-map',
            },
            prod: {
                entry: "./js/app.js",
                plugins: [new webpack.optimize.UglifyJsPlugin()]
            },
            dev: {
                entry: "./js/app.js",
                plugins: []
            },
        },
    });

    grunt.loadNpmTasks("grunt-webpack");

    grunt.registerTask("prod", ["webpack:prod"]);
    grunt.registerTask("dev",  ["webpack:dev"]);
};
