import React from 'react'
import Reactimg from '../assest/react.png'
 import CSS from '../assest/css.png';
  import JavaScript from '../assest/javascript.png'
import HTML from '../assest/html.png'
 
   import Node from '../assest/node.png'
   import FireBase from '../assest/firebase.png'
   import GitHub from   '../assest/github.png'
     import Tailwind from '../assest/tailwind.png'
 


const Skills = () => {
  return (
    <div name='skills' className=' w-full  h-screen  bg-[#0a192f] text-gray-300 '>
        {/* container */}
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div >
                <p className='text-4xl font-bold inline border-b-4  border-pink-600   '>Skills</p>
                <p className='py-4'>/ These are the technologeis I've work with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Reactimg} alt="" />
                    <p className='my-4' >React JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="" />
                    <p className='my-4' >JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="" />
                    <p className='my-4' >HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="" />
                    <p className='my-4' >CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="" />
                    <p className='my-4' >TailwindCSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={FireBase} alt="" />
                    <p className='my-4' >Firebase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="" />
                    <p className='my-4' >GitHUb</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="" />
                    <p className='my-4' >NodeJS</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills