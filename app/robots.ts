import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://rabiussunny.com/sitemap.xml',
    host: 'https://rabiussunny.com'
  }
}
