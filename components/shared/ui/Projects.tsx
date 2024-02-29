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
          <div key={idx} className='col-auto rounded-lg overflow-hidden'>
            <Image
              src={item.image}
              alt={item.heading}
              width={300}
              height={200}
              className='w-full'
            />
            <div className='mt-2'>
              <Link
                href={item.link}
                className='font-medium text-2xl uppercase text-heading hover:underline hover:text-main'
              >
                {item.heading}
              </Link>
            </div>
            <p className='text-white italic -mt-1'>{item.subheading}</p>
            <p className='text-sm mt-2'>{item.description}</p>
            <div className='mt-4'>
              <Keywords items={item.keywords} compact />
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
