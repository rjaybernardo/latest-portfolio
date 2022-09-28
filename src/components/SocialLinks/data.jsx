import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const links = [
  // {
  //   id: 1,
  //   child: (
  //     <>
  //       LinkedIn <FaLinkedin size={30} />
  //     </>
  //   ),
  //   href: 'https://linkedin.com',
  //   style: 'rounded-tr-md',
  // },
  {
    id: 1,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: 'https://github.com/rjaybernardo',
    style: 'rounded-tr-md',
  },
  {
    id: 2,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: 'mailto:raphaeljaybernardo@gmail.com',
  },
  {
    id: 3,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: '/resume.pdf',
    style: 'rounded-br-md',
    download: true,
  },
]

export default links
