import styled from '@emotion/styled'
import JSONstyles from '../../../build/json/styles.json'
export const fallbackFont = `'Helvitica Neue', Helvetica, Arial, sans-serif`
export const isDesignTokensAvailable = Boolean(Object.keys(JSONstyles).length)
type genericObjectShape = {
  [key: string]: genericObjectShape
}
export const designTokens = {
  ...JSONstyles,
}

export const baseUnit = (
  'Sizes80' in JSONstyles ? (JSONstyles as any).Sizes80 / 10 : 0
).toString()

export const FontFrankH1 = styled.h1`
  font-family: ${designTokens?.FontFrankH1?.fontFamily || fallbackFont};
  font-style: ${designTokens?.FontFrankH1?.fontStyle || 'normal'};
  font-weight: ${designTokens?.FontFrankH1?.fontWeight || 'normal'};
  font-size: ${designTokens?.FontFrankH1?.fontSize + 'px' || 'inherit'};
  line-height: ${designTokens?.FontFrankH1?.lineHeight + 'px' || 'inherit'};
`

export const FontFrankH2 = styled.h2`
  font-family: ${designTokens?.FontFrankH2?.fontFamily || fallbackFont};
  font-style: ${designTokens?.FontFrankH2?.fontStyle || 'normal'};
  font-weight: ${designTokens?.FontFrankH2?.fontWeight || 'normal'};
  font-size: ${designTokens?.FontFrankH2?.fontSize + 'px' || 'inherit'};
  line-height: ${designTokens?.FontFrankH2?.lineHeight + 'px' || 'inherit'};
`

export const FontFrankH3 = styled.h3`
  font-family: ${designTokens?.FontFrankH3?.fontFamily || fallbackFont};
  font-style: ${designTokens?.FontFrankH3?.fontStyle || 'normal'};
  font-weight: ${designTokens?.FontFrankH3?.fontWeight || 'normal'};
  font-size: ${designTokens?.FontFrankH3?.fontSize + 'px' || 'inherit'};
  line-height: ${designTokens?.FontFrankH3?.lineHeight + 'px' || 'inherit'};
`

// key access util
type genericObjectStringNumberShape = {
  [key: string]: genericObjectStringNumberShape | string | number
}
export function propName(
  prop: genericObjectStringNumberShape | string | number,
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
