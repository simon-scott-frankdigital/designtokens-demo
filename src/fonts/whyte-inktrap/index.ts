import JSONstyles from '../../../build/json/styles.json'
import ABCWhyteInktrapWoff2 from './ABCWhyteInktrap-Regular.woff2'
import ABCWhyteInktrapWoff from './ABCWhyteInktrap-Regular.woff'
import ABCWhyteInktrapMediumWoff2 from './ABCWhyteInktrap-Medium.woff2'
import ABCWhyteInktrapMediumWoff from './ABCWhyteInktrap-Medium.woff'
import ABCWhyteInktrapBoldWoff2 from './ABCWhyteInktrap-Bold.woff2'
import ABCWhyteInktrapBoldWoff from './ABCWhyteInktrap-Bold.woff'
import ABCWhyteInktrapBookWoff2 from './ABCWhyteInktrap-Book.woff2'
import ABCWhyteInktrapBookWoff from './ABCWhyteInktrap-Book.woff'
import ABCWhyteInktrapHeavyWoff2 from './ABCWhyteInktrap-Heavy.woff2'
import ABCWhyteInktrapHeavyWoff from './ABCWhyteInktrap-Heavy.woff'

const FontIndex = `
  @font-face {
    font-display: block;
    font-family: 'Whyte Inktrap Regular';
    src: url(${ABCWhyteInktrapWoff2}) format('woff2'),
      url(${ABCWhyteInktrapWoff}) format('woff');
  }

  @font-face {
    font-display: block;
    font-family: 'Whyte Inktrap Medium';
    src: url(${ABCWhyteInktrapMediumWoff2}) format('woff2'),
      url(${ABCWhyteInktrapMediumWoff}) format('woff');
  }

  @font-face {
    font-display: block;
    font-family: 'Whyte Inktrap Bold';
    src: url(${ABCWhyteInktrapBoldWoff2}) format('woff2'),
      url(${ABCWhyteInktrapBoldWoff}) format('woff');
  }

  @font-face {
    font-display: block;
    font-family: 'Whyte Inktrap Book';
    src: url(${ABCWhyteInktrapBookWoff2}) format('woff2'),
      url(${ABCWhyteInktrapBookWoff}) format('woff');
  }

  @font-face {
    font-display: block;
    font-family: 'Whyte Inktrap Heavy';
    src: url(${ABCWhyteInktrapHeavyWoff2}) format('woff2'),
    url(${ABCWhyteInktrapHeavyWoff}) format('woff');
  }
  
  @font-face {
    font-display: block;
    font-family: '${JSONstyles.FontFrankH1.fontFamily}';
    src: url(${ABCWhyteInktrapWoff2}) format('woff2'),
      url(${ABCWhyteInktrapWoff}) format('woff');
  }
  @font-face {
    font-display: block;
    font-family: '${JSONstyles.FontFrankH2.fontFamily}';
    src: url(${ABCWhyteInktrapWoff2}) format('woff2'),
      url(${ABCWhyteInktrapWoff}) format('woff');
  }
  @font-face {
    font-display: block;
    font-family: '${JSONstyles.FontFrankH3.fontFamily}';
    src: url(${ABCWhyteInktrapWoff2}) format('woff2'),
      url(${ABCWhyteInktrapWoff}) format('woff');
  }
  @font-face {
    font-display: block;
    font-family: '${JSONstyles.FontFrankH4.fontFamily}';
    src: url(${ABCWhyteInktrapWoff2}) format('woff2'),
      url(${ABCWhyteInktrapWoff}) format('woff');
  }
`

export default FontIndex
