import styled from '@emotion/styled'
import JSONstyles from '../../../build/json/styles.json'
export const fallbackFont = `'Helvitica Neue', Helvetica, Arial, sans-serif`
export const isDesignTokensAvailable = Boolean(Object.keys(JSONstyles).length)
export const designTokens = {
  ...JSONstyles,
  baseUnit: JSONstyles.Sizes80 / 10,
}

export const FontFrankH1 = styled.h1`
  font-family: ${designTokens.FontFrankH1.fontFamily};
  font-style: ${designTokens.FontFrankH1.fontStyle};
  font-weight: ${designTokens.FontFrankH1.fontWeight};
  font-size: ${designTokens.FontFrankH1.fontSize}px;
  line-height: ${designTokens.FontFrankH1.lineHeight}px;
`
export const FontFrankH2 = styled.h2`
  font-family: ${designTokens.FontFrankH2.fontFamily};
  font-style: ${designTokens.FontFrankH2.fontStyle};
  font-weight: ${designTokens.FontFrankH2.fontWeight};
  font-size: ${designTokens.FontFrankH2.fontSize}px;
  line-height: ${designTokens.FontFrankH2.lineHeight}px;
`
export const FontFrankH3 = styled.h3`
  font-family: ${designTokens.FontFrankH3.fontFamily};
  font-style: ${designTokens.FontFrankH3.fontStyle};
  font-weight: ${designTokens.FontFrankH3.fontWeight};
  font-size: ${designTokens.FontFrankH3.fontSize}px;
  line-height: ${designTokens.FontFrankH3.lineHeight}px;
`
// key access util
type genericObjectShape = {
  [key: string]: genericObjectShape | string | number
}

export function propName(
  prop: genericObjectShape | string | number,
  value: unknown
) {
  let res = ''
  if (typeof prop === 'string' || typeof prop === 'number') {
    return prop.toString()
  }
  for (let i in prop) {
    if (typeof prop[i] === 'object') {
      if (propName(prop[i], value)) {
        return res
      }
    } else {
      if (prop[i] == value) {
        res = i
        return res
      }
    }
  }
  return 'missing'
}
