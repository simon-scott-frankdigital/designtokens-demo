import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { designTokens } from '../style-imports'

const commonStyles = css`
  cursor: pointer;
  display: flex;
  align-items: center;
  max-width: fit-content;
  box-sizing: border-box;
  color: black;
  border-radius: ${designTokens?.Sizes40}px;
  border: 3px solid #252a2e;
`

const StyledButton = styled.a`
  ${commonStyles}
  background: ${({ color }) => color};
  padding: 3px 24px;
  height: 34px;
`

const StyledChungus = styled.a`
  ${commonStyles}
  background: ${({ color }) => color};
  padding: 5px 45px;
  height: 50px;
  font-size: 22px;
`

export type ButtonTypes = 'regular' | 'bigChungus'

type Props = {
  color: string
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
        <StyledChungus target={'_blank'} href={linkto} color={color}>
          <StyledButtonText>{text}</StyledButtonText>
        </StyledChungus>
      )

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
