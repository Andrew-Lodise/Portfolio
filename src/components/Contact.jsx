import React from 'react'
import resume from '../assets/Andrew-Lodise-Resume.pdf'

const contact = () => {

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
    <section name="contact" className='bg-primary w-full  text-secondary
    flex flex-col md:px-24 px-6 py-24 items-center relative'>
      <div className='max-w-[1000px] w-full h-full flex flex-col items-center'>
        <div name='header' className='flex w-full mb-4 '>
          <div className=' flex-grow grid grid-cols-1 grid-rows-2 px-4'>
            <div></div>
            <div className='border-t-[1px] border-secondary opacity-40'></div>
          </div>
          <h1 className='text-[36px] md:text-[56px] font-black'>
            Contact<span className='text-tertiary'>.</span>
          </h1>
          <div className=' flex-grow grid grid-cols-1 grid-rows-2 px-4'>
            <div></div>
            <div className='border-t-[1px] border-secondary opacity-40'></div>
          </div>
        </div>

        <div className='w-full max-w-[900px] flex-grow flex flex-col items-center justify-center gap-8
         py-16 px-4'>
          <h1 className=' text-[30px] md:text-[40px] font-bold text-center'>
            Thanks for checking out my Portfolio!
          </h1>
          <p className='text-[24px] text-center'>
            Check out the links below or send me an <a href='mailto:Andrew.Lodise.Dev@gmail.com' 
            className=' text-tertiary hover:underline'>email</a>!
          </p>
          <div name="buttons" className='grid gird-cols-2 grid-rows-2 w-full p-2 gap-4 text-2xl
          font-semibold max-w-[500px]'>
            <button className='box-border border-[1px] border-secondary text-secondary text-center rounded-md
            hover:bg-secondary hover:text-primary py-4 duration-300 ease-in-out'
            onClick={openLinkedin}>
              LinkedIn
            </button>
            <button className='box-border border-[1px] border-secondary text-secondary text-center rounded-md
            hover:bg-secondary hover:text-primary py-4 duration-300 ease-in-out'
            onClick={openGithub}>
              Github
            </button>
            <button className=' col-span-2 box-border border-[1px] border-tertiary 
            text-center rounded-md bg-primary text-tertiary font-bold
            py-4 duration-300 ease-in-out hover:bg-tertiary hover:text-primary'
            onClick={openResume}>
              Resume
            </button>
          </div>
        </div>

        <footer className='absolute bottom-0 w-full max-w-[900px] flex-grow flex
        justify-center '>
          <p className='opacity-100'>&copy; 2024 Andrew Lodise. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}

export default contact