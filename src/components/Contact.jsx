import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 ' > 
    <form method='POST' action=" https://getform.io/f/f95f8d3c-fcde-4e95-a059-0898d7e0af8f" className='flex flex-col max-w-[600px] w-full '>
      <div className='pb-8' >
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Contact</p>
      <p className='text-gray-300 py-4'>/ Submit the form below or shoot me an emai - lasithherath00@gmail.com</p>
      </div>

      <input className='bg-[#ccd6f6] p-2'  type="text" placeholder='Name' name='name' />

      <input className='my-4 p-2 bg-[#ccd6f6]'  type="email" placeholder='Email' name='emai' />


<textarea className='bg-[#ccd6f6] p-2' name="message"    rows="10" placeholder='Message'></textarea>
    <button className='text-white border-2 hover:bg-pink-600  hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
    </form>

    </div>
  )
}

export default Contact