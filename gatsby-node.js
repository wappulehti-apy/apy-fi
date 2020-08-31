// Initialize .env file
require('dotenv').config();

// Netlify redirect rules
exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `https://www.xn--py-uia.fi/*`,
    toPath: `https://www.apy.fi/:splat`,
    isPermanent: true,
  });

  // createRedirect({
  //   fromPath: `/osta`,
  //   toPath: `https://osta.apy.fi/`,
  //   isPermanent: true,
  // });
};

// Required for emotion (css in js lib) to work
exports.onCreateBabelConfig = ({ actions: { setBabelPlugin } }) => {
  setBabelPlugin({ name: 'babel-plugin-emotion' });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
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
      ],
    },
    devtool: 'source-map',
  });
};
