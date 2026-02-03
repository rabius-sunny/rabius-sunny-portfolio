'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { siteInfo } from '~/config/site'
import { motion, useCycle } from 'framer-motion'

import Container from '../ui/Container'
import SideNavbar from './SideNavbar'
import NavToggler from './Toggler'

const sidebarAnimation = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(15px at 32px 35px)',
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-primary/80 backdrop-blur-lg border-white/5 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <Container>
        <div className='flex items-center justify-between' aria-label='Global'>
          <div className='flex z-50'>
            <Link
              href='/'
              className='block w-40 md:w-48 relative transition-opacity hover:opacity-80'
            >
              <span className='sr-only'>Rabius Sunny</span>
              <Image
                src='/images/logo.svg'
                width={200}
                height={60}
                priority
                className='size-full pb-2 md:pb-3'
                alt='logo'
              />
            </Link>
          </div>
          <div className='z-50 md:hidden'>
            <motion.nav
              className={`fixed top-0 left-0 bottom-0 w-full md:w-80`}
              initial={false}
              animate={isOpen ? 'open' : 'closed'}
            >
              <motion.div
                className='absolute top-0 left-0 bottom-0 w-full md:w-80 bg-primary/95 backdrop-blur-xl border-r border-white/10'
                variants={sidebarAnimation}
              />
              <SideNavbar toggle={toggleOpen} />
              <NavToggler toggle={() => toggleOpen()} />
            </motion.nav>
          </div>
          {isOpen && (
            <div
              className='fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden'
              aria-hidden='true'
              onClick={() => toggleOpen()}
            />
          )}
          <div className='hidden md:flex items-center gap-1 bg-white/5 px-2 py-1 rounded-full border border-white/10 backdrop-blur-sm'>
            {siteInfo.navItems.map((item: TNavItems) => (
              <Link
                key={item.title}
                href={item.href}
                className='text-sm font-medium uppercase text-text/80 hover:text-white px-5 py-2 rounded-full hover:bg-white/10 transition-all duration-300 ease-in-out'
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </header>
  )
}
