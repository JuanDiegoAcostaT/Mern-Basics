const HtmlWebpackPlugin = require('html-webpack-plugin');
const liveReload = require('webpack-livereload-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    entry: './src/client/index.js',
    output: {
        path: '/' ,
        filename: 'bundle.js',
    },
    
    module : {
        rules: [

            {
                use : 'babel-loader',
                test : /\.js|jsx$/,
                exclude : /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    //  MiniCssExtractPlugin.loader,
                    // 'css-loader',
                    // 'sass-loader',
                    // 'style-loader',
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader : 'css-loader', options : {
                            sourceMap : true,
                        }
                    },
                    {
                        loader : 'sass-loader', options : {
                            sourceMap : true,
                    }
                }
            ]
            },
        ]
    },

    plugins : [
        new HtmlWebpackPlugin({
            template : './src/client/index.html',
        }),
        new liveReload()
        // new MiniCssExtractPlugin({
        //     filename: 'css/[name]-styles.css'
        //   }),
    ]
}