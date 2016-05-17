var path = require('path');
var webpack = require('webpack');

var assetsPath = path.join(__dirname, 'public/assets');
var distPath = './dist';

module.exports = {
    entry: './app/components/Main.js',
    output: {
        path: distPath,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
             {
                 test: /\.jsx?$/,
                 exclude: /(node_modules|bower_components)/,
                 loader: 'babel',
                 query: {
                     presets: ['react', 'es2015']
                 }
             }, {
               test: /\.scss$/,
               exclude: /(node_modules|bower_components)/,
               loaders: ['style', 'css', 'sass']
           }, {
               test: /\.(jpe?g|png|gif|svg)$/i,
               loaders: [
                   'file?hash=sha512&digest=hex&name=[hash].[ext]',
                   'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
               ]
           }
        ]
    }
};
