module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img-carousel',
        path: `${__dirname}/assets/images/ävyt/carousel`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img-grid',
        path: `${__dirname}/assets/images/ävyt/grid`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown/`
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024
            }
          }
        ]
      }
    }
  ]
};
