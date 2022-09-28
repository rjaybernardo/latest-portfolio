import links from './data'

const SocialLinks = () => {
  return (
    <div className='fixed top-[35%] left-0 hidden flex-col lg:flex'>
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              'ml-[-100px] flex h-14 w-[160px] items-center justify-between bg-gray-500 px-4 duration-300 hover:ml-[-10px] hover:rounded-md' +
              ' ' +
              style
            }
          >
            <a
              href={href}
              className='flex w-full items-center justify-between text-white'
              download={download}
              target='_blank'
              rel='noreferrer'
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
