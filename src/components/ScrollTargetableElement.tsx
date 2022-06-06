import * as React from 'react'
import styled from '@emotion/styled'

type Props = { id: string }

const ScrollTargetableElement: React.FC<Props> = ({ children, id }) => {
  return <ScrollTargetWrapper id={id}>{children}</ScrollTargetWrapper>
}

const ScrollTargetWrapper = styled.div`
  scroll-padding-top: 100px;
`

export default ScrollTargetableElement
