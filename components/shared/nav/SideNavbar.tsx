'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteInfo } from '~/config/site'
import { Cycle, motion } from 'framer-motion'

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    display: 'block',
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    display: 'none',
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      delayChildren: 0.5
    }
  }
}

export default function SideNavbar({ toggle }: { toggle: Cycle }) {
  return (
    <motion.div
      variants={navVariants}
      className='absolute top-24 left-0 w-full p-8 flex flex-col gap-6'
    >
      <ul className='flex flex-col gap-6 p-0 m-0'>
        {siteInfo.navItems.map((item: TNavItems, idx: number) => (
          <motion.li
            key={idx}
            variants={linkVariants}
            className='list-none'
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={item.href}
              onClick={() => toggle()}
              className='text-2xl font-bold text-slate-200 hover:text-[#00d8f6] transition-colors'
            >
              {item.title}
            </Link>
          </motion.li>
        ))}
      </ul>

      <motion.div variants={linkVariants} className='pt-4'>
        <Link
          href='#contact'
          onClick={() => toggle()}
          className='inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#00d8f6]/50 bg-[#061e38]/60 text-base font-semibold text-[#00d8f6] hover:bg-[#00d8f6] hover:text-[#011224] transition-all'
        >
          <span>Say Hello</span>
          <ArrowRight className='size-4' />
        </Link>
      </motion.div>
    </motion.div>
  )
}
