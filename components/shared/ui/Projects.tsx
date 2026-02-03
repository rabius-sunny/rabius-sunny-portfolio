import Image from 'next/image'
import Link from 'next/link'
import projects from '~/constants/projects'

import Container from './Container'
import Keywords from './Keywords'

export default function Projects() {
  return (
    <Container>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map((item, idx) => (
          <div
            key={idx}
            className='group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-heading/50 transition-all duration-300 hover:shadow-xl hover:shadow-heading/10 flex flex-col'
          >
            <Link
              className='block w-full h-56 sm:h-64 xl:h-56 overflow-hidden relative'
              target='_blank'
              href={item.link}
            >
              <Image
                src={item.image}
                alt={item.heading}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300' />
            </Link>

            <div className='p-6 flex flex-col flex-1'>
              <div className='mb-auto'>
                <Link
                  target='_blank'
                  href={item.link}
                  className='block font-bold text-xl uppercase text-white group-hover:text-heading transition-colors'
                >
                  {item.heading}
                </Link>
                <p className='text-heading/80 text-sm font-medium mb-3 mt-1'>
                  {item.subheading}
                </p>
                <p className='text-text/70 text-sm leading-relaxed mb-4 line-clamp-3'>
                  {item.description}
                </p>
              </div>

              <div className='pt-4 border-t border-white/10 mt-2'>
                <Keywords items={item.keywords} compact />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
