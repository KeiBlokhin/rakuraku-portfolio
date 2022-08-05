import React, { useState } from 'react'

export default function NewsLetter() {
  const [value1, setvalue1] = useState('')
  const [value2, setvalue2] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank You!')
  }

  return (
    <section className='py-12' id='subscribe'>
      <div className='container mx-auto px-4 md:px-0'>
        <div className='bg-[#111827] shadow-lg rounded-md p-9 w-[95%] md:w-[90%] mx-auto'>
          <h2 className='text-white font-bold text-2xl mb-5'>
            #rakuRaku Development Newsletter
          </h2>
          <p className='text-white mb-5'>
            Join over <span className='text-clrBtn font-bold'>25015</span> other
            #rakuRaku Developers on the road to success. No spam, unsubscribe at
            any time.
          </p>

          <form>
            <input
              className='outline-none h-12 md:w-1/3 w-full mb-5 md:mb-0 px-5 rounded-md mr-4 md:inline-block block'
              type='text'
              name='name'
              placeholder='Frist Name'
              required
              value={value1}
              onChange={(e) => setvalue1(e.target.value)}
            />
            <input
              className='outline-none h-12 md:w-1/3 w-full mb-5 md:mb-0 px-5 rounded-md mr-4 md:inline-block block'
              type='email'
              name='email'
              placeholder='Email Address'
              required
              value={value2}
              onChange={(e) => setvalue2(e.target.value)}
            />
            <button
              type='submit'
              className='outline-none px-7 py-3 rounded-md mr-4 bg-clrBtn font-bold'
              onClick={handleSubmit}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
