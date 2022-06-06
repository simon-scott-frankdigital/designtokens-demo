const path = require(`path`)
const { gql } = require(`graphql-request`)

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = [
//     gql`
//       union PageSections =
//           ContentfulDividerBlock
//         | ContentfulFriendsBlock
//         | ContentfulHeroBlock
//         | ContentfulSequenceBlock
//         | ContentfulTextBlock
//         | Contentful3SegmentsBlock

//       type ContentfulPage implements ContentfulReference & ContentfulEntry & Node {
//         contentful_id: String!
//         id: ID!
//         node_locale: String!
//         title: String
//         seoDescription: String
//         slug: String
//         sections: [ContentfulDividerBlockContentfulFriendsBlockContentfulHeroBlockContentfulSequenceBlockContentfulTextBlockAUnion]
//         menu_link: [ContentfulMenuLink]
//         spaceId: String
//         seoTitle: String
//         parent: Node
//         children: [Node!]!
//         internal: Internal!
//       }
//     `,
//   ]
//   createTypes(typeDefs)
// }

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
      // console.log(node.slug)
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
