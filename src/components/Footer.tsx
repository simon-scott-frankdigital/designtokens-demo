import React from 'react'
import styled from '@emotion/styled'
import JSONstyles from '../../build/json/styles.json'
import { Button } from '../design-system/the-button'
import { css } from '@emotion/react'
import ScrollTargetableElement from './ScrollTargetableElement'

const Grid = styled.div`
  display: grid;
  grid-gap: 8px;
  padding: 0 5vw;
  grid-template-columns: repeat(12, 1fr);

  // max-width: 1024px;
  margin: 0 auto;
`
const Flex = styled.div`
  padding-bottom: 40px;
  display: flex;
  grid-column: span 12;
  border-bottom: black solid 4px;
`

const MoreInfo = styled.div`
  margin-left: 16px;
  font-family: Whyte Inktrap Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
`

const BG = styled.div`
  // background-color: ${JSONstyles.ColorColorPurple};
  // height: 600px;
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
  padding: 10px;
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

const TextContent1 = styled.div`
  grid-column: 1/5;
  ${textContentCommon}
`

const TextContent2 = styled.div`
  grid-column: 5/9;
  ${textContentCommon}
`

const FlexContentLeft = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 8px;
  height: inherit;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  padding: 0 5vw;
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

const Mailto = styled.a`
  text-decoration: underline;
  color: ${JSONstyles['ColorColorBlue']};
`

const Footer: React.FC = () => {
  return (
    <ScrollTargetableElement id="contact">
      <>
        <Grid>
          <Flex>
            {/* <img style={{ gridColumnStart: '2' }} src={cross} /> */}
            <MoreInfo>Frank Demo: Design Tokens!</MoreInfo>
          </Flex>
        </Grid>
        <BG>
          <StyledFooter>
            <OverlappingDivLeft></OverlappingDivLeft>
            <OverlappingDivRight>
              <Button
                type={'bigChungus'}
                color={
                  Object.keys(JSONstyles).find(
                    (value) => value === 'ColorPrimary50'
                  ) || ''
                }
                text={'Facebook'}
                linkto={'https://www.facebook.com/frankdigital.se/'}
              />
              <Spacer />
              <Button
                type={'bigChungus'}
                color={
                  Object.keys(JSONstyles).find(
                    (value) => value === 'ColorPrimary60'
                  ) || ''
                }
                text={'Instagram'}
                linkto={'https://www.instagram.com/digital.frank/?hl=en'}
              />
              <Spacer />
              <Button
                type={'bigChungus'}
                color={
                  Object.keys(JSONstyles).find(
                    (value) => value === 'ColorPrimary70'
                  ) || ''
                }
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
