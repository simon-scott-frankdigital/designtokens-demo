import { IGatsbyImageData } from 'gatsby-plugin-image'
import { ContentfulRichTextGatsbyReference } from 'gatsby-source-contentful/rich-text'
import { ButtonTypes, ColorTypes } from '../design-system/the-button/Button'

// Sections

type Section = {
  __typename: string
}

export type ContentfulRichText = {
  raw: string
  references: ContentfulRichTextGatsbyReference[]
}

type ContentfulPage = {
  slug: string
  seoTitle: string
  seoDescription: {
    seoDescription: string
  }
  sections: Section[]
}

export type PageStandard = {
  contentfulPage: ContentfulPage
}
type SEO = {
  seoTitle: string
  seoDescription: string
  seoImage?: string
  slug: string
}
export type PageWrapperStandard = {
  seo: SEO
  children: React.ReactNode
}

export type ContentfulSectionHero = {
  __typename: string
  id: string
  heading: string
  ingress: { ingress: string }
  image: { gatsbyImageData: IGatsbyImageData; description: string }
  demoHeading1: string
  demoHeading2: string
  demoParagraph: { demoParagraph: string }
  demoButtonText: string
  demoButtonStyle: ButtonTypes
  demoButtonColor: ColorTypes
}

export type ContentfulSectionText = {}
