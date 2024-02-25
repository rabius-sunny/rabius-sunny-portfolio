import Container from '~/components/shared/ui/Container'

export default function Contact() {
  return (
    <Container>
      <div className='max-w-md mx-auto min-h-[80vh]'>
        <h2 className='text-center my-10'>
          Your message is always valuable to me
        </h2>
        <form className='grid gap-4'>
          <div>
            <label htmlFor='name'>Your name</label>
            <input required id='name' name='name' className='input' />
          </div>
          <div>
            <label htmlFor='email'>Your email</label>
            <input
              required
              id='email'
              name='email'
              type='email'
              className='input'
            />
          </div>
          <div>
            <label htmlFor='message'>Your message</label>
            <textarea required id='message' name='message' className='input' />
          </div>
          <div className='mt-6 mb-20'>
            <button type='submit' className='btn bg-heading w-full text-main'>
              Send message
            </button>
          </div>
        </form>
      </div>
    </Container>
  )
}
