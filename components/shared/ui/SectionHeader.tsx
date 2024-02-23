import Container from './Container'

export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className='bg-gradient-to-r from-heading to-primary border-l-2 border-white'>
      <Container>
        <h1 className='py-4 md:text-4xl uppercase text-white'>{title}</h1>
      </Container>
    </div>
  )
}
