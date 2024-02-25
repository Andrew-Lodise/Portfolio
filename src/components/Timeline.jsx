import React from 'react'

const Timeline = () => {
  return (
    <div name='timeline' className='h-screen w-full'>
      {/** Title container */}
      <div name='title div' className=' bg-gray-800'>
        <h1 className='text-[60px] md:text-[80px] lg:text-[90px] font-greatVibes 
        text-blue-300 text-center border-t-4 border-gray-900'>
          Timeline
        </h1>
      </div>

      <div name="content div" className=' h-svh flex flex-col items-center justify-center align-middle bg-gray-800' >
        {/** centered content */}
            <ul className='text-white text-xl '>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
            </ul>
        </div>
    </div>
  )
}

export default Timeline