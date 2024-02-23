import { skillset } from '~/constants/skillset'

import Container from '../shared/ui/Container'
import SectionHeader from '../shared/ui/SectionHeader'
import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <section>
      <SectionHeader title='professional skills' />
      <div className='mt-10'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='grid gap-6'>
              <SkillCard skill={skillset[0]} />
              <SkillCard skill={skillset[1]} />
              <SkillCard skill={skillset[2]} />
            </div>
            <div className='grid gap-6 md:gap-0 '>
              <SkillCard skill={skillset[3]} />
              <SkillCard skill={skillset[4]} />
              <SkillCard skill={skillset[5]} />
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
