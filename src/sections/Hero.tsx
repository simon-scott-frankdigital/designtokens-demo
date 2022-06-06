import React from 'react'
import styled from '@emotion/styled'
import { ContentfulSectionHero } from '../shared/ContentfulTypes'
import { Button } from '../design-system/the-button'
import {
  designTokens,
  FontFrankH1,
  FontFrankH2,
} from '../design-system/style-imports'

type HeroProps = {
  data: ContentfulSectionHero
}

// font-family: 'Helvitica Neue', Helvetica, Arial, sans-serif;
const StyledHeading1 = styled(FontFrankH1)`
  margin: 0 auto !important;
`
const StyledHeading2 = styled(FontFrankH2)`
  font-size: ${designTokens.Sizes40}px !important;
`

const StyledParagraph = styled.p`
  font-family: ${designTokens.FontFrankTextM?.fontFamily};
  font-style: ${designTokens.FontFrankTextM?.fontStyle};
  font-weight: ${designTokens.FontFrankTextM?.fontWeight};
  font-size: ${designTokens.FontFrankTextM?.fontSize}px;
  line-height: ${designTokens.FontFrankTextM?.lineHeight}px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${designTokens?.baseUnit * 2}px;
  width: 70vw;
`

const Hero: React.FC<HeroProps> = ({ data }) => {
  const {
    demoHeading1,
    demoHeading2,
    demoParagraph,
    demoButtonText,
    demoButtonStyle,
    demoButtonColor,
  } = data
  return (
    <StyledSection>
      <Grid>
        <StyledHeading1>{demoHeading1}</StyledHeading1>
        <StyledHeading2>{demoHeading2}</StyledHeading2>
        <StyledParagraph>{demoParagraph.demoParagraph}</StyledParagraph>
        <div>
          <Button
            color={designTokens.ColorSecondary200}
            text={demoButtonText}
            type={demoButtonStyle}
            linkto={'https://www.google.com'}
            textStyle={designTokens.FontFrankTextM}
          />
        </div>
      </Grid>
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
