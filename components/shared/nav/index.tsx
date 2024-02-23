'use client'

import Image from 'next/image'
import Link from 'next/link'
import { siteInfo } from '~/config/site'
import { motion, useCycle } from 'framer-motion'

import Container from '../ui/Container'
import SideNavbar from './SideNavbar'
import NavToggler from './Toggler'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(20px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

export default function Appbar() {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <header className='shadow-lg shadow-heading/10'>
      <Container>
        <div
          className='flex items-center justify-between py-4 md:py-6'
          aria-label='Global'
        >
          <div className='flex ml-14 md:ml-0'>
            <Link href='/'>
              <span className='sr-only'>Rabius Sunny</span>
              <Image
                src='/images/logo.svg'
                width={200}
                height={60}
                alt='logo'
              />
            </Link>
          </div>
          <div className='z-[1000] md:hidden'>
            <motion.nav
              className='absolute top-0 left-0 bottom-0 w-80'
              initial={false}
              animate={isOpen ? 'open' : 'closed'}
            >
              <motion.div
                className='absolute -top-3 left-0 bottom-0 w-80 bg-text'
                variants={sidebar}
              />
              <SideNavbar />
              <NavToggler toggle={() => toggleOpen()} />
            </motion.nav>
          </div>
          {isOpen && (
            <div
              className='fixed inset-0 z-50 bg-black/30 backdrop-blur-sm'
              aria-hidden='true'
            />
          )}
          <div className='hidden md:flex md:gap-x-6 lg:gap-x-12'>
            {siteInfo.navItems.map((item: TNavItems) => (
              <Link
                key={item.title}
                href={item.href}
                className='text-sm font-medium uppercase text-white hover:text-heading'
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <Link
              href='https://drive.google.com/uc?export=download&id=1ngEur21wHY9BfKTjTMREUpYhjE9F5jY8'
              className='text-sm font-semibold leading-6'
            >
              Get Resume <span aria-hidden='true'>&rarr;</span>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}
