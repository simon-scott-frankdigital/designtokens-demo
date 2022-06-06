// import { GatsbyImage } from "gatsby-plugin-image"
import React from 'react'
import styled from '@emotion/styled'
import { ContentfulSectionText } from '../shared/ContentfulTypes'

type TextProps = {
  data: ContentfulSectionText
}
const Hero: React.FC<TextProps> = ({ data }) => {
  return (
    <StyledSection>
      <div>N Y I</div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  height: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export default Hero
