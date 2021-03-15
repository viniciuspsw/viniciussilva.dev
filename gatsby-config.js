/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Vinícius Silva',
    siteUrl: 'https://viniciuss.com',
    author: 'Vinícius Silva',
    description: `Hey, nice to meet you! My name's Vinícius, I'm a brazilian software developer in love with NodeJS and ReactJS. Currently studying Golang but always trying new things and looking for challenges 🚀`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
      },
    },
  ],
}
