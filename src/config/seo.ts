export const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://v3frankie.me' : ''
export const baseEmail = 'hi@v3frankie.me'

export const defaultSEO = {
  title: 'Frankie Valentine',
  description:
    'A web developer and designer based in the Bay Area. I love to create beautiful and functional websites.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    site_name: 'Frankie Valentine',
    images: [
      {
        url: `${baseUrl}/static/og/default.png`,
        alt: 'Frankie Valentine',
      },
    ],
  },
  twitter: {
    handle: '@v3frankie',
    site: '@v3frankie',
    cardType: 'summary_large_image',
  },
}

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function extendSEO(options: SEOProps) {
  const images = options.image
    ? [{ url: `${baseUrl}/static/${options.image}` }]
    : defaultSEO.openGraph.images

  return {
    ...defaultSEO,
    ...options,
    url: `${baseUrl}/${options.url}`,
    openGraph: {
      ...defaultSEO.openGraph,
      images,
      url: `${baseUrl}/${options.url}`,
    },
  }
}