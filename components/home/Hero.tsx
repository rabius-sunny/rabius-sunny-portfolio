'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Code2,
  Download,
  Folder,
  Layers,
  Users,
  Zap
} from 'lucide-react'

import Container from '../shared/ui/Container'

export default function Hero() {
  return (
    <section id='about' className='relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden'>
      {/* Background Ambient Glows */}
      <div className='absolute top-1/4 -left-48 w-96 h-96 bg-[#00d8f6]/10 rounded-full blur-[140px] pointer-events-none -z-10' />
      <div className='absolute top-20 right-1/4 w-[500px] h-[500px] bg-[#0077b6]/20 rounded-full blur-[150px] pointer-events-none -z-10' />
      <div className='absolute top-1/3 right-10 w-[420px] h-[420px] bg-[#00d8f6]/15 rounded-full blur-[120px] pointer-events-none -z-10' />

      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center'>
          {/* Left Column: Text & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='lg:col-span-7 flex flex-col items-start'
          >
            {/* Top Badge */}
            <div className='inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#041a2e]/90 border border-[#00d8f6]/30 backdrop-blur-md mb-6 shadow-sm shadow-[#00d8f6]/10'>
              <span className='size-2 rounded-full bg-[#00d8f6] shadow-[0_0_8px_#00d8f6] animate-pulse' />
              <span className='text-[11px] sm:text-xs font-bold tracking-wider text-[#00d8f6] uppercase'>
                WELCOME TO MY PORTFOLIO
              </span>
            </div>

            {/* Main Headline */}
            <h1 className='text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight text-white leading-[1.08] mb-6'>
              Building digital
              <br />
              experiences that
              <br />
              work <span className='text-[#00d8f6]'>beautifully.</span>
            </h1>

            {/* Sub-headline: Name & Role */}
            <div className='mb-6'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2'>
                Rabius Sunny
              </h2>
              <p className='text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-slate-400'>
                Full Stack Developer
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className='text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8'>
              Full Stack Developer passionate about crafting seamless digital
              experiences. Skilled in frontend, backend, DevOps, and cloud
              infrastructure. Turning ideas into high-performance applications.
            </p>

            {/* Action Buttons */}
            <div className='flex flex-wrap items-center gap-4 mb-10'>
              <Link
                href='#projects'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00c5e8] hover:bg-[#38bdf8] text-[#011427] font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#00c5e8]/25 hover:shadow-[#00c5e8]/40 hover:-translate-y-0.5'
              >
                <Folder className='size-4' />
                <span>View Projects</span>
                <ArrowRight className='size-4' />
              </Link>

              <a
                href='https://drive.google.com/uc?export=download&id=1ngEur21wHY9BfKTjTMREUpYhjE9F5jY8'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#04172b]/80 hover:bg-[#072444] border border-[#00d8f6]/50 text-white font-medium text-sm transition-all duration-300 hover:-translate-y-0.5'
              >
                <Download className='size-4' />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Highlights List with Dividers */}
            <div className='flex flex-wrap items-center gap-3 sm:gap-5 pt-2 text-slate-300'>
              <div className='flex items-center gap-2 text-xs sm:text-sm font-medium'>
                <Code2 className='size-4 text-[#00d8f6]' />
                <span>Clean Code</span>
              </div>
              <span className='hidden sm:block h-3.5 w-[1px] bg-slate-700/60' />
              <div className='flex items-center gap-2 text-xs sm:text-sm font-medium'>
                <Zap className='size-4 text-[#00d8f6]' />
                <span>Modern Stack</span>
              </div>
              <span className='hidden sm:block h-3.5 w-[1px] bg-slate-700/60' />
              <div className='flex items-center gap-2 text-xs sm:text-sm font-medium'>
                <Layers className='size-4 text-[#00d8f6]' />
                <span>Scalable Solutions</span>
              </div>
              <span className='hidden sm:block h-3.5 w-[1px] bg-slate-700/60' />
              <div className='flex items-center gap-2 text-xs sm:text-sm font-medium'>
                <Users className='size-4 text-[#00d8f6]' />
                <span>Real World Impact</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Photo Card with Layered Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='lg:col-span-5 relative flex justify-center items-center'
          >
            <div className='relative w-[290px] sm:w-[350px] lg:w-[380px]'>
              {/* Layer 1: Vibrant glowing fluid shape behind top-right */}
              <div className='absolute -top-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#00d8f6] to-[#0066cc] rounded-[44px] rotate-[-10deg] blur-[2px] opacity-80 -z-10' />

              {/* Layer 2: Dot matrix on the right */}
              <div className='absolute -top-4 -right-12 z-0 hidden sm:grid grid-cols-4 gap-2 opacity-35'>
                {Array.from({ length: 32 }).map((_, i) => (
                  <span
                    key={i}
                    className='size-1 rounded-full bg-[#00d8f6]'
                  />
                ))}
              </div>

              {/* Layer 3: Secondary tilted glass frame behind */}
              <div className='absolute inset-0 bg-[#051a33]/60 border border-[#00d8f6]/30 rounded-[32px] -rotate-3 -z-10 backdrop-blur-sm' />

              {/* Layer 4: Main photo container */}
              <div className='relative aspect-[4/5] rounded-[28px] overflow-hidden border border-[#00d8f6]/40 shadow-[0_12px_45px_rgba(0,180,255,0.25)] bg-[#031527]'>
                <Image
                  src='/images/me.png'
                  alt='Rabius Sunny'
                  fill
                  sizes='(max-width: 768px) 320px, 420px'
                  priority
                  className='object-cover object-top'
                />

                {/* Subtle bottom vignette */}
                <div className='absolute inset-0 bg-gradient-to-t from-[#011224]/50 via-transparent to-transparent pointer-events-none' />

                {/* Inner border glow */}
                <div className='absolute inset-0 rounded-[28px] border border-white/10 pointer-events-none' />
              </div>

              {/* Layer 5: Signature overlaid on bottom right */}
              <div className='absolute -bottom-6 -right-6 z-20 pointer-events-none'>
                <Image
                  src='/images/signature.png'
                  alt='Rabius Sunny Signature'
                  width={210}
                  height={98}
                  className='drop-shadow-[0_4px_12px_rgba(0,216,246,0.6)] rotate-[-6deg]'
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
