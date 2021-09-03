const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/js/main.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        environment: {
            module: true,
            dynamicImport: true,
        },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),

    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader',
                options: {
                    name: 'audio/[name].[ext]',
                }
            },
            {
                test: /\.mp4$/,
                use: [
                    {
                        loader: "file-loader?name=video/[name].[ext]",

                    }
                ]

            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: ['file-loader?name=images/[name].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        options: {

                            mozjpeg: {
                                progressive: true,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            },
                        }
                    },
                ],

            }
        ]
    },

}