import React from 'react'

const Home = () => {
  return (
    <div name='home' className='w-full h-auto bg-gray-800'>
      {/** container */}
      <div className='flex flex-col items-center pt-[200px] pb-[100px] '>
        <div className='flex flex-col p-4 border-2 border-white rounded-lg w-[80%]
         h-full bg-gray-900 shadow-lg shadow-gray-950'>
          { /* Andrew Lodise */}
          <div className=' flex flex-col items-left mb-[-30px]'>
            <h1 className='text-[60px] md:text-[90px] lg:text-[100px]
            font-greatVibes text-blue-300 min-w-[500px]'>
              Andrew Lodise
            </h1>
          </div>
          
          { /* about me section */}
          <div className='flex flex-col top-[200px] items-left'>
            <p className='text-2xl md:text-4xl text-white font-bold'>
              Software Developer
            </p>
            <p className='text-md md:text-lg lg:text-2xl text-white '>
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