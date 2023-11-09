import portfolios from './data'

const Experience = () => {
  return (
    <div
      name='experience'
      className='w-full bg-[#0a192f] pt-24 pb-64 text-gray-300 md:h-screen md:pt-20 md:pb-0'
    >
      <div className='mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4'>
        <div className='pb-8'>
          <p className='inline border-b-4 border-pink-600 text-5xl font-bold text-gray-300'>
            Experience
          </p>
          <p className='py-6 text-center text-pink-600'>
            Check out some of my recent work
          </p>
        </div>
        {/* Container */}
        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
          {portfolios.map(({ id, img, title, url, github }) => (
            <div
              key={id}
              style={{ backgroundImage: `url(${img})` }}
              className='content-div  group container mx-auto flex items-center justify-center rounded-md shadow-lg'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold tracking-wider text-white'>
                  {title}
                </span>

                <div className='pt-8 text-center'>
                  <a href={url} target='_blank' rel='noreferrer'>
                    <button className='m-2 rounded-lg bg-white px-4 py-3 text-center text-lg font-bold text-gray-700'>
                      Demo
                    </button>
                  </a>
                  <a href={github} target='_blank' rel='noreferrer'>
                    <button className='m-2 rounded-lg bg-white px-4 py-3 text-center text-lg font-bold text-gray-700'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className='py-6 text-center text-pink-600'>Password: Bernardo</p>
      </div>
    </div>
  )
}

export default Experience
