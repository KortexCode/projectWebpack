const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {//Identifica las diferentes extesiones que tiene el proyecto, osea los .algo
        extensions:[".js"]
    },
    module: {
        rules: [ 
            {
                test: /\.js?$/, //utilizar extensiones de archivo .js
                exclude: /node_modules/, //excluir esta carpeta
                use: {
                    loader: 'babel-loader',//uso del loader
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html',
        })
    ]
}
