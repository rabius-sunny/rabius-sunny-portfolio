'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import projects from '~/constants/projects'

import Container from './Container'

export default function Projects() {
  return (
    <Container>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((item, idx) => (
          <div
            key={idx}
            className='bg-[#04162a] border border-[#0f2c4f] hover:border-[#00d8f6]/50 rounded-2xl p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,216,246,0.12)] group'
          >
            {/* Project Image */}
            <Link
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              className='block relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-[#020b14]'
            >
              <Image
                src={item.image}
                alt={item.heading}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300' />
            </Link>

            {/* Header Meta: Category + External Link */}
            <div className='flex items-center justify-between mb-1.5'>
              <span className='text-[11px] font-bold tracking-wider text-[#00d8f6] uppercase'>
                {item.subheading}
              </span>
              <Link
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-400 group-hover:text-[#00d8f6] transition-colors p-1'
                aria-label={`Open ${item.heading} project in new tab`}
              >
                <ExternalLink className='size-4' />
              </Link>
            </div>

            {/* Title */}
            <Link
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              className='block font-bold text-lg sm:text-xl text-white tracking-wide uppercase mb-2 group-hover:text-[#00d8f6] transition-colors'
            >
              {item.heading}
            </Link>

            {/* Description */}
            <p className='text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1'>
              {item.description}
            </p>

            {/* Tech Tags */}
            <div className='flex items-center gap-2 flex-wrap pt-2 mt-auto'>
              {item.keywords.map((kw, kwIdx) => (
                <span
                  key={kwIdx}
                  className='text-xs text-slate-300 bg-[#071d38] border border-[#133560] px-3 py-1 rounded-full font-medium'
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
