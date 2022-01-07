const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCSSPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode: "development",
    entry: './src/App.js',
    output: {
        filename: "index.bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        port: 9000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    miniCSSPlugin.loader,
                    {loader:"css-loader",options:{modules:true}},
                    // "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              }
        ]
    },
    plugins: [
        new miniCSSPlugin(),
        new HtmlWebpackPlugin({
        template: "./public/index.html"
    })]

}