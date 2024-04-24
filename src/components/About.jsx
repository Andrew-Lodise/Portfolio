import React from 'react'

const About = () => {
  return (
    <section name="about" className='bg-primary w-full min-h-screen text-secondary
    flex flex-col md:px-24 px-6 py-24 items-center'>
      <div className='max-w-[1000px]  w-full h-full'>
        <div name='header' className='flex w-full mb-4'>
          <h1 className='text-[36px] md:text-[56px] font-black'>
            About<span className='text-tertiary'>.</span>
          </h1>
          <div className=' flex-grow grid grid-cols-1 grid-rows-2 px-4'>
            <div></div>
            <div className='border-t-[1px] border-secondary opacity-40'></div>
          </div>
        </div>

        <div className='w-full min-h-[600px] grid grid-rows-2 grid-cols-1 
        lg:grid-rows-1 lg:grid-cols-2 gap-4 '>
          <div className='box-border border-2 border-white rounded-md'>
            section a
          </div>
          <div className='box-border border-2 border-white rounded-md'>
            section b
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About