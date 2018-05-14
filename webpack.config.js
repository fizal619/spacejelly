const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './src/canvas.js',
    output: {
        path: __dirname + '/dist',
        filename: 'canvas.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] },
            files: ['./dist/*']
        }),
    ],
    watch: true,
    devtool: 'source-map'
};