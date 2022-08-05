import React from 'react'
import imgs from '../../assets/img/kai-pic.png'
import imgs2 from '../../assets/img/dots.svg'
import GroupBanner from '../banner/GroupBanner'

export default function HeroSection() {
  return (
    <>
      <main className=' py-20' id='home'>
        <div className='container mx-auto px-4 md:px-0'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='md:w-1/2 w-full mb-8 md:mb-0'>
              <span className='text-xs text-clrSmall mb-5'>
                Entrepreneurship| Code | Development
              </span>
              <h2 className=' text-3xl text-white font-bold mb-5'>
                Learn programming and web development the easy way! 🚀
              </h2>
              <p className=' text-xl text-gray-400 mb-7'>
                Your journey to becoming successful developer starts today.
                Learn faster by building the apps you ❤️
              </p>
              <a
                href='https://www.udemy.com/course/material-ui-and-react-learn-by-building-projects/?couponCode=EE82FF69B3D6332F02D0#instructor-1'
                target='_blanck'
                className='inline-block bg-clrBtn py-2 px-7 rounded-md mt-5'
              >
                Get started
              </a>
            </div>
            <div className='md:w-1/2 w-full mt-10 md:mt-0'>
              <div className='relative'>
                <img className='md:w-[74%] w-full mx-auto' src={imgs} alt='' />

                <div className='absolute right-10 -bottom-20 -z-10'>
                  <img className='w-32' src={imgs2} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <GroupBanner />
    </>
  )
}
