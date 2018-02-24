module.exports = {
  siteMetadata: {
    title: "AI-powered social research | Pol.is",
    description: "Pol.is helps you uncover what people are thinking.",
    url: "https://pol.is"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`
      }
    }
  ]
};
