/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compiler: {
    emotion: true,
  },
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
        type: 'asset',
      },
      {
        test: /\.(obj|glb|gltf)$/,
        exclude: /node_modules/,
        type: 'asset',
      },
      {
        test: /\.(fs|vs)$/,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    )

    return config
  },
}

export default nextConfig
