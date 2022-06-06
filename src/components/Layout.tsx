import * as React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import { whyteinktrap } from '../fonts'
import Footer from './Footer'
import Header from './Header'
import Seo from './Seo'
import { PageWrapperStandard } from '../shared/ContentfulTypes'
import * as designSystemCss from '../../build/css/_variables.css'
import {
  fallbackFont,
  isDesignTokensAvailable,
} from '../design-system/style-imports'

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
  ${designSystemCss}
  * {
    font-family: ${
      isDesignTokensAvailable ? 'ABC Whyte Inktrap' : fallbackFont
    };
  }
  :root {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
    }
    span {
      ${
        isDesignTokensAvailable
          ? 'font-family: Whyte Inktrap Heavy; font-size: 1rem;'
          : fallbackFont + '; font-size: 1rem;'
      }};
    }
  }
`

export default Layout
