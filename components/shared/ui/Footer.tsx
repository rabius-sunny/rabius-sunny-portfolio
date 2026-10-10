import Link from 'next/link'
import { Facebook, Github, Linkedin, Mail } from 'lucide-react'

import Container from './Container'

export default function Footer() {
  return (
    <footer className='border-t border-[#0f2c4f]/80 bg-[#010e1d] mt-auto'>
      <Container>
        <div className='py-12'>
          {/* Top Section: Logo & Social Links */}
          <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6'>
            <div>
              <Link
                href='/'
                className='text-xl sm:text-2xl font-extrabold tracking-tight flex items-center gap-1.5'
              >
                <span className='text-white font-black'>RABIUS</span>
                <span className='text-[#00d8f6] font-black'>SUNNY</span>
              </Link>
              <p className='text-slate-400 text-xs sm:text-sm mt-2 max-w-sm'>
                Building digital experiences with passion and precision.
              </p>
            </div>

            <div className='flex items-center gap-5'>
              <Link
                href='https://github.com/rabius-sunny'
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-400 hover:text-[#00d8f6] hover:scale-110 transition-all duration-200'
                aria-label='GitHub profile'
              >
                <Github className='size-5' />
              </Link>
              <Link
                href='https://fb.com/rabibinsalam'
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-400 hover:text-[#00d8f6] hover:scale-110 transition-all duration-200'
                aria-label='Facebook profile'
              >
                <Facebook className='size-5' />
              </Link>
              <Link
                href='https://linkedin.com/in/rabius-sunny'
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-400 hover:text-[#00d8f6] hover:scale-110 transition-all duration-200'
                aria-label='LinkedIn profile'
              >
                <Linkedin className='size-5' />
              </Link>
              <Link
                href='mailto:contact@rabiussunny.com'
                className='text-slate-400 hover:text-[#00d8f6] hover:scale-110 transition-all duration-200'
                aria-label='Email contact'
              >
                <Mail className='size-5' />
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className='my-8 border-t border-[#0f2c4f]/60' />

          {/* Bottom Section: Copyright & Credit */}
          <div className='flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium gap-2'>
            <p>
              &copy; {new Date().getFullYear()} Rabius Sunny. All rights reserved.
            </p>
            <p>Designed & Developed with ❤️</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
