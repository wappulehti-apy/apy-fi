const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@react-three/drei', 'three'])

module.exports = withPlugins([[withTM]], {
  target: 'serverless',
  env: {
    THEME: process.env.THEME,
    INDEX_ELEMENT: process.env.INDEX_ELEMENT,
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on fs module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      }
    }

    config.module.rules.push(
      {
        // Fix for https://github.com/pmndrs/react-spring/issues/1078
        test: /react-spring/,
        sideEffects: true,
      },
      {
        test: /\.(png|woff|woff2|eot|ttf)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(obj|glb|gltf)$/,
        exclude: /node_modules/,
        use: 'url-loader',
      },
      {
        test: /\.(fs|vs)$/,
        exclude: /node_modules/,
        use: 'raw-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    )

    return config
  },
})
