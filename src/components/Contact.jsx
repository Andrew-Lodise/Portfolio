import React from 'react'
import { MdKeyboardArrowUp } from "react-icons/md";
import {Link} from "react-scroll"
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

const Contact = () => {

  const openResume = () => {
    window.open('https://drive.google.com/file/d/17L4yR1k02iBPW0PKED1RNpNsrXsssUSL/view?usp=sharing','_blank');
  };
  const openGithub = () => {
    window.open('https://github.com/Andrew-Lodise','_blank');
  };
  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/andrew-lodise','_blank');
  };

  return (
    <div name='contact' className='w-full h-screen bg-gray-900 
     text-gray-300 pt-[1vh] flex-col'>
      <div className='h-full w-full flex flex-col'>
        {/** title and up arrow */}
        <div name="header" className='w-full h-[10vh] flex items-center
        justify-between'>
          <h1 className='text-head ml-[10vw] '>
            Contact
          </h1>
          <div name="backtotop" className='absolute right-[6%] hover:bg-gray-300
        hover:text-gray-900 duration-200 cursor-pointer rounded-sm'>
            <Link to="home" spy={true} smooth={true} duration={500}
            className='flex items-center pl-1'>
              <h3>Back to home</h3>
              <MdKeyboardArrowUp size={40}/>
            </Link>
          </div>
        </div>
        
        {/** links and form (rest of content) */}
        <div name="content-div" className='w-full flex flex-col items-center  flex-grow justify-evenly'>
          <ul className='flex flex-col md:flex-row text-2xl items-center justify-between gap-x-8 gap-y-4'>
            <li>
              <button className='flex items-center md:px-2 border-[1px] border-gray-300 
             hover:text-gray-900 hover:bg-gray-300 duration-200 justify-center rounded-sm px-1'
              onClick={openLinkedin}>
                Linkedin
              <FaLinkedin className='ml-2'/>
              </button>
            </li>

            <li>
              <button className='flex items-center md:px-2 border-[1px] border-gray-300 
             hover:text-gray-900 hover:bg-gray-300 duration-200 justify-center rounded-sm px-1'
              onClick={openGithub}>
                Github
              <FaGithub className='ml-2'/>
              </button>
            </li>

            <li>
              <button className='flex items-center md:px-2 border-[1px] border-gray-300 
             hover:text-gray-900 hover:bg-gray-300 duration-200 justify-center rounded-sm px-1'
              onClick={openResume}>
                Resume
                <IoDocumentTextOutline className='ml-2'/>
              </button>
            </li>
            
          </ul>


          
          <form action="https://getform.io/f/eapwdyxb" method='POST' 
          className='flex flex-col gap-y-4 text-form-input text-gray-300 
          w-[80%] md:w-[60%] lg:w-[40%] '> 
            <h1 className='text-2xl'>
              Send a message!
            </h1>
            <input type="text" placeholder='Name' name="name" 
            className='bg-gray-900 border-[1px] border-gray-300 px-2 rounded-sm'/>
            <input type="text" placeholder='Email' name="email" 
            className=' bg-gray-900 border-[1px] border-gray-300 px-2 rounded-sm'/>
            <textarea type="text" rows="5" placeholder='Message' name="message" 
            className='bg-gray-900 border-[1px] border-gray-300 px-2 rounded-sm'/>
            <button className='self-start border-[1px] border-gray-300 text-button
            px-2 hover:bg-gray-300 hover:text-gray-900 flex items-center gap-2
            group overflow-hidden rounded-sm'>
              <p>
                Submit
              </p>
              <IoIosMail className='text-3xl group-hover:text-gray-900 group-hover:translate-x-10 duration-500'/>
            </button> 
          </form>
        </div>

        
      </div>
    </div>
  )
}

export default Contact