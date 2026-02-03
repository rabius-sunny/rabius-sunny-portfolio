import { merge } from '~/lib/utils'

type TProps = {
  items: string[]
  compact?: boolean
}

export default function Keywords({ items, compact }: TProps) {
  return (
    <div className='flex items-center gap-2 flex-wrap'>
      {items.map((keyword, idx) => (
        <span
          key={idx}
          className={merge(
            'font-medium text-xs rounded-full px-3 py-1 transition-all duration-300 border backdrop-blur-sm',
            'bg-white/5 border-white/10 text-white/90 hover:bg-white/10 hover:border-heading/50 hover:text-heading cursor-default hover:-translate-y-0.5',
            compact ? 'text-[0.6rem] px-2 py-0.5' : 'lg:text-sm'
          )}
        >
          {keyword}
        </span>
      ))}
    </div>
  )
}
