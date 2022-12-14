import React from 'react'
 
import w from '../projects/Me.png';
import Me3 from '../projects/Me3.png'
const Work = () => {
  return (
    <div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300 '> 

    <div className='max-w-[1000px] mx-auto p-4 flex-col  justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Work</p>
            <p className='py-6'>/ Check out my  recent work</p>
        </div>

        <div  
        // container
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>

            {/* grid items */}
            <div style={{backgroundImage: `url(${w})`}} className='shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center items-center mx-auto content-div'>
               {/* Hover Effects */}

                <div className='opacity-0 group-hover:opacity-100'>
                     <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application

                     </span>
                     <div className='pt-8  text-center'>
                        <a href="https://lasith-herath-28cc9e.netlify.app/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/Lasith22/Portfolio-Website-with-Tailwind-CSS-">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                     </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${Me3 })`}} className='shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center items-center mx-auto content-div'>
               {/* Hover Effects */}

                <div className='opacity-0 group-hover:opacity-100'>
                     <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application

                     </span>
                     <div className='pt-8  text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                     </div>
                </div>
            </div>



        </div>
    </div>


    </div>
  )
}

export default Work