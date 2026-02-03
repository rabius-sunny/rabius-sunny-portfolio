import type { Metadata } from 'next'
import { Maven_Pro } from 'next/font/google'

import './globals.css'

import Appbar from '~/components/shared/nav'
import Footer from '~/components/shared/ui/Footer'
import { siteInfo } from '~/config/site'
import { merge } from '~/lib/utils'

const maven = Maven_Pro({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://rabiussunny.com'),
  title: {
    default: siteInfo.name,
    template: `%s | ${siteInfo.name}`
  },
  description: siteInfo.description,
  authors: siteInfo.author,
  generator: siteInfo.generator,
  applicationName: siteInfo.applicationName,
  keywords: siteInfo.keywords,
  creator: siteInfo.name,
  publisher: 'Rabius Sunny',
  robots: 'index follow',
  openGraph: {
    title: siteInfo.name,
    description: siteInfo.description,
    siteName: siteInfo.name,
    ...siteInfo.openGraph
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
        <div className='flex flex-col min-h-screen'>
          <Appbar />
          <main className='flex-grow relative overflow-hidden'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
