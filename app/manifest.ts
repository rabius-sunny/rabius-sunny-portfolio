import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rabius Sunny — Full Stack Software Engineer',
    short_name: 'Rabius Sunny',
    description:
      'Official portfolio of Rabius Sunny Rezoan, Full Stack Software Engineer',
    start_url: '/',
    display: 'standalone',
    background_color: '#002a32',
    theme_color: '#00d6d6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      },
      {
        src: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png'
      },
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ]
  }
}
