const webpack = require('webpack');
const dotenv = require('dotenv');
const env = dotenv.config().parsed;

module.exports = {
    entry: './index.js',
    output: {
        path: `${__dirname}/`,
        filename: 'script.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: 'usage',
                                    corejs: {
                                        version: 3,
                                        proposals: false
                                    }
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    target: ['web', 'es5'],
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(env)
        })
    ],
    // mode: 'development',
    mode: 'production'
};
