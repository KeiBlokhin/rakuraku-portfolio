import React from 'react'
import mat from '../../assets/img/takahashi.jpg'
import rhiannon from '../../assets/img/allah.jpg'
import chris from '../../assets/img/matt.jpg'

export default function AboutUs() {
  return (
    <section className=' py-28' id='about'>
      <div className='container mx-auto px-4 md:px-0'>
        <h2 className='text-center text-3xl text-white font-bold mb-5'>
          What students say about us?
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
          <div className='bg-[#29313d] shadow-sm p-7 rounded-md'>
            <div className='flex items-center mb-7'>
              <img className=' h-14 w-14 rounded-full mr-4' src={mat} alt='' />

              <div>
                <h2 className='text-white text-xl font-bold'>
                  Yoshihiro Takahashi
                </h2>
                <p className=' text-clrSmall'>Web designer</p>
              </div>
            </div>
            <p className='text-gray-300 leading-10'>
              Just finished Material-Ui 5 course. Learned a ton about
              breakpoints, theming, good folder structure e.t.c.
              <span className='bg-clrBtn text-black font-bold py-2'>
                <br />
                Highly recommend if you are currently learning Material-UI!
              </span>
            </p>
          </div>
          <div className='bg-[#29313d] shadow-sm p-7 rounded-md'>
            <div className='flex items-center mb-7'>
              <img
                className=' h-14 w-14 rounded-full mr-4'
                src={rhiannon}
                alt=''
              />

              <div>
                <h2 className='text-white text-xl font-bold'>Alla Sheffer</h2>
                <p className=' text-clrSmall'>Fontend developer</p>
              </div>
            </div>
            <p className='text-gray-300 leading-10'>
              For any developers out there wanting to learn more about
              <span className='bg-[#e89736] text-black font-bold py-2'>
                {' '}
                React, Material-UI 5, HTML, CSS,
              </span>
              , I recommend checking out KEI BLOKHIN tutorial. I finished the
              whole two projects 2 days just for fun, and built two responsive
              frontends also used Figma for the first time.
            </p>
          </div>
          <div className='bg-[#29313d] shadow-sm p-7 rounded-md'>
            <div className='flex items-center mb-7'>
              <img
                className=' h-14 w-14 rounded-full mr-4'
                src={chris}
                alt=''
              />

              <div>
                <h2 className='text-white text-xl font-bold'> Denis Contiev</h2>
                <p className=' text-clrSmall'>Student</p>
              </div>
            </div>
            <p className='text-gray-300 leading-10'>
              Never knew it could be that
              <span className='bg-[#4a8f52] text-black font-bold py-2'>
                {' '}
                simple and fast
              </span>
              . Making flawless React Material-UI apps frontedn in few hours (in
              a single stretch). I hate reading documentation, so this vide
              course is best choice. After watching this course, I just jumped
              right in and started building my own project that I wanted to do
              for a long time. Thanks Kei!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
