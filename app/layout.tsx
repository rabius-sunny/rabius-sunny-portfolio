import type { Metadata } from 'next'
import { Maven_Pro } from 'next/font/google'

import './globals.css'

import Appbar from '~/components/shared/nav'
import Footer from '~/components/shared/ui/Footer'
import { siteInfo } from '~/config/site'
import { merge } from '~/lib/utils'

const maven = Maven_Pro({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://rabius-sunny.vercel.app'),
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
  publisher: 'Vercel',
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
    <html lang='en'>
      <body className={merge(maven.className, 'bg-main')}>
        <main className=' bg-primary min-h-screen lg:min-h-[96vh] xl:max-w-7xl lg:mx-8 xl:mx-auto text-text lg:my-4 lg:rounded-2xl lg:shadow-inner shadow-heading/30 overflow-hidden'>
          <Appbar />

          {children}

          <Footer />
        </main>
      </body>
    </html>
  )
}
