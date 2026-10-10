import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#011224',
        card: '#04162a',
        'card-border': '#0f2c4f',
        accent: '#00d8f6',
        heading: '#00d8f6',
        main: '#00a8e8',
        text: '#94a3b8'
      },
      keyframes: {
        'tiny-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'tiny-bounce': 'tiny-bounce 2.5s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
export default config
