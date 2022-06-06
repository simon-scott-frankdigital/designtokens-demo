import React from 'react'
import styled from '@emotion/styled'
import { ContentfulSectionHero } from '../shared/ContentfulTypes'
import { Button } from '../design-system/the-button'
import {
  isDesignTokensAvailable,
  designTokens,
  fallbackFont,
} from '../design-system/style-imports'

type HeroProps = {
  data: ContentfulSectionHero
}

// font-family: 'Helvitica Neue', Helvetica, Arial, sans-serif;
const StyledHeading1 = styled.h1`
  font-family: ${isDesignTokensAvailable ? 'ABC Whyte Inktrap' : fallbackFont};
  color: var(--color-primary400);
  font-style: ${isDesignTokensAvailable ? '' : 'normal'};
  font-weight: ${isDesignTokensAvailable ? '' : 'normal'};
  font-size: ${isDesignTokensAvailable ? 'px' : ''};
  line-height: ${isDesignTokensAvailable ? 'px' : ''};
`

const StyledHeading2 = styled.h2`
  font-family: ${isDesignTokensAvailable ? 'ABC Whyte Inktrap' : fallbackFont};
`

const StyledParagraph = styled.p`
  font-family: ${isDesignTokensAvailable ? 'ABC Whyte Inktrap' : fallbackFont};
  font-style: ${''};
  font-weight: ${''};
  font-size: ${''};
  line-height: ${''};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${isDesignTokensAvailable ? designTokens.spacing : '16px'};
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
            // textStyle={designTokens.FontFrankTextM}
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
