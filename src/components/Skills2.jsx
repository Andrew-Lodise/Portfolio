import React, {useState} from 'react'

const Skills2 = () => {
  const [pageIndex, setPageIndex] = useState(0);
  return (
    <section name='skills' className='w-full h-screen bg-primary text-secondary 
    border-y-2 border-tertiary flex flex-col items-center'>
      {/** navigation */}
      <ul name='nav' className='w-full h-[10vh] grid grid-rows-1 grid-cols-3 gap-2 text-2xl p-2
      max-w-[1000px] mt-2 font-medium'>
        <li onClick={() => setPageIndex(0)}
        className={`flex items-center justify-center border-[1px] border-secondary rounded-md
        cursor-pointer shadow-basedSmall duration-300 ease-in-out
        hover:text-tertiary hover:border-tertiary hover:shadow-basedHover
        ${pageIndex === 0 ? `text-tertiary border-tertiary shadow-basedHover 
        duration-300 ease-in-out`: ''}`}>
          General
        </li>
        <li onClick={() => setPageIndex(1)}
        className={`flex items-center justify-center border-[1px] border-secondary rounded-md
        cursor-pointer shadow-basedSmall duration-300 ease-in-out
        hover:text-tertiary hover:border-tertiary hover:shadow-basedHover
        ${pageIndex === 1 ? `text-tertiary border-tertiary shadow-basedHover 
        duration-300 ease-in-out`: ''}`}>
          Web
        </li>
        <li onClick={() => setPageIndex(2)}
        className={`flex items-center justify-center border-[1px] border-secondary rounded-md
        cursor-pointer shadow-basedSmall duration-300 ease-in-out
        hover:text-tertiary hover:border-tertiary hover:shadow-basedHover
        ${pageIndex === 2 ? `text-tertiary border-tertiary shadow-basedHover 
        duration-300 ease-in-out`: ''}`}>
          Devops
        </li>
      </ul>

      <div className='w-full max-w-[1200px] h-[90vh] relative transition-opacity'>
        {/** general */}
        <div className={`w-full h-full bg-green-900 absolute duration-500 ease-in-out
        grid grid-cols-1 grid-rows-3 p-2 gap-2 
        ${pageIndex === 0 ? `opacity-100`: `opacity-0`}`}>
          <div className='bg-black rounded-md border-secondary border-[1px]'>

          </div>
          <div className='bg-black rounded-md border-secondary border-[1px]'>

          </div>
          <div className='bg-black rounded-md border-secondary border-[1px]'>

          </div>
        </div>

        {/** web */}
        <div className={`w-full h-full bg-blue-900 absolute duration-500 ease-in-out 
        ${pageIndex === 1 ? `opacity-100`: `opacity-0`}`}>
          Web stuff
        </div>

        {/** devops */}
        <div className={`w-full h-full bg-purple-900 absolute duration-500 ease-in-out 
        ${pageIndex === 2 ? `opacity-100`: `opacity-0`}`}>
          Devops stuff
        </div>
      </div>


    </section>
  )
}

export default Skills2