const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: ["./index.js","./node_modules/lodash/lodash.js"],
    devtool: 'source-map',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        })
    ],
    watch:true
};