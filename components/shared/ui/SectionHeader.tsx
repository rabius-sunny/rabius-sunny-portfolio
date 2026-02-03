import Container from './Container'

export default function SectionHeader({ title }: { title: string }) {
  return (
    <Container>
      <div className='flex items-center gap-4 mb-8'>
        <div className='h-1 w-12 bg-gradient-to-r from-heading to-main rounded-full'></div>
        <h1 className='text-3xl md:text-4xl font-bold uppercase text-white tracking-wider'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60'>
            {title}
          </span>
        </h1>
        <div className='h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent'></div>
      </div>
    </Container>
  )
}
