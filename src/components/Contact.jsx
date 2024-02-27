import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-gray-800' >
        {/** Title container */}
        <div name='title div' className=' '>
            <h1 className='text-[60px] md:text-[80px] lg:text-[90px] font-greatVibes 
            text-blue-300  text-center border-t-4 border-gray-900'>
            Contact
            </h1>
        </div>

        <div name="content container" className='flex flex-col w-auto items-center align-middle 
        bg-gray-800' >
            {/** centered content */}
            <div name='content div' className='bg-gray-900 px-10 rounded-lg mb-10 shadow-lg shadow-black'>
                {/** form heading */}
                <div className=' text-white text-3xl md:text-4xl lg:text-5xl pb-4 text-center mt-12'>
                    Connect with me! 
                </div>
                {/** form content */}
                <form action="POST" className='flex flex-col gap-y-4 text-md md:text-lg 
                lg:text-xl items-center  p-2 rounded-md'>
                    <input type="text" placeholder='Name' className='p-2 w-[75%] rounded-md'/>
                    <input type="text" placeholder='Email' className='p-2 w-[75%] rounded-md'/>
                    <textarea type="text" rows="10" placeholder='Message' className='p-2 w-[100%]
                    rounded-md md:text-md'/>
                    <button className='text-white text-2xl md:text-3xl lg:text-4xl rounded-md hover:border-blue-300 
                    hover:text-blue-300 duration-200 underline-offset-1 underline 
                    hover:underline-offset-8 mb-2'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact