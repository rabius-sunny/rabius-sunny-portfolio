'use client'

import { skillset } from '~/constants/skillset'

import Container from '../shared/ui/Container'
import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <section id='skills' className='py-16 lg:py-24 relative'>
      {/* Background Ambient Glow */}
      <div className='absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[#00d8f6]/5 rounded-full blur-[140px] pointer-events-none -z-10' />

      <Container>
        {/* Section Header */}
        <div className='flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12'>
          <div className='flex flex-col'>
            <div className='flex items-center gap-2 mb-2'>
              <span className='w-5 h-[2px] bg-[#00d8f6]' />
              <span className='text-[11px] sm:text-xs font-bold tracking-widest text-[#00d8f6] uppercase'>
                MY EXPERTISE
              </span>
            </div>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white'>
              Professional Skills
            </h2>
          </div>

          <p className='text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm'>
            I work with modern tools and technologies to build robust, scalable
            and user-friendly applications.
          </p>
        </div>

        {/* 6 Skill Cards in 3x2 Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skillset.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  )
}
