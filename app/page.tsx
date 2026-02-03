import Hero from '~/components/home/Hero'
import MyProjects from '~/components/home/MyProjects'
import Skills from '~/components/home/Skills'

export default function Home() {
  return (
    <div className='relative overflow-hidden'>
      {/* Background Gradients */}
      <div className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-heading/20 rounded-full blur-[100px] -z-10' />
      <div className='absolute top-1/2 right-0 translate-x-1/3 w-[400px] h-[400px] bg-main/20 rounded-full blur-[80px] -z-10' />
      <div className='absolute bottom-0 left-10 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[60px] -z-10' />

      <Hero />
      <MyProjects />
      <Skills />
    </div>
  )
}
