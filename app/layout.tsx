import type { Metadata } from 'next'
import { Maven_Pro } from 'next/font/google'

import './globals.css'

import Appbar from '~/components/shared/nav'
import Footer from '~/components/shared/ui/Footer'
import { siteInfo } from '~/config/site'

const maven = Maven_Pro({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteInfo.name,
    template: `%s | ${siteInfo.name}`
  },
  description: siteInfo.description,
  authors: siteInfo.author,
  generator: siteInfo.generator
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={maven.className}>
        <Appbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
