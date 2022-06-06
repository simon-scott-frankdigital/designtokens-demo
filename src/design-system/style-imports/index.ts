import JSONstyles from '../../../build/json/styles.json'
export const fallbackFont = `'Helvitica Neue', Helvetica, Arial, sans-serif`
export const isDesignTokensAvailable = Boolean(Object.keys(JSONstyles).length)
export const designTokens = JSONstyles
