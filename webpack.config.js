module.exports = {
    entry: `./webpack/index.js`,
    output: {
        path: `${__dirname}/dist/js`,
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
                                '@babel/preset-env', {
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
    // mode: 'development',
    mode: 'production'
};
