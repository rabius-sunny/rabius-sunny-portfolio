import type { Metadata } from 'next'
import { Maven_Pro } from 'next/font/google'

import './globals.css'

import PersonSchema from '~/components/seo/PersonSchema'
import Appbar from '~/components/shared/nav'
import Footer from '~/components/shared/ui/Footer'
import { siteInfo } from '~/config/site'
import { merge } from '~/lib/utils'

const maven = Maven_Pro({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://rabiussunny.com'),
  title: {
    default: siteInfo.name,
    template: `%s | ${siteInfo.name}`
  },
  description: siteInfo.description,
  authors: [siteInfo.author],
  generator: siteInfo.generator,
  applicationName: siteInfo.applicationName,
  keywords: siteInfo.keywords,
  creator: siteInfo.name,
  publisher: siteInfo.publisher,
  alternates: {
    canonical: 'https://rabiussunny.com'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    title: siteInfo.name,
    description: siteInfo.description,
    siteName: siteInfo.name,
    locale: siteInfo.locale,
    ...siteInfo.openGraph
  },
  twitter: {
    card: 'summary_large_image',
    title: siteInfo.name,
    description: siteInfo.description,
    creator: siteInfo.twitterHandle,
    images: ['/images/me-compact.png']
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
    other: [
      { rel: 'mask-icon', url: '/favicon.svg' }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={merge(
          maven.className,
          'bg-primary text-text antialiased selection:bg-heading selection:text-primary'
        )}
      >
        <PersonSchema />
        <div className='flex flex-col min-h-screen'>
          <Appbar />
          <main className='flex-grow relative overflow-hidden'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
