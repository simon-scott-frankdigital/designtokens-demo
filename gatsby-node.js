const path = require(`path`)
const { gql } = require(`graphql-request`)

exports.createPages = ({ graphql, actions: { createPage } }) => {
  const pages = graphql(`
    {
      allContentfulPage {
        nodes {
          slug
          id
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }
    result.data.allContentfulPage.nodes.forEach((node) => {
      let slug = node.slug
      if (node.slug === 'home') {
        slug = '/'
      }
      createPage({
        path: slug,
        component: path.resolve(`./src/pages/template.tsx`),
        context: {
          id: node.id,
        },
      })
    })
  })
  return Promise.all([pages])
}
