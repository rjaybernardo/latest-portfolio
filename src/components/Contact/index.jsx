const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full bg-[#0a192f] pt-20 text-gray-300  md:h-screen'
    >
      <div className='mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4'>
        <div className='pb-8'>
          <p className='inline border-b-4 border-pink-600 text-5xl font-bold text-gray-300'>
            Contact
          </p>
        </div>
        <div className=' flex items-center justify-center'>
          <form
            method='POST'
            action='https://getform.io/f/fe6ff876-2803-421c-98b8-fcd14b8476d2'
            className='flex w-full max-w-[600px] flex-col'
          >
            <p className='py-6  text-pink-600'>
              Submit the form below or shoot me an email
              <br />- raphaeljaybernardo@gmail.com
            </p>
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              className='rounded-md border-2 bg-transparent p-2 text-white focus:outline-none'
            />
            <input
              type='text'
              name='email'
              placeholder='Enter your email'
              className='my-4 rounded-md border-2 bg-transparent p-2 text-white focus:outline-none'
            />
            <textarea
              name='message'
              placeholder='Enter your message'
              rows='10'
              className='rounded-md border-2 bg-transparent p-2 text-white focus:outline-none'
            ></textarea>
            <button className='my-8 mx-auto flex items-center rounded-md bg-gradient-to-b from-pink-500 to-pink-800 px-6 py-3 text-white duration-300 hover:scale-110'>
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
