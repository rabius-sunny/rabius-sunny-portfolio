'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, Github, Linkedin, Mail } from 'lucide-react'

import Container from '../shared/ui/Container'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rabius.sunny@example.com',
    href: 'mailto:contact@rabiussunny.com'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rabius-sunny',
    href: 'https://linkedin.com/in/rabius-sunny'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/rabiussunny',
    href: 'https://github.com/rabius-sunny'
  }
]

export default function ContactCta() {
  return (
    <section id='contact' className='py-16 lg:py-24 relative overflow-hidden'>
      {/* Background Ambient Glow */}
      <div className='absolute bottom-0 right-10 w-[450px] h-[450px] bg-[#00d8f6]/10 rounded-full blur-[140px] pointer-events-none -z-10' />

      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative'>
          {/* Left Column: Heading & Text */}
          <div className='lg:col-span-7 flex flex-col items-start'>
            <div className='flex items-center gap-2 mb-2'>
              <span className='w-5 h-[2px] bg-[#00d8f6]' />
              <span className='text-[11px] sm:text-xs font-bold tracking-widest text-[#00d8f6] uppercase'>
                LET&apos;S CONNECT
              </span>
            </div>

            <h2 className='text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mt-1'>
              Interested in working
              <br />
              <span className='text-[#00d8f6]'>together?</span>
            </h2>

            <p className='text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg mt-5'>
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just having a chat about technology. Feel free to reach
              out!
            </p>
          </div>

          {/* Right Column: Contact Cards with Dot Matrix */}
          <div className='lg:col-span-5 relative'>
            {/* Dot Matrix Decoration in Background */}
            <div className='absolute -right-8 -top-8 w-64 h-64 -z-10 hidden sm:grid grid-cols-8 gap-3 opacity-25 pointer-events-none'>
              {Array.from({ length: 64 }).map((_, i) => (
                <span key={i} className='size-1 rounded-full bg-[#00d8f6]' />
              ))}
            </div>

            <div className='flex flex-col gap-4'>
              {contactItems.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx}>
                    <Link
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className='bg-[#04162a] border border-[#0f2c4f] hover:border-[#00d8f6]/50 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,216,246,0.12)] hover:-translate-y-0.5 group'
                    >
                      <div className='flex items-center gap-4 min-w-0'>
                        <div className='size-12 rounded-xl bg-[#00d8f6]/10 border border-[#00d8f6]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform'>
                          <Icon className='size-5 text-[#00d8f6]' />
                        </div>
                        <div className='flex flex-col min-w-0'>
                          <span className='text-xs text-slate-400 font-medium'>
                            {item.label}
                          </span>
                          <span className='text-sm sm:text-base font-semibold text-white group-hover:text-[#00d8f6] transition-colors truncate'>
                            {item.value}
                          </span>
                        </div>
                      </div>

                      <ChevronRight className='size-5 text-slate-500 group-hover:text-[#00d8f6] group-hover:translate-x-1 transition-all shrink-0' />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
