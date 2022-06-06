import React from 'react'
import styled from '@emotion/styled'
import { ContentfulSectionHero } from '../shared/ContentfulTypes'
import JSONstyles from '../../build/json/styles.json'
import { Button } from '../design-system/the-button'

type HeroProps = {
  data: ContentfulSectionHero
}

// font-family: 'Helvitica Neue', Helvetica, Arial, sans-serif;
const StyledHeading1 = styled.h1`
  font-family: 'Whyte Inktrap Regular';
  font-style: ${JSONstyles.FontFrankH1.fontStyle};
  font-weight: ${JSONstyles.FontFrankH1.fontWeight};
  font-size: ${JSONstyles.FontFrankH1.fontSize}px;
  line-height: ${JSONstyles.FontFrankH1.lineHeight}px;
`

const StyledHeading2 = styled.h2`
  font-family: ${JSONstyles.FontFrankH2.fontFamily};
`

const StyledParagraph = styled.p`
  font-family: 'Helvitica Neue', Helvetica, Arial, sans-serif;
  font-style: ${JSONstyles.FontFrankTextM.fontStyle};
  font-weight: ${JSONstyles.FontFrankTextM.fontWeight};
  font-size: ${JSONstyles.FontFrankTextM.fontSize}px;
  line-height: ${JSONstyles.FontFrankTextM.lineHeight}px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
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
            color={demoButtonColor}
            text={demoButtonText}
            type={demoButtonStyle}
            linkto={'https://www.google.com'}
            textStyle={JSONstyles.FontFrankTextM}
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
