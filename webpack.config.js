var path = require('path');
var webpack = require('webpack');

var nodeModulesPath = path.join(__dirname, 'node_modules');
var isProduction = process.env.NODE_ENV === "production";

var config = {
    entry: {
        vendors: [
            'core-js',
            'react',
            'react-dom',
            'redux'
        ],
        app: [
            path.join(__dirname, 'src', 'index.tsx')
        ]
    },

    resolveLoader: {
        root: nodeModulesPath
    },

    resolve: {
        extensions: ['', '.tsx', '.ts', '.js'],  // TODO: add less/sass, css
        modulesDirectories: ['node_modules']
    },

    output: {
        path: path.join(__dirname, 'app'),
        filename: '[name].js'
    },

    module: {
        // TODO: odkomentovat tslint
        // preLoaders: [
        //     { test: /\.tsx?$/, loader: 'tslint', include: path.resolve(__dirname, 'src') }
        // ],
        noParse: [],
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                include: path.resolve(__dirname, 'src')
            }
            // TODO: add more loaders (css, less, images)
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]

    // TODO: tslint
};

if (isProduction) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        sourceMap: false,
        compressor: {
            warnings: false
        }
    }));
    config.plugins.push(new webpack.DefinePlugin({
        'process.env': { NODE_ENV: '"production' }
    }));
}

module.exports = config;
