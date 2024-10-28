import { useConfig } from 'nextra-theme-docs'

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  project: {
    link: 'https://github.com/onyxassistant/onyx',
  },
  docsRepositoryBase:
    'https://github.com/onyxassistant/doc',
  editLink: {
    content: 'Edit this page on GitHub'
  },
  logo: <b>Onyx</b>,
  footer: {
    content: 'Onyx © 2024',
  },
  faviconGlyph: '✦',
  head: function useHead() {
    const config = useConfig()
    const title = `${config.title} – Onyx`
    const description =
      config.frontMatter.description || 'Onyx: your intelligent assistant'
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="Onyx" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://onyxassistant.com" />
      </>
    )
  }
}
