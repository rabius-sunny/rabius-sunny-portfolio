'use client'

import Link from 'next/link'
import { siteInfo } from '~/config/site'
import { motion } from 'framer-motion'
import { Slack } from 'lucide-react'

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}
const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

const MenuItem = ({ item }: { item: TNavItems }) => {
  return (
    <motion.li
      variants={linkVariants}
      className='p-0 list-none mb-10 flex items-center cursor-pointer'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Slack className='text-teal-400 h-7 w-7 mr-2' />
      <Link href={item.href} className='text-teal-600'>
        {item.title}
      </Link>
    </motion.li>
  )
}

export default function SideNavbar() {
  return (
    <motion.ul variants={navVariants} className='m-0 p-6 absolute top-20 w-60'>
      {siteInfo.navItems.map((item: TNavItems, idx: number) => (
        <MenuItem item={item} key={idx} />
      ))}
    </motion.ul>
  )
}
