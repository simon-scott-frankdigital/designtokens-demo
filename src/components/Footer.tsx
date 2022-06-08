import React from 'react'
import styled from '@emotion/styled'
import { Button } from '../design-system/the-button'
import { designTokens } from '../design-system/style-imports'

const Grid = styled.div`
  display: grid;
  grid-gap: 8px;
  padding: 0 5vw;
  grid-template-columns: repeat(12, 1fr);
  margin: 0 auto;
`

const Flex = styled.div`
  padding-bottom: 40px;
  display: flex;
  grid-column: span 12;
  border-bottom: black solid 3px;
`

const MoreInfo = styled.div`
  margin-left: 16px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
`

const BG = styled.div`
  @media (max-width: 1024px) {
    height: unset;
  }
`

const FooterContainer = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 35px 0;
  height: auto;
`

const Spacer = styled.div`
  padding: ${(designTokens.Sizes80 as number) / 10}px;
`

const OverlappingDivRight = styled.div`
  position: absolute;
  height: inherit;
  right: 5vw;
  top: -28px;
  display: flex;
  justify-content: space-between;
  max-width: fit-content;
  @media (max-width: 1024px) {
    position: relative;
    justify-content: unset;
    align-items: center;
    flex-direction: column;
    inset: unset;
    margin: auto;
  }
`

const Footer: React.FC = () => {
  return (
    <>
      <Grid>
        <Flex>
          <MoreInfo>Frank Demo: Design Tokens!</MoreInfo>
        </Flex>
      </Grid>
      <BG>
        <FooterContainer>
          <OverlappingDivRight>
            <Button
              type={'bigChungus'}
              color={designTokens.ColorColorPrimary50}
              text={'Facebook'}
              linkto={'https://www.facebook.com/frankdigital.se/'}
            />
            <Spacer />
            <Button
              type={'bigChungus'}
              color={designTokens.ColorColorAccent50}
              text={'Instagram'}
              linkto={'https://www.instagram.com/digital.frank/?hl=en'}
            />
            <Spacer />
            <Button
              type={'bigChungus'}
              color={designTokens.ColorColorSecondary50}
              text={'LinkedIn'}
              linkto={
                'https://www.linkedin.com/company/frank-digital-experiences/'
              }
            />
          </OverlappingDivRight>
        </FooterContainer>
      </BG>
    </>
  )
}

export default Footer
