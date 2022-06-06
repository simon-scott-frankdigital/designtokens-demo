import { graphql } from 'gatsby'

export const query = graphql`
  fragment contentSectionHero on ContentfulSectionHero {
    __typename
    demoHeading1
    demoHeading2
    demoParagraph {
      demoParagraph
    }
    demoButtonText
    demoButtonStyle
    demoButtonColor
  }

  fragment contentSectionSplit on ContentfulSectionSplit {
    __typename
    leftSection {
      __typename
      ...contentSectionText
      ...contentSectionImage
    }
    rightSection {
      __typename
      ...contentSectionText
      ...contentSectionImage
    }
  }

  fragment contentSectionText on ContentfulSectionText {
    __typename
    heading
    textContent {
      textContent
    }
  }
  fragment contentSectionImage on ContentfulSectionImage {
    __typename
    image {
      gatsbyImageData
    }
  }
`
