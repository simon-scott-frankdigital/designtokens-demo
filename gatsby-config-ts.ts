import type { PluginOptions as TypegenPluginOptions } from 'gatsby-plugin-typegen/types'

// Setup environment config files for the different environments
if (process.env.ENVIROMENT !== 'production') {
  require('dotenv').config({
    path: `.env`,
  })
}

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
}

type Plugin =
  | string
  | { resolve: string; options: object; __key?: string }
  | { resolve: 'gatsby-plugin-typegen'; options: TypegenPluginOptions }

export const siteMetadata = {
  title: 'Boilerplate',
}

export const plugins: Plugin[] = [
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/static/`,
    },
    __key: 'images',
  },
  {
    resolve: 'gatsby-source-contentful',
    options: contentfulConfig,
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: `${__dirname}/src/images/frank-fav--03.png`,
    },
  },
  'gatsby-plugin-image',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sharp',
  'gatsby-plugin-emotion',
  'gatsby-transformer-sharp',
]

// Don't generate types in prod, stage, preview or where env variable is explicitly set
if (process.env.ENABLE_TYPEGEN === 'true') {
  console.log('Using gatsby-plugin-typegen')
  plugins.push({
    options: {
      emitPluginDocuments: {
        'src/__generated__/gatsby-plugin-documents.graphql': true,
      },
      emitSchema: {
        'src/__generated__/gatsby-introspection.json': true,
        'src/__generated__/gatsby-schema.graphql': true,
      },
    },
    resolve: 'gatsby-plugin-typegen',
  })
}
