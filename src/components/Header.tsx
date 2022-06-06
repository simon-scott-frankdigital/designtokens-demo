import React from 'react'
import styled from '@emotion/styled'
import logo from '../images/circular_logo.svg'
import arrow from '../images/arrow.svg'
import styles from '../../build/json/styles.json'
import { css } from '@emotion/react'

const Menu = styled.div`
  > a {
    color: black;
    margin: 0 24px;
    box-shadow: 0 0 50px 40px white;
    background-color: white;
    @media (max-width: 1024px) {
      margin: 0 16px;
    }
    @media (max-width: 500px) {
      box-shadow: 0 0 10px 10px white;
      margin: 0 8px;
    }
  }

  display: flex;
  grid-column: span 10;
  justify-content: end;
  align-items: center;
  @media (max-width: 1024px) {
    grid-column: 3/12;
  }
  @media (max-width: 500px) {
    grid-column: 1/12;
  }
`

const Header: React.FC = () => {
  return (
    <>
      <BgWrapper>
        <StyledHeader>
          <StyledLogoLink target={'_blank'} href={'https://frankdigital.se/'}>
            <StyledImg src={logo} />
          </StyledLogoLink>
          {/* <Menu>
            <a href="#contact">contact</a>
            <a href="#testimonials">testimonials</a>
            <a href="#ouroffer">our offer</a>
          </Menu> */}
          {/* <StyledArrowSVG src={arrow} /> */}
        </StyledHeader>
      </BgWrapper>
      <LayoutShiftBlock />
    </>
  )
}

const StyledImg = styled.img`
  height: 60px;
`

const StyledLogoLink = styled.a`
  height: auto;
  justify-self: center;
  align-self: center;
  grid-column-start: 1;
  @media (max-width: 1024px) {
    grid-column: 1/3;
  }
`

// This should be a menu button
const StyledArrowSVG = styled.img`
  height: 40px;
  grid-column-start: 12;
  justify-self: center;
  align-self: center;
`

const StyledHeader = styled.div`
  height: 120px;
  // max-width: 1024px;
  margin: 0 auto;

  display: grid;
  padding: 0 5vw;
  grid-gap: 8px;
  grid-template-columns: repeat(12, 1fr);
`

const fadeToTransparent = css`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`

const BgWrapper = styled.div`
  position: fixed;
  width: 100%;
  background: rgb(2, 0, 36);
  ${fadeToTransparent}
  z-index:3;
`

const LayoutShiftBlock = styled.div`
  height: 120px;
  filter: blur(4px);
`
export default Header
