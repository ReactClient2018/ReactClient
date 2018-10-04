const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
template:'./public/index.html',
filename:'index.html',
inject:'body'
})
module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.resolve('public'),
        filename: 'index_bundle.js'
    },
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        alias: {
            'components': path.resolve(__dirname, './src/app/components/'),
            'utils': path.resolve(__dirname, './src/app/utils/'),
            'actions':path.resolve(__dirname, './src/app/actions/'),
            'containers':path.resolve(__dirname, './src/app/containers/App/App.jsx'),
            'variables':path.resolve(__dirname, './src/app/variables/styles.jsx'),
            'views':path.resolve(__dirname, './src/app/views')

        }
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.png$/,
                use: 'url-loader?limit=100000'
            },
            {
                test: /\.jpg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'public/assets/images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [HtmlWebpackPluginConfig]
}
