import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import Container from '../shared/ui/Container'
import Projects from '../shared/ui/Projects'
import SectionHeader from '../shared/ui/SectionHeader'

export default function MyProjects() {
  return (
    <section className='py-10'>
      <SectionHeader title='projects' />
      <div className='mt-12'>
        <Projects />
      </div>
      <Container>
        <div className='mt-12 flex justify-center'>
          <Link
            href='/projects'
            className='group w-full sm:w-auto relative px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-heading/10 hover:border-heading/50 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden'
          >
            <span className='font-medium text-white group-hover:text-heading transition-colors'>
              More projects
            </span>
            <ArrowRight
              className='size-5 text-white group-hover:text-heading transition-colors group-hover:translate-x-1 duration-300'
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </Container>
    </section>
  )
}
