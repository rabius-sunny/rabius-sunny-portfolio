'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import TypewriterComponent from 'typewriter-effect'

import Container from '../shared/ui/Container'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const floatVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

export default function Hero() {
  return (
    <section className='relative overflow-hidden'>
      {/* Animated Background Shapes */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        {/* Top-right gradient blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className='absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-heading/30 via-main/20 to-transparent rounded-full blur-[100px]'
        />

        {/* Bottom-left gradient blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
          className='absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-main/30 via-heading/10 to-transparent rounded-full blur-[80px]'
        />

        {/* Floating decorative shapes */}
        <motion.div
          variants={floatVariants}
          animate='animate'
          className='absolute top-1/4 left-[15%] w-20 h-20 border border-heading/20 rounded-2xl rotate-12'
        />
        <motion.div
          variants={floatVariants}
          animate='animate'
          style={{ animationDelay: '1s' }}
          className='absolute top-1/3 right-[20%] w-16 h-16 bg-gradient-to-br from-heading/10 to-main/10 rounded-full'
        />
        <motion.div
          variants={floatVariants}
          animate='animate'
          style={{ animationDelay: '2s' }}
          className='absolute bottom-1/4 left-[10%] w-12 h-12 border border-main/20 rounded-full'
        />

        {/* Grid pattern overlay */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(0,214,214,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,214,214,0.03)_1px,transparent_1px)] bg-[size:60px_60px]' />
      </div>

      <Container>
        <div className='grid grid-cols-1 pb-16 pt-32 lg:pb-28 lg:pt-48 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='col-auto text-center lg:text-start'
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className='mb-6'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-heading/10 to-main/10 border border-heading/20 backdrop-blur-sm'>
                <Sparkles className='w-4 h-4 text-heading' />
                <span className='text-heading text-sm font-medium tracking-wide'>
                  Welcome to my portfolio
                </span>
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className='font-bold mb-6 text-5xl lg:text-7xl xl:text-8xl tracking-tight'
            >
              <span className='block text-white'>Rabius</span>
              <span className='relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-heading via-sky-400 to-main'>
                Sunny
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 1,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className='absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-heading to-main origin-left rounded-full'
                />
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={itemVariants} className='h-12 mb-8'>
              <div className='flex items-center justify-center lg:justify-start gap-3'>
                <span className='w-8 h-[2px] bg-gradient-to-r from-heading to-transparent rounded-full' />
                <TypewriterComponent
                  component='h2'
                  options={{
                    wrapperClassName:
                      'font-medium text-xl lg:text-2xl text-text',
                    cursorClassName:
                      'text-heading font-medium text-xl lg:text-2xl',
                    strings: [
                      'Frontend Developer',
                      'Software Engineer',
                      'Backend Developer',
                      'Full Stack Developer'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    deleteSpeed: 30
                  }}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className='font-normal text-base lg:text-lg leading-relaxed text-text/70 max-w-xl mx-auto lg:mx-0 mb-10'
            >
              Full Stack Developer passionate about crafting seamless digital
              experiences. Skilled in frontend, backend, DevOps, and cloud
              infrastructure. Turning ideas into high-performance applications.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(0,214,214,0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                href='https://drive.google.com/uc?export=download&id=1ngEur21wHY9BfKTjTMREUpYhjE9F5jY8'
                className='relative btn bg-gradient-to-r from-heading to-main text-white font-semibold border-none overflow-hidden group'
              >
                <span className='relative z-10'>Download Resume</span>
                <motion.span className='absolute inset-0 bg-gradient-to-r from-main to-heading opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </motion.a>
              <Link href='/contact'>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='btn block border-2 border-heading/30 bg-transparent text-heading hover:bg-heading/10 hover:border-heading font-semibold transition-all duration-300'
                >
                  Contact Me
                </motion.span>
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className='hidden lg:flex items-center gap-2 mt-16 text-text/50'
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className='w-5 h-5' />
              </motion.div>
              <span className='text-sm'>Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className='col-auto order-first lg:order-last relative flex justify-center'
          >
            {/* Pulsating glow behind */}
            <motion.div
              variants={pulseVariants}
              animate='animate'
              className='absolute inset-0 bg-gradient-to-tr from-heading via-main to-heading rounded-full blur-[80px] opacity-30'
            />

            {/* Orbiting ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className='absolute w-[350px] h-[350px] lg:w-[480px] lg:h-[480px] border border-dashed border-heading/20 rounded-full'
            />

            {/* Secondary orbiting ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className='absolute w-[320px] h-[320px] lg:w-[440px] lg:h-[440px] border border-heading/10 rounded-full'
            >
              <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-heading rounded-full' />
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-main rounded-full' />
            </motion.div>

            <motion.div
              animate={{
                y: [-8, 8, -8],
                rotate: [-2, 2, -2]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className='relative w-[280px] h-[280px] lg:w-[380px] lg:h-[380px]'
            >
              {/* Decorative shapes around image */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className='absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-heading to-main rounded-lg'
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className='absolute -bottom-2 -left-2 w-6 h-6 border-2 border-heading rounded-full'
              />

              {/* Background frame */}
              <div className='absolute inset-0 border-2 border-white/10 rounded-[2rem] rotate-6 bg-gradient-to-br from-white/5 to-transparent'></div>

              {/* Main image container */}
              <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-[2rem] -rotate-3 overflow-hidden shadow-2xl border border-white/20'>
                <Image
                  src='/images/me.png'
                  alt='Rabius Sunny Photo'
                  fill
                  className='object-cover'
                  priority
                />
                {/* Overlay gradient */}
                <div className='absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent' />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
