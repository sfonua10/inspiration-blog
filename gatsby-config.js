module.exports = {
  siteMetadata: {
    title: "Gospel Inspiration Blog",
    description:
      "Inspired articles to help us draw nearer to Jesus Christ and become better people",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "yxxgm8gx",
        dataset: "production",
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.MY_SANITY_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images'
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-image",
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static'
      }
    }
  ],
}

// module.exports = {
//   siteMetadata: {
//     title: `Gatsby Default Starter`,
//     description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
//     author: `@gatsbyjs`,
//   },
//   plugins: [
//     `gatsby-plugin-react-helmet`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: `${__dirname}/src/images`,
//       },
//     },
//     `gatsby-transformer-sharp`,
//     `gatsby-plugin-sharp`,
//     {
//       resolve: `gatsby-plugin-manifest`,
//       options: {
//         name: `gatsby-starter-default`,
//         short_name: `starter`,
//         start_url: `/`,
//         background_color: `#663399`,
//         theme_color: `#663399`,
//         display: `minimal-ui`,
//         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
//       },
//     },
//     // this (optional) plugin enables Progressive Web App + Offline functionality
//     // To learn more, visit: https://gatsby.dev/offline
//     // `gatsby-plugin-offline`,
//   ],
// }
