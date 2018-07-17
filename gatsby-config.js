module.exports = {
  siteMetadata: {
    title: 'Äpy',
    description: 'Äpy - Neljä kirjainta joihin voit luottaa!',
    keywords: 'Äpy, vappulehti, teekkarit',
    url: 'https://www.äpy.fi'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/assets/images`
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
    `gatsby-transformer-remark`,
    'gatsby-transformer-sharp'
  ]
};
