import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-[#0a192f]'>
      {/* Container */}
      <div className='mx-auto flex h-full max-w-[950px] flex-col justify-center px-8'>
        <p className='font-bold tracking-wide text-pink-600'>Hi, my name is</p>
        <h1 className='pt-2 text-4xl font-bold text-[#ccd6f6] sm:text-6xl'>
          Raphael Jay Bernardo
        </h1>
        <h2 className='text-4xl font-bold text-[#8892b0] sm:text-7xl'>
          I'm a Full Stack Developer.
        </h2>
        <p className='max-w-[700px] py-4 text-[#8892b0]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <Link to='experience' smooth duration={500}>
            <button className='group my-2 flex items-center rounded-md border-2 border-pink-600 px-6 py-3 font-medium text-pink-600 hover:border-pink-600 hover:bg-pink-600 hover:font-medium hover:text-white'>
              View Work
              <span className='duration-300 group-hover:rotate-90'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
