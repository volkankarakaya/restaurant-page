const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        bundel:path.resolve(__dirname,'src/index.js')
    },
    output:{
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'dist'),
        assetModuleFilename: '[name][ext]',
        clean:true
    },
    devServer:{
        static:{
            directory: path.resolve(__dirname, 'dist')
        },
        port:3000,
        open:true,
        hot:true,
        compress:true,
        historyApiFallback: true
    },
    devtool:'source-map',

    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/,
                type:'asset/resource',
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                },
            },
        ],
    },

    plugins:[
        new HtmlWebpackPlugin({
            title: 'Restaurant Page',
            filename:'index.html',
        }),
    ],
};