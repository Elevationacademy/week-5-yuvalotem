const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: "./dist/main.js",
    output: {
        filename: 'bundel.js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    })]
}