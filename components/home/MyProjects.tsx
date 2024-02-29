import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import Projects from '../shared/ui/Projects'
import SectionHeader from '../shared/ui/SectionHeader'

export default function MyProjects() {
  return (
    <section>
      <SectionHeader title='projects' />
      <div className='mt-10'></div>
      <Projects />
      <div className='mt-8 flex justify-center'>
        <Link
          href='/projects'
          className='flex items-center gap-2 btn border-heading border hover:shadow-md hover:shadow-heading'
        >
          More projects
          <ArrowRight className='size-5 mt-0.5' strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  )
}
