import React from 'react'

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-gray-800'>
      {/** container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pt-[100px]'>
        <div className='flex flex-col items-center h-full'>
          { /* Andrew Lodise */}
          <h1 className='top-[110px] text-[80px] font-greatVibes text-blue-300'>Andrew Lodise</h1>
          { /* about me section */}
          <div className='flex flex-col top-[200px] items-left mx-[80px]'>
            <p className='text-2xl text-white font-bold'> Software Developer</p>
            <p className='text-xl text-white'>Fill in later ... I am a dedicated and driven computer science student with experience
            in developing and implementing successful projects. My education includes a Bachelor of 
            Science in Computer Science from West Chester University, where I gained expertise in Java, 
            cloud computing, user interfaces and more.</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}


export default Home