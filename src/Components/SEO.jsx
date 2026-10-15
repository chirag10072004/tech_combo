import React from 'react'
import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://techcombo.in'
const DEFAULT_IMAGE = `${SITE_URL}/assets/Home/Logo.png`

const SEO = ({
  title = 'TechCombo | Premium IT Services & Software Solutions',
  description = 'TechCombo provides modern web development, mobile app development, custom software, cloud solutions, and cybersecurity services to help businesses grow.',
  keywords = 'TechCombo, IT services, web development, custom software, app development, cloud solutions, cybersecurity',
  canonical = '',
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  schema = null,
}) => {
  // Construct absolute canonical URL
  const canonicalUrl = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${SITE_URL}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : SITE_URL

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / LinkedIn / WhatsApp */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="TechCombo" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Optional page-specific Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO
