import React, { useState } from 'react'

import { Link } from 'react-scroll'
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

import Logo from '/images/logo.png'
import links from './data'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed flex h-[80px] w-full items-center justify-between bg-[#0a192f] px-4 font-bold text-gray-300'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '100px' }} />
      </div>
    </div>
  )
}

export default Navbar
