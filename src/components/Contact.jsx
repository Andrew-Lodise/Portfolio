import React from 'react'
import resume from '../assets/Resume_v2.pdf'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';

const Contact = () => {

  const openResume = () => {
    window.open(resume,'_blank');
  };
  const openGithub = () => {
    window.open('https://github.com/Andrew-Lodise','_blank');
  };
  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/andrew-lodise','_blank');
  };


  return (
    <section name='contact' className='w-full h-screen bg-primary text-secondary flex justify-center 
     py-4'>
      <div name='content' className='w-full h-full  max-w-[1000px] grid
      grid-rows-2 grid-cols-1 p-4 gap-6 text-3xl'>
        {/** upper section */}
        <div className='flex flex-col items-center'>
          <h3 className='w-full max-w-[600px] font-medium mb-1'>
            Connect through socials
          </h3>
          <ul className=' grid grid-rows-3 grid-cols-1 gap-4 flex-grow
          w-full max-w-[600px] '>
            <li className=''>
            <button className='flex items-center border-[1px] border-secondary 
              w-full h-full hover:border-tertiary shadow-basedSmall hover:shadow-basedHover 
              duration-300 ease-in-out justify-center rounded-md hover:text-tertiary'
              onClick={openLinkedin}>
                Linkedin
              <FaLinkedin className='ml-2'/>
              </button>
            </li>
            <li className=''>
              <button className='flex items-center border-[1px] border-secondary 
              w-full h-full hover:border-tertiary shadow-basedSmall hover:shadow-basedHover 
              duration-300 ease-in-out justify-center rounded-md hover:text-tertiary'
                onClick={openGithub}>
                  Github
                <FaGithub className='ml-2'/>
                </button>
            </li>
            <li className=''>
              <button className='flex items-center border-[1px] border-secondary 
              w-full h-full hover:border-tertiary shadow-basedSmall hover:shadow-basedHover 
              duration-300 ease-in-out justify-center rounded-md hover:text-tertiary'
                onClick={openResume}>
                  Resume
                  <IoDocumentTextOutline className='ml-2'/>
                </button>
            </li>
          </ul>
        </div>
   
        <div className='flex flex-col'>
          <h3 className='mb-2 font-medium'>
            Send me a message!
          </h3>

          <form action="https://getform.io/f/eapwdyxb" method='POST' 
          className='size-full grid grid-rows-6 grid-cols-1  gap-2 text-2xl'>
            <input type="text" placeholder='Name' name="name" 
            className='bg-primary border-[1px] border-secondary px-2 rounded-md
             shadow-basedSmall'/>

            <input type="text" placeholder='Email' name="email" 
            className='bg-primary border-[1px] border-secondary px-2 rounded-md
            shadow-basedSmall'/>

            <textarea type="text" placeholder='Message' name="message" 
            className='bg-primary border-[1px] border-secondary px-2 rounded-md
            shadow-basedSmall row-span-3'/>

            <button className='border-[1px]  px-2 bg-tertiary shadow-basedSmallt
            text-black border-tertiary flex items-center gap-2 group overflow-hidden rounded-md
            duration-300 ease-in-out w-fit hover:shadow-basedHover'>
              <p> Submit </p>
              <IoIosMail className='text-3xl group-hover:text-gray-900 group-hover:translate-x-10 
              duration-1000 ease-in-out'/>
            </button> 
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact