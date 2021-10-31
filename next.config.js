const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['three'])

module.exports = withPlugins([[withTM]], {
  env: {
    THEME: process.env.THEME,
    INDEX_ELEMENT: process.env.INDEX_ELEMENT,
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        // Fix for https://github.com/pmndrs/react-spring/issues/1078
        test: /react-spring/,
        sideEffects: true,
      },
      {
        test: /\.(png|woff|woff2|eot|ttf)$/,
        type: 'asset/inline'
      },
      {
        test: /\.(obj|glb|gltf)$/,
        exclude: /node_modules/,
        type: 'asset/inline'
      },
      {
        test: /\.(fs|vs)$/,
        exclude: /node_modules/,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    )

    return config
  },
})
