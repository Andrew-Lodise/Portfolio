import React from 'react'
import { MdKeyboardArrowUp } from "react-icons/md";
import {Link} from "react-scroll"
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gray-900 
     text-gray-300'>
      <div name="backtotop" className='absolute mt-[12vh] right-[6%] hover:bg-gray-300
      hover:text-gray-900 duration-200 cursor-pointer '>
        <Link to="home" spy={true} smooth={true} duration={500}>
          <MdKeyboardArrowUp size={40}/>
        </Link>
      </div>

      <div name="form div"
      className='w-full h-full flex flex-col items-center justify-center'>
        <form action="POST" className='flex flex-col gap-y-4 text-form-input
         text-gray-300 w-[80%] md:w-[60%] lg:w-[40%]'>
          <h1 className='text-head leading-none'>
            Connect with me!
          </h1> 
          <input type="text" placeholder='Name' 
          className='bg-gray-900 border-[1px] border-gray-300 px-2 '/>
          <input type="text" placeholder='Email' 
          className=' bg-gray-900 border-[1px] border-gray-300 px-2'/>
          <textarea type="text" rows="5" placeholder='Message' 
          className='bg-gray-900 border-[1px] border-gray-300 px-2'/>
          <button className='self-start border-[1px] border-gray-300 text-button
          px-2 hover:bg-gray-300 hover:text-gray-900 duration-200 flex items-center gap-2
          group overflow-hidden'>
            <p>
              Submit
            </p>
            <IoIosMail className='text-3xl group-hover:translate-x-10 duration-200'/>
          </button> 
        </form>
      </div>
    </div>
  )
}

export default Contact