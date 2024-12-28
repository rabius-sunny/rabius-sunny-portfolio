import { motion } from 'framer-motion'

const Path = (props: any) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='hsl(0, 0%, 18%)'
    strokeLinecap='round'
    {...props}
  />
)

export default function NavToggler({ toggle }: { toggle: any }) {
  return (
    <button
      className='outline-none border-none select-none cursor-pointer bg-text absolute top-5 left-7 size-8 rounded-full flex items-center justify-center'
      onClick={toggle}
    >
      <svg width='25' height='15' viewBox='0 0 23 23'>
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' }
          }}
          transition={{ duration: 1 }}
        />
        <Path
          d='M 2 9.423 L 10 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' }
          }}
          transition={{ duration: 1 }}
        />
      </svg>
    </button>
  )
}
