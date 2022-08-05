import React, { useState } from 'react'
import Logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [nav, setNav] = useState(false)

  return (
    <nav>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between py-5'>
          <div>
            <Link to='/'>
              <h1 className='text-white text-3xl font-bold'>#rakuRaku</h1>
            </Link>
          </div>

          <div>
            <ul
              className={
                nav
                  ? 'flex md:items-center flex-col md:flex-row space-x-6 fixed md:static left-0 top-0 bg-[#242424] md:bg-transparent h-screen md:h-auto w-1/2 md:w-auto space-y-16 md:space-y-0 z-30 md:z-0 transition-all duration-300 ease-in-out'
                  : 'flex md:items-center flex-col md:flex-row space-x-6 fixed md:static -left-full top-0 bg-[#242424] md:bg-transparent h-screen md:h-auto w-1/2 md:w-auto space-y-16 md:space-y-0 z-30 md:z-0 transition-all duration-300 ease-in-out'
              }
            >
              <li className='mt-10 md:mt-0 ml-6 md:ml-0'>
                <Link
                  to='/'
                  className='text-clrLink font-medium transition-all duration-300  hover:text-white relative before:absolute before:bg-clrBtn before:w-0 before:h-[2px] before:-bottom-1 before:left-0 before:transition-all  ease-in-out hover:before:w-full'
                  onClick={() => setNav(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  className='text-clrLink font-medium transition-all duration-300 ease-in-out hover:text-white relative before:absolute before:bg-clrBtn before:w-0 before:h-[2px] before:-bottom-1 before:left-0 before:transition-all  hover:before:w-full'
                  href='#about'
                  onClick={() => setNav(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className='text-clrLink font-medium transition-all   hover:text-white relative before:absolute before:bg-clrBtn before:w-0 before:h-[2px] before:-bottom-1 before:left-0 before:transition-all duration-300 ease-in-out hover:before:w-full'
                  href='#instructor'
                  onClick={() => setNav(false)}
                >
                  Instructor
                </a>
              </li>
              {/* <li>
                <a
                  className='text-clrLink font-medium transition-all  hover:text-white relative before:absolute before:bg-clrBtn before:w-0 before:h-[2px] before:-bottom-1 before:left-0 before:transition-all duration-300 ease-in-out hover:before:w-full'
                  href='#subscribe'
                  onClick={() => setNav(false)}
                >
                  Subscribe
                </a>
              </li> */}
              <li>
                <a
                  className='text-clrLink font-medium transition-all  hover:text-white relative before:absolute before:bg-clrBtn before:w-0 before:h-[2px] before:-bottom-1 before:left-0 before:transition-all duration-300 ease-in-out hover:before:w-full'
                  href='#course'
                  onClick={() => setNav(false)}
                >
                  Course
                </a>
              </li>
            </ul>
          </div>
          <div className='block md:hidden cursor-pointer p-1 text-white'>
            {nav ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
                onClick={() => setNav(!nav)}
              >
                <path
                  fill-rule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
                onClick={() => setNav(!nav)}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
