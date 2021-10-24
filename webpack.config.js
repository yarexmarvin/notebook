const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, "/build"),
        filename: '[name].bundle.js',
        chunkFilename: 'part[name].bundle.js',
        clean: true
    },
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin({ minimizerOptions: { options: { preset: ["default"] } } }), new TerserPlugin({
            terserOptions: {
                format: {
                    comments: false,
                },
            },
            extractComments: false,
            parallel: true,
        })],
        // runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: ['file-loader?name=[name].[ext]'] 
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
     plugins: [
         new CleanWebpackPlugin(),
         new HtmlWebpackPlugin({
             template: "./public/index.html",
             filename: './index.html',
             manifest: "./public/manifest.json",
             favicon: './public/favicon.ico'
         }),
         new ImageMinimizerPlugin({
            minimizerOptions: {
                plugins: [
                    ['gifsicle', { interlaced: true }],
                    ['jpegtran', { progressive: true }],
                    ['optipng', { optimizationLevel: 5 }],
                ],
            },
        }),
        new MiniCssExtractPlugin(),
     ]
}