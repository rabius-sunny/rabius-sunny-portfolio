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
            'font-medium text-sm text-white rounded-full px-3 py-1.5 uppercase',
            idx % 2 === 0 ? 'bg-sky-500' : 'bg-pink-500',
            compact && 'px-1.5 py-0.5 text-[0.6rem]'
          )}
        >
          {keyword}
        </span>
      ))}
    </div>
  )
}
