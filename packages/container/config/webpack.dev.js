const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

packageJson.dependencies

const devConfig = {
    mode: "development",
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: "index.html",
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container", // Name for host is not used
            remotes: {
                marketing: "marketing@http://localhost:8081/remoteEntry.js",
            },
            /* shared: [
        'react',
        'react-dom'
      ] */
            shared: packageJson.dependencies,
        }),
    ],
};

module.exports = merge(commonConfig, devConfig)
