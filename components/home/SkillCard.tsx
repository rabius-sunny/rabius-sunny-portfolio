import Keywords from '../shared/ui/Keywords'

export default function SkillCard({ skill }: { skill: TSkills }) {
  return (
    <div>
      <h1 className='text-2xl text-white'>{skill.title}</h1>
      <p>{skill.description}</p>
      <div className='mt-2'>
        <Keywords items={skill.skills} />
      </div>
    </div>
  )
}
