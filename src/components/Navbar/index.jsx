import React, { useState } from 'react'
import { Link } from 'react-scroll'

import { FaBars, FaTimes, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

import Logo from '/images/logo.png'
import { navLinks, socialLinks } from './data'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed flex h-[80px] w-full items-center justify-between bg-[#0a192f] px-4 font-bold capitalize text-gray-300'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '100px' }} />
      </div>
      {/* menu */}
      <ul className='hidden md:flex'>
        {navLinks.map(({ id, link }) => (
          <li key={id}>
            <Link to={link} smooth={true} duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='z-10 text-3xl md:hidden'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center bg-[#0a192f]'
        }
      >
        {navLinks.map(({ id, link }) => (
          <li key={id} className='py-6 text-4xl'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons
      <div className='fixed top-[35%] left-0 hidden flex-col lg:flex '>
        <ul>
          <li className='ml-[-100px] mb-1 flex h-[60px] w-[160px] items-center justify-between rounded bg-[#333333] duration-300 hover:ml-[-10px]'>
            <a
              className='flex w-full items-center justify-between text-gray-300'
              href='https://github.com/rjaybernardo'
              target='_blank'
              rel='noreferrer'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  )
}

export default Navbar
