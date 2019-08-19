/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const Autoprefixer = require('autoprefixer');
const PostCssVr = require('postcss-vr');
const PostCssFocus = require('postcss-focus');
const PostCssPxToRem = require('postcss-pxtorem');

module.exports = {
  siteMetadata: {
    title: 'KickstartGatsby',
    address: 'Kickstart-address-update',
    webAddress: 'Kickstart-webAddress-update',
    email: 'Kickstart-email-update',
    phone: 'Kickstart-phone-update',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [Autoprefixer(), PostCssVr(), PostCssFocus(), PostCssPxToRem({ propList: ['*'] })],
        precision: 8,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-typescript',
    'gatsby-plugin-tslint',
    'gatsby-plugin-react-helmet',
  ],
};
