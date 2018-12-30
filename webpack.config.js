const path = require("path");

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: './public'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
}