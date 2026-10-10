'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useCycle } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { siteInfo } from '~/config/site'

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        scrolled
          ? 'bg-[#011224]/85 backdrop-blur-md border-b border-[#0f2c4f]/60 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <Container>
        <div className='flex items-center justify-between' aria-label='Global'>
          {/* Logo */}
          <div className='flex z-50'>
            <Link
              href='/'
              className='text-xl sm:text-2xl font-extrabold tracking-tight transition-opacity hover:opacity-90 flex items-center gap-1.5'
            >
              <span className='text-white font-black'>RABIUS</span>
              <span className='text-[#00d8f6] font-black'>SUNNY</span>
            </Link>
          </div>

          {/* Mobile navigation toggle */}
          <div className='z-50 md:hidden'>
            <motion.nav
              className='fixed top-0 left-0 bottom-0 w-full'
              initial={false}
              animate={isOpen ? 'open' : 'closed'}
            >
              <motion.div
                className='absolute top-0 left-0 bottom-0 w-full bg-[#011224]/95 backdrop-blur-2xl border-r border-[#0f2c4f]'
                variants={sidebarAnimation}
              />
              <SideNavbar toggle={toggleOpen} />
              <NavToggler toggle={() => toggleOpen()} />
            </motion.nav>
          </div>

          {isOpen && (
            <div
              className='fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden'
              aria-hidden='true'
              onClick={() => toggleOpen()}
            />
          )}

          {/* Desktop navigation */}
          <div className='hidden md:flex items-center gap-8'>
            <nav className='flex items-center gap-7'>
              {siteInfo.navItems.map((item: TNavItems) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className='text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200'
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <Link
              href='#contact'
              className='group inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00d8f6]/50 bg-[#061e38]/30 text-sm font-medium text-[#00d8f6] hover:bg-[#00d8f6] hover:text-[#011224] transition-all duration-300 shadow-sm shadow-[#00d8f6]/20'
            >
              <span>Say Hello</span>
              <ArrowRight className='size-4 group-hover:translate-x-0.5 transition-transform' />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}
