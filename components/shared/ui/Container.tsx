export default function Container({ children }: TChildren) {
  return (
    <div className='px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full'>
      {children}
    </div>
  )
}
