import React from 'react'
import { Link } from 'react-router-dom'
import tesla from '../../assets/img/material-ui.jpeg'

export default function Cours() {
  return (
    <section className='py-24' id='course'>
      <div className='container mx-auto px-4 md:px-0'>
        <div className='text-center'>
          <h2 className='font-bold text-2xl text-white mb-5'>Our Courses</h2>
          <p className='text-gray-400'>
            "You don't learn to walk by following rules. You learn by doing, and
            by falling over." ― Richard Branson
          </p>
        </div>

        <Link to='/courses'>
          <div className='bg-[#29313d] shadow-md w-full md:w-[80%] mx-auto mt-11 flex items-center flex-col md:flex-row  py-7 px-5 '>
            <img className='md:w-1/2 w-[100%]' src={tesla} alt='' />

            <div className='pl-7 mt-7 md:mt-0'>
              <h2 className='text-2xl font-bold mb-5 text-white'>
                Material-UI 5 and React | Learn by building projects
              </h2>
              <p className='text-gray-200 mb-5'>
                Want to advance your skills as a frontend developer and improve
                your knowledge of Material UI-Frontend Library? Need to know how
                to build breath-taking websites without the complicated coding?
                Designed for those who learn by doing, this course is geared
                towards building on your basic skills and taking them to the
                next level.
              </p>
              <Link
                to='/courses'
                className='bg-clrBtn py-2 px-6 inline-block rounded-md shadow-md'
              >
                Read More
              </Link>
            </div>
          </div>
        </Link>

        <div className='text-center mt-10'>
          <a
            href='https://www.udemy.com/course/material-ui-and-react-learn-by-building-projects/?couponCode=EE82FF69B3D6332F02D0'
            target='_blanck'
            className='bg-clrSmall py-2 px-6 inline-block rounded-md shadow-md '
          >
            Check out course
          </a>
        </div>
      </div>
    </section>
  )
}
