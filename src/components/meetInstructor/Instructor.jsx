import React from 'react'
import me from '../../assets/img/coding.jpg'
import aws1 from '../../assets/img/aws-certified-developer-associate.webp'
import aws2 from '../../assets/img/aws-certified-solutions-architect-associate.webp'
import aws3 from '../../assets/img/aws-certified-sysops-administrator-associate.webp'

export default function Instructor() {
  return (
    <section className='py-28' id='instructor'>
      <div className='container mx-auto px-4 md:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='p-5'>
            <img src={me} alt='' />
          </div>
          <div>
            <h4 className=' text-xl text-clrSmall font-semibold mb-5'>
              Meet your instructor
            </h4>
            <h2 className=' text-2xl text-white font-bold mb-5'>Kei Blokhin</h2>
            <p className='text-white mb-5'>Hi 👋 Let me introduce myself</p>
            <p className='text-white mb-5'>
              Through years of hard work and commitment to creating
              breath-taking projects I would like to share my knowledge with
              you.
            </p>
            <p className='text-white mb-5'>
              I’m passionate about full-stack development and I’ll be right here
              with you every step of the way. I use React, Nextjs, Typescript,
              Graphql, AWS , Express in my projects. My passion means I don’t
              believe in just giving you boring descriptive texts that you’ll
              have to force your way through and instead I want to encourage
              learning by guiding you as you build your own projects in real
              time, giving you a sense of accomplishment and showing your
              progression as you move through this course. 🔥
            </p>
            <p className='text-white mb-5'>
              I also speak 4 languages Chinese, English, Russian and Japanese.
              So if you wanna chat semd me an email.
            </p>
            <p className='text-white mb-5'>
              I believe that programming can be learned by anyone in an easy and
              practical way.
            </p>
            {/* <div className='grid grid-cols-3'>
              <div>
                <img src={aws1} alt='' />
              </div>
              <div>
                <img src={aws2} alt='' />
              </div>
              <div>
                <img src={aws3} alt='' />
              </div>
            </div> */}

            <div className=' mt-12'>
              <a
                href='mailto:keiblokhin@gmail.com'
                className='bg-clrBtn py-3 px-7 rounded-md inline-block'
              >
                Let's talk
              </a>
              {/* <a
                href='3333'
                className='ml-5 py-3 px-5 rounded-md inline-block text-[#e89736] font-semibold'
              >
                My story
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
