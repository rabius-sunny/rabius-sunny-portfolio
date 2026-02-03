'use client'

import Link from 'next/link'
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

const MenuItem = ({ item }: { item: TNavItems }) => {
  return (
    <motion.li
      variants={linkVariants}
      className='p-0 list-none mb-8 flex items-center cursor-pointer'
      whileHover={{ scale: 1.1, x: 10 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={item.href}
        className='text-white hover:text-heading transition-colors uppercase font-bold text-3xl tracking-wide'
      >
        {item.title}
      </Link>
    </motion.li>
  )
}

export default function SideNavbar({ toggle }: { toggle: Cycle }) {
  return (
    <motion.ul
      variants={navVariants}
      className='m-0 absolute top-20 p-6'
      onClick={() => toggle()}
    >
      {siteInfo.navItems.map((item: TNavItems, idx: number) => (
        <MenuItem item={item} key={idx} />
      ))}
    </motion.ul>
  )
}
