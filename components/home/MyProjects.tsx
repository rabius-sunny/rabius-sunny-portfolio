'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import Container from '../shared/ui/Container'
import Projects from '../shared/ui/Projects'

export default function MyProjects() {
  return (
    <section id='projects' className='py-16 lg:py-24 relative'>
      {/* Background Subtle Ambient Glow */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00d8f6]/5 rounded-full blur-[140px] pointer-events-none -z-10' />

      <Container>
        {/* Section Header */}
        <div className='flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12'>
          <div className='flex flex-col'>
            <div className='flex items-center gap-2 mb-2'>
              <span className='w-5 h-[2px] bg-[#00d8f6]' />
              <span className='text-[11px] sm:text-xs font-bold tracking-widest text-[#00d8f6] uppercase'>
                FEATURED WORK
              </span>
            </div>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white'>
              Selected Projects
            </h2>
          </div>

          <div className='flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-10'>
            <p className='text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm'>
              Here are some of my recent projects. Each one represents a real
              problem, a practical solution, and a chance to learn something
              new.
            </p>

            <Link
              href='/projects'
              className='self-start sm:self-auto shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#00d8f6]/50 bg-[#061e38]/40 hover:bg-[#00d8f6] hover:text-[#011224] text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm shadow-[#00d8f6]/20'
            >
              <span>More Projects</span>
              <ArrowRight className='size-3.5' />
            </Link>
          </div>
        </div>
      </Container>

      {/* Projects Cards Grid */}
      <Projects />
    </section>
  )
}
