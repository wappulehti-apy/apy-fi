const path = require('path');

// Initialize .env file
require('dotenv').config();

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  // need createRedirect action in actions collection
  // to make the redirection magic happen.
  // https://www.gatsbyjs.org/docs/bound-action-creators/
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `https://www.xn--py-uia.fi/*`,
    toPath: `https://www.apy.fi/:splat`,
    isPermanent: true,
  });
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
          test: /\.(obj|glb)$/,
          exclude: /node_modules/,
          use: 'url-loader',
        },
        {
          // Used to load modules from the three.js examples folder
          test: /three\/examples\/js/,
          use: 'imports-loader?THREE=three',
        },
        {
          test: /\.(fs|vs)$/,
          exclude: /node_modules/,
          use: 'raw-loader',
        },
      ],
    },
    resolve: {
      alias: {
        'three-examples': path.join(
          __dirname,
          './node_modules/three/examples/js'
        ),
      },
    },
    devtool: 'source-map',
  });
};
