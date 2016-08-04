var path = require('path');
var webpack = require('webpack');

var nodeModulesPath = path.join(__dirname, 'node_modules');

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
        filename: 'assets/[name].js'
    },

    module: {
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
        new webpack.optimize.CommonsChunkPlugin('vendors', 'assets/vendors.js'),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: false,
            compressor: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],

    tslint: {
        emitErrors: true,
        formattersDirectory: path.join(nodeModulesPath, 'tslint-loader', 'formatters')
    }
};

module.exports = config;
