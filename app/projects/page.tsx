import { Metadata } from 'next'
import Projects from '~/components/shared/ui/Projects'
import SectionHeader from '~/components/shared/ui/SectionHeader'
import ProjectSchema from '~/components/seo/ProjectSchema'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Projects of Rabius Sunny Rezoan, software developer, frontend engineer and fullstack lover. All personal and projects running on production are listed here.',
  alternates: {
    canonical: 'https://rabiussunny.com/projects'
  },
  openGraph: {
    title: 'Projects | Rabius Sunny',
    description:
      'Projects of Rabius Sunny Rezoan, software developer, frontend engineer and fullstack lover. All personal and projects running on production are listed here.',
    url: 'https://rabiussunny.com/projects',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Rabius Sunny',
    description:
      'Projects of Rabius Sunny Rezoan, software developer, frontend engineer and fullstack lover. All personal and projects running on production are listed here.'
  }
}

export default function ProjectsPage() {
  return (
    <div className='pt-24'>
      <ProjectSchema />
      <SectionHeader title='Projects' />
      <div className='my-20'>
        <Projects />
      </div>
    </div>
  )
}
