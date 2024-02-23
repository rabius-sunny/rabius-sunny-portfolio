import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import Container from '../shared/ui/Container'
import Keywords from '../shared/ui/Keywords'
import SectionHeader from '../shared/ui/SectionHeader'

export default function Projects() {
  return (
    <section>
      <SectionHeader title='projects' />
      <div className='mt-10'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8'>
            {[1, 2, 3].map((i) => (
              <div className='col-auto rounded-lg overflow-hidden' key={i}>
                <Image
                  src='/images/project.png'
                  alt={`project - ${i}`}
                  width={300}
                  height={200}
                  className='w-full'
                />
                <div className='mt-2'>
                  <Link
                    href='https://roktodata.com'
                    className='font-medium text-2xl uppercase text-heading hover:underline hover:text-main'
                  >
                    roktodata.com
                  </Link>
                </div>
                <p className='text-white italic -mt-1'>
                  Full-stack Blood Donation Application
                </p>
                <p className='text-sm mt-2'>
                  Full-stack application enabling efficient blood matching,
                  appointment scheduling and user reviews across donor,
                  receiver, and admin dashboards. Facilitated intuitive blood
                  type search and management processes for donors and receivers,
                  fostering trust with review capabilities.
                </p>
                <div className='flex items-center gap-2 mt-2'>
                  <p className='font-medium text-sm'>keyword : </p>
                  <Keywords
                    items={['nextjs', 'typescript', 'tailwindcss']}
                    compact
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div className='mt-8 flex justify-center'>
        <Link
          href='/projects'
          className='flex items-center gap-2 btn border-heading border hover:shadow-md hover:shadow-heading'
        >
          more projects{' '}
          <ArrowRight className='size-5 mt-0.5' strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  )
}
