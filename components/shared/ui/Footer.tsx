import Link from 'next/link'
import { Facebook, Github, Linkedin, Mail, Twitter } from 'lucide-react'

import Container from './Container'

export default function Footer() {
  return (
    <footer className='border-t border-white/5 bg-black/20 backdrop-blur-sm mt-auto'>
      <Container>
        <div className='py-8 md:py-12'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
            <div className='text-center md:text-left'>
              <h2 className='text-xl font-bold text-white mb-2'>
                Rabius Sunny
              </h2>
              <p className='text-text/60 text-sm max-w-xs'>
                Building digital experiences with passion and precision.
              </p>
            </div>

            <div className='flex items-center gap-6'>
              <Link href='https://github.com/rabius-sunny' className='group'>
                <Github className='text-heading/80 size-6 group-hover:text-white transition-colors group-hover:scale-110 duration-300' />
              </Link>
              <Link href='https://fb.com/rabibinsalam' className='group'>
                <Facebook className='text-heading/80 size-6 group-hover:text-white transition-colors group-hover:scale-110 duration-300' />
              </Link>
              <Link
                href='https://linkedin.com/in/rabius-sunny'
                className='group'
              >
                <Linkedin className='text-heading/80 size-6 group-hover:text-white transition-colors group-hover:scale-110 duration-300' />
              </Link>
              <Link href='mailto:contact@rabiussunny.com' className='group'>
                <Mail className='text-heading/80 size-6 group-hover:text-white transition-colors group-hover:scale-110 duration-300' />
              </Link>
            </div>
          </div>

          <div className='mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-text/40 font-medium'>
            <p>
              &copy; {new Date().getFullYear()} Rabius Sunny. All rights
              reserved.
            </p>
            <p className='mt-2 md:mt-0'>Designed & Developed with ❤️</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
