import React from 'react'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gray-800'>
      {/** container */}
      <div className='mx-auto px-8 flex flex-col justify-center h-full pt-[100px]'>
        <div className='flex flex-col items-center h-full'>
          { /* Andrew Lodise */}
          <div className=' flex felx-col w-screen items-left'>
            <h1 className='text-[90px] ml-[20%] mb-[-40px] font-greatVibes text-blue-300 min-w-[500px]'>
              Andrew Lodise
            </h1>
          </div>
          
          { /* about me section */}
          <div className='flex flex-col top-[200px] items-left ml-[20%] mr-[15%] lg:py-4'>
            <p className='text-2xl md:text-4xl text-white font-bold p-1'>
              Software Developer
            </p>
            <p className='text-xl text-white'>
              Fill in later ... I am a dedicated and driven computer science student with experience
              in developing and implementing successful projects. My education includes a Bachelor of 
              Science in Computer Science from West Chester University, where I gained expertise in Java, 
              cloud computing, user interfaces and more.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  )
}


export default Home