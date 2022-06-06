import * as React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import { whyteinktrap } from '../fonts'
import Footer from './Footer'
import Header from './Header'
import Seo from './Seo'
import { PageWrapperStandard } from '../shared/ContentfulTypes'
import styles from '../../build/json/styles.json'

const Layout: React.FC<PageWrapperStandard> = ({ children, seo }) => {
  return (
    <Wrapper>
      <Seo
        title={seo.seoTitle}
        description={seo.seoDescription}
        slug={seo.slug ? seo.slug : 'homepage'}
      />
      <Header />
      <Global styles={globalStyles} />
      {children}
      <Footer />
    </Wrapper>
  )
}

// background-image: url('https://images.ctfassets.net/swbftvcy8iec/77eCG5tlmU7hvJ6lzJ432l/dcbac67a1b65fbe2e05662519d6b4424/gradient.png');
const Wrapper = styled('div')`
  // border: 2px solid green;
  // padding: 10px;
  min-height: 100vh;
  background-size: 100% auto;
  background-repeat: no-repeat;
`

const globalStyles = css`
  ${whyteinktrap}
  :root {
    --breadText: 16px;
    --breadTextMedium: 18px;
    --breadTextLarge: 20px;
    --colorGrey: #f2f2f2;
    --color: #9f9fc3;
  }
  html {
    scroll-padding-top: 20px;
    scroll-behavior: smooth;
  }
  body {
    font-family: Helvetica, Arial, sans-serif;
    overflow-x: hidden;
  }
  * {
    font-family: 'Whyte Inktrap Regular';
    // outline: auto;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  h1,
  h3,
  h4,
  h5,
  h6 {
  }
  h1 {
    font-size: 80px;
    @media (min-width: 1200px) {
    }
    @media (min-width: 1500px) {
    }
  }
  h3 {
    @media (min-width: 1200px) {
    }
  }
  h4 {
    @media (min-width: 900px) {
    }
  }
  body,
  h1,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }
  html:focus-within {
    scroll-behavior: smooth;
  }
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
  }
  img,
  picture {
    max-width: 100%;
    display: §;
  }
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      // animation-duration: 0.01ms !important;
      // animation-iteration-count: 1 !important;
      // transition-duration: 0.01ms !important;
      // scroll-behavior: auto !important;
    }
  }
  a {
    text-decoration: none;
    color: ${styles['ColorColorBlue']};
  }
  p {
  }
  b {
    font-weight: bold;
  }
`

export default Layout
