const path= require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
    mode: 'development',
    entry:"./src/index.js",
    devtool:"inline-source-map",
    output:{
        filename:"[name].[contenthash].js",
        path:path.resolve(__dirname,"dist"),
        clean:true
    },
    devServer: {
        port: 8080
      },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:["style-loader","css-loader","sass-loader"],

            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
          template: "./src/index.html",
        }),
        new miniCssExtractPlugin({
          filename: "[name].[contenthash].css",
        }),
      ],
      

}