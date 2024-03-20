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
     text-gray-300 pt-[10vh]'>
      <div className='h-full w-full flex flex-col'>
        <div name="header" className='w-full h-[10vh] flex items-center
        justify-between absolute'>
          <h1 className='text-head ml-[10vw] '>
            Contact
          </h1>

          <div name="backtotop" className='absolute right-[6%] hover:bg-gray-300
        hover:text-gray-900 duration-200 cursor-pointer '>
            <Link to="home" spy={true} smooth={true} duration={500}>
              <MdKeyboardArrowUp size={40}/>
            </Link>
          </div>
        </div>
        

        <div name="content-div" className='w-full flex flex-col items-center my-auto'>
          <h1 className='text-2xl lg:text-3xl leading-none w-[80%] md:w-[60%] lg:w-[40%]'>
            Links
          </h1>
          <ul className='flex w-[80%] md:w-[60%] lg:w-[40%] 
          text-sm items-center md:text-lg lg:text-2xl justify-between'>
            <button className='flex items-center px-2 border-[1px] border-gray-300 
            hover:text-gray-900 hover:bg-gray-300 duration-200 w-[130px] md:w-[150px]
            lg:w-[200px] justify-center'
            onClick={openLinkedin}>
              Linkedin
              <FaLinkedin className='ml-2'/>
            </button>
            <button className='flex items-center px-2 border-[1px] border-gray-300 
            hover:text-gray-900 hover:bg-gray-300 duration-200 w-[130px] md:w-[150px]
            lg:w-[200px] justify-center'
            onClick={openGithub}>
              Github
              <FaGithub className='ml-2'/>
            </button>
            <button className='flex items-center px-2 border-[1px] border-gray-300 
            hover:text-gray-900 hover:bg-gray-300 duration-200 w-[130px] md:w-[150px]
            lg:w-[200px] justify-center'
            onClick={openResume}>
              Resume
              <IoDocumentTextOutline className='ml-2'/>
            </button>
          </ul>


          <h1 className='text-2xl leading-none lg:text-3xl w-[80%] md:w-[60%] lg:w-[40%] mt-8'>
            Send me a message!
          </h1>
          <form action="https://getform.io/f/eapwdyxb" method='POST' 
          className='flex flex-col gap-y-4 text-form-input text-gray-300 
          w-[80%] md:w-[60%] lg:w-[40%] '> 
            <input type="text" placeholder='Name' name="name" 
            className='bg-gray-900 border-[1px] border-gray-300 px-2 '/>
            <input type="text" placeholder='Email' name="email" 
            className=' bg-gray-900 border-[1px] border-gray-300 px-2'/>
            <textarea type="text" rows="5" placeholder='Message' name="message" 
            className='bg-gray-900 border-[1px] border-gray-300 px-2'/>
            <button className='self-start border-[1px] border-gray-300 text-button
            px-2 hover:bg-gray-300 hover:text-gray-900 duration-200 flex items-center gap-2
            group overflow-hidden'>
              <p>
                Submit
              </p>
              <IoIosMail className='text-3xl group-hover:translate-x-10 duration-100'/>
            </button> 
          </form>
        </div>

        
      </div>
    </div>
  )
}

export default Contact