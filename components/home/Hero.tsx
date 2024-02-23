'use client'

import Image from 'next/image'
import TypewriterComponent from 'typewriter-effect'

import Container from '../shared/ui/Container'

export default function Hero() {
  return (
    <Container>
      <div className='grid grid-cols-1 my-10 lg:my-20 lg:grid-cols-2 gap-8 lg:gap-4 justify-items-center'>
        <div className='col-auto text-center lg:text-start'>
          <TypewriterComponent
            component='h2'
            options={{
              wrapperClassName: 'font-medium text-2xl text-heading',
              cursorClassName: 'text-white font-mediium text-2xl',
              strings: [
                'Frontend Developer',
                'Software Engineer',
                'Backend Developer',
                'Full stack Developer'
              ],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 30
            }}
          />
          <h1 className='font-semibold mb-8 text-5xl'>Rabius Sunny</h1>
          <p className='font-medium text-justify lg:text-start'>
            Web Developer adept at contributing to collaborative working
            environments, finding solutions and determining customer
            satisfaction. Designed and developed web applications across the
            latest technologies and tools, multiple APIs, third-party
            integrations and databases meeting the highest standards, best
            practices and speed.
          </p>
          <div className='mt-6 sm:flex gap-4'>
            <a
              href='https://drive.google.com/uc?export=download&id=1ngEur21wHY9BfKTjTMREUpYhjE9F5jY8'
              className='btn bg-heading w-full sm:w-auto block sm:inline text-primary hover:shadow-lg hover:shadow-heading/80'
            >
              Download Resume
            </a>
            <button className='border btn w-full sm:w-auto mt-4 sm:mt-0 border-heading hover:shadow-lg hover:shadow-heading/50'>
              Contact
            </button>
          </div>
        </div>
        <div className='col-auto order-first lg:order-last'>
          <Image
            src='/images/photo.jpg'
            alt='Rabius Sunny Photo'
            width={300}
            height={300}
            className='rounded-3xl'
          />
        </div>
      </div>
    </Container>
  )
}
