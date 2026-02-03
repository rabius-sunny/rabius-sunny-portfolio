import { skillset } from '~/constants/skillset'

import Container from '../shared/ui/Container'
import SectionHeader from '../shared/ui/SectionHeader'
import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <section className='relative z-10 py-10 lg:py-20'>
      <SectionHeader title='professional skills' />
      <div className='mt-12'>
        <Container>
          <div className='columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6'>
            {skillset.map((skill, idx) => (
              <div key={idx} className='break-inside-avoid'>
                <SkillCard skill={skill} index={idx} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}
