import gfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import React from 'react'

type LinkProps = { href?: string; children?: React.ReactNode }

const LinkRenderer: React.FC<LinkProps> = (props) => {
  return (
    <a href={props.href} target="_blank">
      {props.children}
    </a>
  )
}

const Markdown: React.FC = (props) => {
  return (
    <ReactMarkdown
      //   linkTarget="_blank"
      components={{
        a: LinkRenderer,
        link: LinkRenderer,
      }}
      plugins={[gfm]}
    >
      {props.children as string}
    </ReactMarkdown>
  )
}

export default Markdown
