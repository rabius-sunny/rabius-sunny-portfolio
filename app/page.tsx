import type { Metadata } from 'next'
import ContactCta from '~/components/home/ContactCta'
import Hero from '~/components/home/Hero'
import MyProjects from '~/components/home/MyProjects'
import Skills from '~/components/home/Skills'
import { siteInfo } from '~/config/site'

export const metadata: Metadata = {
  title: siteInfo.name,
  description: siteInfo.description,
  alternates: {
    canonical: 'https://rabiussunny.com'
  },
  openGraph: {
    ...siteInfo.openGraph,
    title: siteInfo.name,
    description: siteInfo.description
  }
}

export default function Home() {
  return (
    <div className='relative overflow-hidden bg-[#011224] text-slate-100'>
      {/* Ambient background glows */}
      <div className='absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-[#00d8f6]/5 rounded-full blur-[160px] pointer-events-none -z-10' />
      <div className='absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#0077b6]/10 rounded-full blur-[180px] pointer-events-none -z-10' />
      <div className='absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#00d8f6]/5 rounded-full blur-[160px] pointer-events-none -z-10' />

      <Hero />
      <MyProjects />
      <Skills />
      <ContactCta />
    </div>
  )
}
