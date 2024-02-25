import Link from 'next/link'
import { Facebook, Github, Linkedin } from 'lucide-react'

import Container from './Container'

export default function Footer() {
  return (
    <footer className='shadow-heading/10 pt-4 pb-2'>
      <Container>
        <div className='flex flex-col items-center gap-2 md:flex-row md:flex-between'>
          <div className='flex-center gap-4'>
            <Link href='https://github.com/rabius-sunny'>
              <Github className='text-heading size-6' />
            </Link>
            <Link href='https://fb.com/rabibinsalam'>
              <Facebook className='text-heading size-6' />
            </Link>
            <Link href='https://linkedin.com/in/rabius-sunny'>
              <Linkedin className='text-heading size-6' />
            </Link>
          </div>
          <p className='text-sm font-medium'>
            Copyright @ 2020 - {new Date().getFullYear()}
          </p>
        </div>
        <div className='text-center font-medium text-sm md:text-base mt-2'>
          Portfolio || Rabius Sunny
        </div>
      </Container>
    </footer>
  )
}
