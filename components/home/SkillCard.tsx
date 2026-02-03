'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Monitor,
  Package,
  Server,
  Sparkles,
  Terminal
} from 'lucide-react'

import Keywords from '../shared/ui/Keywords'

const iconMap: Record<string, any> = {
  Languages: Code2,
  'Frontend development': Monitor,
  'Backend development': Server,
  'Productivity Tools': Terminal,
  'Utility Packages': Package,
  Familiarity: Sparkles
}

export default function SkillCard({
  skill,
  index
}: {
  skill: TSkills
  index: number
}) {
  const Icon = iconMap[skill.title] || Code2

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className='bg-white/5 backdrop-blur-sm border border-white/5 p-6 md:p-8 rounded-3xl hover:border-heading/30 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden'
    >
      <div className='absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110'>
        <Icon size={120} />
      </div>

      <div className='flex items-center gap-4 mb-6'>
        <div className='p-3 rounded-xl bg-gradient-to-br from-heading/20 to-main/20 text-heading border border-heading/20 group-hover:scale-110 transition-transform duration-300'>
          <Icon size={28} />
        </div>
        <h3 className='text-2xl font-bold text-white group-hover:text-heading transition-colors'>
          {skill.title}
        </h3>
      </div>

      <p className='text-text/70 mb-6 text-sm leading-relaxed min-h-[40px]'>
        {skill.description}
      </p>

      <div className='pt-6 border-t border-white/5'>
        <Keywords items={skill.skills} />
      </div>
    </motion.div>
  )
}
