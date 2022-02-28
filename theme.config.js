export default {
  github: 'https://github.com/miki-tebe/negarit-gazette',
  docsRepositoryBase: 'https://github.com/miki-tebe/negarit-gazette/blob/main',
  titleSuffix: ' – Negarit',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Negarit</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Federal Negarit Gazeta
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Negarit: The Federal Negarit Gazeta" key="desc" />
      <meta name="og:description" content="Negarit: The Federal Negarit Gazeta" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/og.png" />
      <meta name="twitter:site:domain" content="negarit-gazette.vercel.app" />
      <meta name="twitter:url" content="https://negarit-gazette.vercel.app/" />
      <meta name="og:title" content="Federal Negarit Gazeta" />
      <meta name="og:image" content="/og.png" />
      <meta name="apple-mobile-web-app-title" content="Negarit" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>{new Date().getFullYear()} © Negarit.</>,
  unstable_faviconGlyph: '👋',
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'am', text: 'አማርኛ' },
  ]
}
