import React from 'react'
import { Helmet } from 'react-helmet'

export type SeoProps = {
  description?: string
  title?: string
  image?: string
  slug?: string
}
const Seo: React.FC<SeoProps> = ({ title, description, image, slug }) => {
  const metaTitle = title
  const metaDescription = `${description || 'description'}`
  const metaUrl = `https://newsite.gatsby.io/${
    slug === 'homepage' || !slug ? '' : slug
  }`

  return (
    <Helmet
      title={metaTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: metaTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: '',
        },
        {
          property: 'og:url',
          content: metaUrl,
        },
        {
          name: 'twitter:card',
          content: '',
        },
        {
          name: 'twitter:title',
          content: metaTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: '',
        },
        {},
      ]}
    />
  )
}

export default Seo
