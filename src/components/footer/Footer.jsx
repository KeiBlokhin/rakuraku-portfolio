import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'

export default function Footer() {
  return (
    <footer className=' pt-20 bg-[#29313d]'>
      <div className='container mx-auto px-4 md:px-0'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div>
            <Link to='/'>
              <h1 className='text-amber-300 text-3xl font-bold'>#rakuRaku</h1>
            </Link>
            <p className='text-gray-300 mt-5'>
              Your journey to becoming a full-stack technical lead starts today.
              Learn faster by building real projects.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-2xl text-white mb-5'>Company</h4>
            <ul>
              <li>
                <Link to='/' className='text-gray-300 mb-5 inline-block'>
                  Home
                </Link>
              </li>
              <li>
                <a
                  href='https://www.udemy.com/course/material-ui-and-react-learn-by-building-projects/?couponCode=EE82FF69B3D6332F02D0'
                  target='_blank'
                  rel='noreferrer'
                  className='text-gray-300 inline-block'
                >
                  Project Tutorials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-2xl text-white mb-5'>
              Project Tutorials
            </h4>
            <ul>
              <li>
                <a
                  href='https://www.udemy.com/course/material-ui-and-react-learn-by-building-projects/?couponCode=EE82FF69B3D6332F02D0'
                  className='text-gray-300 mb-5 inline-block'
                >
                  Material-UI 5
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-2xl text-white mb-5'>On Social</h4>
            <ul>
              <li>
                <a
                  href='https://twitter.com/KeiBlokhin'
                  target='_blank'
                  rel='noreferrer'
                  className='text-clrSmall inline-block mb-5'
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/keiblokhin/'
                  target='_blank'
                  rel='noreferrer'
                  className='text-clrSmall inline-block'
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='bg-[#1f2632] text-center text-gray-400 py-5 mt-8'>
        <p>Copyright © 2022 #rakuRaku All rights reserved.</p>
      </div>
    </footer>
  )
}
