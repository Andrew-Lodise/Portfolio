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
    <div name='contact' className='w-full h-screen bg-primary 
     text-secondary pt-[1vh] flex-col'>
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
              <h3 className='hidden md:block'>Back to home</h3>
              <MdKeyboardArrowUp size={40}/>
            </Link>
          </div>
        </div>
        
        {/** links and form (rest of content) */}
        <div name="content-div" className='w-full flex flex-col items-center  flex-grow justify-evenly'>
          <ul className='text-2xl grid grid-cols-1 grid-rows-3 w-full max-w-[400px] gap-2 p-4 h-[30vh]'>
            <li className='group'>
              <button className='flex items-center md:px-2 border-[1px] border-secondary 
              w-full h-full hover:border-tertiary shadow-basedSmall hover:shadow-basedHover 
              duration-200 justify-center rounded-md hover:text-tertiary px-1'
              onClick={openLinkedin}>
                Linkedin
              <FaLinkedin className='ml-2'/>
              </button>
            </li>

            <li>
              <button className='flex items-center md:px-2 border-[1px] border-secondary 
              w-full h-full hover:border-tertiary shadow-basedSmall hover:shadow-basedHover 
              duration-200 justify-center rounded-md hover:text-tertiary px-1'
              onClick={openGithub}>
                Github
              <FaGithub className='ml-2'/>
              </button>
            </li>

            <li>
              <button className='flex items-center md:px-2 border-[1px] border-secondary 
              w-full h-full hover:border-tertiary shadow-basedSmall hover:shadow-basedHover 
              duration-200 justify-center rounded-md hover:text-tertiary px-1'
              onClick={openResume}>
                Resume
                <IoDocumentTextOutline className='ml-2'/>
              </button>
            </li>
            
          </ul>


          <div className='w-full h-[20px] my-4 border-b-[4px] border-tertiary '>

          </div>

          
          <form action="https://getform.io/f/eapwdyxb" method='POST' 
          className='flex flex-col gap-y-2 text-form-input text-secondary
          w-[80%] md:w-[60%] lg:w-[40%] '> 
            <h1 className='text-2xl'>
              Send a message!
            </h1>
            <input type="text" placeholder='Name' name="name" 
            className='bg-primary border-[1px] border-secondary px-2 rounded-md shadow-basedSmall
             focus-within:shadow-basedHover focus-within:border-tertiary'/>
            <input type="text" placeholder='Email' name="email" 
            className=' bg-primary border-[1px] border-secondary px-2 rounded-md'/>
            <textarea type="text" rows="5" placeholder='Message' name="message" 
            className='bg-primary border-[1px] border-secondary px-2 rounded-md'/>
            <button className='self-start border-[1px] border-secondary text-button
            px-2 hover:bg-tertiary hover:text-gray-900 flex items-center gap-2
            group overflow-hidden rounded-sm'>
              <p>
                Submit
              </p>
              <IoIosMail className='text-3xl group-hover:text-gray-900 group-hover:translate-x-10 duration-1000 ease-in-out'/>
            </button> 
          </form>
        </div>

        
      </div>
    </div>
  )
}

export default Contact