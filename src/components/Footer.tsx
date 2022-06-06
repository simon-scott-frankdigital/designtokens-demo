import React from 'react'
import styled from '@emotion/styled'
import { Button } from '../design-system/the-button'
import { css } from '@emotion/react'
import ScrollTargetableElement from './ScrollTargetableElement'
import { designTokens, propName } from '../design-system/style-imports'

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

// font-family: Whyte Inktrap Bold;
const MoreInfo = styled.div`
  margin-left: 16px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
`

// background-color: ${JSONstyles.ColorColorPurple};
// height: 600px;
const BG = styled.div`
  @media (max-width: 1024px) {
    height: unset;
  }
`

const StyledFooter = styled.section`
  position: relative;
  // max-width: 1024px;
  margin: 0 auto;
  padding: 35px 0;
  height: auto;
`

const Spacer = styled.div`
  padding: ${(designTokens.Sizes80 as number) / 10}px;
`

const textContentCommon = css`
  height: inherit;
  margin-bottom: 36px;
  @media (max-width: 1024px) {
    margin-bottom: 24px;
    grid-column: 1/13;
    text-align: center;
  }
`

const OverlappingDivLeft = styled.div`
  // position: absolute;
  height: inherit;
  width: 100%;
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

const StyledP = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 29px;
`

const StyledH4 = styled.h4`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 35px;
`

const Footer: React.FC = () => {
  return (
    <ScrollTargetableElement id="contact">
      <>
        <Grid>
          <Flex>
            <MoreInfo>Frank Demo: Design Tokens!</MoreInfo>
          </Flex>
        </Grid>
        <BG>
          <StyledFooter>
            <OverlappingDivLeft></OverlappingDivLeft>
            <OverlappingDivRight>
              <Button
                type={'bigChungus'}
                color={propName(designTokens, designTokens.ColorPrimary100)}
                text={'Facebook'}
                linkto={'https://www.facebook.com/frankdigital.se/'}
              />
              <Spacer />
              <Button
                type={'bigChungus'}
                color={propName(designTokens, designTokens.ColorPrimary200)}
                text={'Instagram'}
                linkto={'https://www.instagram.com/digital.frank/?hl=en'}
              />
              <Spacer />
              <Button
                type={'bigChungus'}
                color={propName(designTokens, designTokens.ColorSecondary100)}
                text={'LinkedIn'}
                linkto={
                  'https://www.linkedin.com/company/frank-digital-experiences/'
                }
              />
            </OverlappingDivRight>
          </StyledFooter>
        </BG>
      </>
    </ScrollTargetableElement>
  )
}

export default Footer
