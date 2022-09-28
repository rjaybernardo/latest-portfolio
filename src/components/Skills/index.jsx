import tech from './data'

const Skills = () => {
  return (
    <div
      name='skills'
      className='h-screen  w-full  bg-[#0a192f] pt-96 pb-32 text-gray-300 md:pt-32'
    >
      {/* Container */}
      <div className='mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4 pt-12 pb-28'>
        <div>
          <p className='inline border-b-4 border-pink-600 text-5xl font-bold '>
            Skills
          </p>
          <p className='py-4 text-center text-pink-600'>
            These are the technologies I've worked with
          </p>
          <div className='grid w-full grid-cols-2 gap-5 py-8 text-center sm:grid-cols-4'>
            {tech.map(({ id, title, src, style }) => (
              <div
                key={id}
                className={`shadow-md shadow-orange-500 duration-500 hover:scale-110 ${style}`}
              >
                <img className='mx-auto w-20 pt-3' src={src} alt={title} />
                <p className='my-4'>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
