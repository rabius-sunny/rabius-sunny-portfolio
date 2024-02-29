import Projects from '~/components/shared/ui/Projects'
import SectionHeader from '~/components/shared/ui/SectionHeader'

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
