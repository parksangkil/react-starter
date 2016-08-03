var webpack = require('webpack');
var { Config } = require('webpack-config');
var path = require('path');

var mainConfig = new Config().extend('webpack.config');

var devConfigExtension = {
    entry: {
        app: [
            // We are using next two entries for hot-reload
            'webpack-dev-server/client?http://localhost:3333',
            'webpack/hot/only-dev-server',
        ].concat(mainConfig.entry.app)
    },

    output: {
        filename: '[name].js',
        publicPath: "http://localhost:3333/assets/"
    },

    resolve: {
        alias: mainConfig.resolve.alias
    },

    devtool: 'eval-source-map',

    // watch: true,

    module: {
        loaders: [
            { test: /\.tsx?$/, loaders: ['react-hot', 'ts-loader'], include: path.resolve(__dirname, 'src') }
            // TODO: add more loaders
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    ts: {
        compilerOptions: {
            sourceMap: true
        }
    }
};

mainConfig.module.loaders = [];
mainConfig.resolve.alias = {};
mainConfig.plugins = [];

module.exports = mainConfig.merge(devConfigExtension);
