import { Metadata } from 'next'
import Projects from '~/components/shared/ui/Projects'
import SectionHeader from '~/components/shared/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Projects of Rabius Sunny Rezoan, software developer, frontend engineer and fullstack lover. All personal and projects running on production are listed here.'
}

export default function ProjectsPage() {
  return (
    <div>
      <SectionHeader title='Projects' />
      <div className='my-20'>
        <Projects />
      </div>
    </div>
  )
}
