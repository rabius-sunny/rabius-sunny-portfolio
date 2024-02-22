import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      primary: '#002a32',
      main: '#0051a5',
      text: '#a4d2d6',
      heading: '#00d6d6',
      white: colors.white,
      sky: colors.sky,
      pink: colors.pink
    }
  },
  plugins: []
}
export default config
