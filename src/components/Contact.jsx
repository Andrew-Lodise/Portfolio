import React from 'react'


const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gray-900 flex flex-col items-center
     text-gray-300' >
      <div className='mt-[200px] flex flex-col md:flex-row justify-between font-roboto 
      w-[90%] md:w-[60%] lg:w-[50%] max-w-[800px]'>
        <h1 className='text-6xl mb-[6px]'>
          Connect
        </h1>
      </div>
      
      <form action="POST" className='flex flex-col gap-y-4 text-md md:text-lg 
      lg:text-xl text-gray-300 w-[90%] md:w-[60%] lg:w-[50%] max-w-[800px]'>
        <input type="text" placeholder='Name' className='text-2xl bg-gray-900 
        border-[1px] border-gray-300 px-2 '/>
        <input type="text" placeholder='Email' className='text-2xl bg-gray-900 
        border-[1px] border-gray-300 px-2'/>
        <textarea type="text" rows="10" placeholder='Message' className='text-lg 
        bg-gray-900 border-[1px] border-gray-300 px-2 focus:rounded-none'/>
        <button className='self-start border-2 border-gray-300 text-2xl
        px-2 hover:bg-gray-300 hover:text-gray-900'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact