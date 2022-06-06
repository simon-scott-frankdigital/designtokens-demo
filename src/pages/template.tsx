import { graphql } from 'gatsby'
import React from 'react'
import { PageStandard } from '../shared/ContentfulTypes'
import { SectionComponents } from '../utils/SectionSelector'
import Layout from '../components/Layout'

type PageProps = {
  data: PageStandard
}

const Page: React.FC<PageProps> = ({ data }) => {
  const sections = data.contentfulPage.sections
  const {
    seoTitle,
    seoDescription: { seoDescription },
    slug,
  } = data.contentfulPage

  return (
    <Layout seo={{ seoTitle, seoDescription, slug }}>
      {sections.map((section, i) => {
        const Component: React.ElementType =
          SectionComponents[section.__typename]

        if (!SectionComponents[section.__typename]) {
          return <div key={i}>create a component for {section.__typename}</div>
        } else {
          return <Component key={i} index={i} data={section} />
        }
      })}
    </Layout>
  )
}

export const query = graphql`
  query getContentPage($id: String) {
    contentfulPage(id: { eq: $id }) {
      seoTitle
      seoDescription
      slug
      id
      sections {
        ...contentSectionHero
      }
    }
  }
`
export default Page
