import Image from 'next/image'
import Link from 'next/link'

import Container from './Container'
import Keywords from './Keywords'

export default function Projects({ count }: { count: number }) {
  return (
    <Container>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8'>
        {Array.from({ length: count }, (_, idx) => idx + 1).map((i) => (
          <div className='col-auto rounded-lg overflow-hidden' key={i}>
            <Image
              src='/images/project.png'
              alt={`project - ${i}`}
              width={300}
              height={200}
              className='w-full'
            />
            <div className='mt-2'>
              <Link
                href='https://roktodata.com'
                className='font-medium text-2xl uppercase text-heading hover:underline hover:text-main'
              >
                roktodata.com
              </Link>
            </div>
            <p className='text-white italic -mt-1'>
              Full-stack Blood Donation Application
            </p>
            <p className='text-sm mt-2'>
              Revolutionary blood donation platform using Modern Techs. Empowers
              users/donors/admins with profiles, appointment scheduling,
              donation tracking, and community engagement features for seamless
              donor-receiver interaction.
            </p>
            <div className='mt-4'>
              <Keywords
                items={['nextjs', 'typescript', 'tailwindcss']}
                compact
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
