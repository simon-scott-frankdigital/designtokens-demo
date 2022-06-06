import * as React from 'react'
import styled from '@emotion/styled'
import JSONstyles from '../../../build/json/styles.json'
import { css } from '@emotion/react'

const commonStyles = css`
  cursor: pointer;
  display: flex;
  align-items: center;
  max-width: fit-content;
  box-sizing: border-box;
  color: black;
  border-radius: 40px;
  border: 4px solid #252a2e;
`

const StyledButton = styled.a`
  ${commonStyles}
  background: ${({ color }: { color: ColorTypes }) => JSONstyles[color]};
  padding: 4px 24px;
  height: 34px;
`

const StyledChungus = styled.a`
  ${commonStyles}
  background: ${({ color }: { color: ColorTypes | string }) =>
    color in JSONstyles ? JSONstyles[color as ColorTypes] : '#ffffff'};
  padding: 5px 45px;
  height: 50px;
  font-size: 22px;
`

export type ButtonTypes =
  | 'regular'
  | 'withIconLeft'
  | 'withIconRight'
  | 'bigChungus'

// these types would be awesome if we could generate from json!!
export type ColorTypes =
  | 'ColorColorRed'
  | 'ColorColorBlue'
  | 'ColorColorGreen'
  | 'ColorColorPurpledark'
  | 'ColorColorPurple'
  | 'ColorColorPink'
  | 'ColorColorYellow'

type Props = {
  // onClick: () => void
  color: ColorTypes | string
  text: string
  type: ButtonTypes
  linkto: string
  textStyle?: {
    fontSize: number
    textDecoration: string
    fontFamily: string
    fontWeight: number
    fontStyle: string
    fontStretch: string
    letterSpacing: number
    lineHeight: number
    paragraphIndent: number
    paragraphSpacing: number
    textCase: string
  }
}

const Button: React.FC<Props> = ({ color, text, type, linkto, textStyle }) => {
  const StyledButtonText = styled.span`
    font-style: ${textStyle?.fontStyle || 'normal'};
    font-weight: ${textStyle?.fontWeight || '400'};
    font-size: ${textStyle?.fontSize || '12'}px;
    line-height: ${textStyle?.lineHeight || '16'}px;
    color: black;
  `
  switch (type) {
    case 'bigChungus':
      return (
        <StyledChungus target={'_blank'} href={linkto} color={color || ''}>
          <StyledButtonText>{text}</StyledButtonText>
        </StyledChungus>
      )

    case 'withIconLeft':
      return <></>

    case 'regular':
      return (
        <StyledButton color={color}>
          <StyledButtonText>{text}</StyledButtonText>
        </StyledButton>
      )

    default:
      return (
        <StyledButton color={color}>
          <StyledButtonText>{text}</StyledButtonText>
        </StyledButton>
      )
  }
}

export default Button
