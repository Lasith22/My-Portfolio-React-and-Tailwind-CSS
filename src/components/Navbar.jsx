import React, { useState } from 'react'
import logo1 from '../assest/logo1.png';
import {FaBars, FaTimes,FaGithub,FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll';

const Navbar = () => {

const[nav,setNav] =useState(false);

const handleClick = ()=> setNav(!nav)


  return (
    <div className='fixed w-full h-[80px] justify-between flex items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
     <img src={logo1} alt=" " style={{width:'50px'}} />
        </div>

        {/* MEnu */}
        
            <ul className='hidden md:flex '>
                <li  >
                <Link     to="home"  smooth={true}   duration={500}  >
          Home
        </Link>
                </li>
                <li  >
                <Link   to="about"  smooth={true}   duration={500}  >
          About
        </Link>
                </li>
               
                <li  >
                <Link   to="skills"  smooth={true}   duration={500}  >
          Skills
        </Link>
                </li>
                <li  >
                <Link   to="work"  smooth={true}   duration={500}  >
          Work
        </Link>
                </li>
                 
                 <li  >
                 <Link   to="contact"  smooth={true}   duration={500}  >
          Contact
        </Link>
                 </li>
            </ul>
         
{/* Hnageburger */}
<div onClick={handleClick} className='md:hidden z-10'>
 {!nav ? <FaBars/> : <FaTimes/>}
</div>

{/* mobile menu */}
 <ul className={!nav ? 'hidden':  'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick}   to="home"  smooth={true}   duration={500}  >
          Home
        </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link  onClick={handleClick}  to="about"  smooth={true}   duration={500}  >
          About
        </Link>
                </li>
               
                <li className='py-6 text-4xl'>
                <Link  onClick={handleClick}  to="skills"  smooth={true}   duration={500}  >
          Skills
        </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link  onClick={handleClick}  to="work"  smooth={true}   duration={500}  >
          Work
        </Link>
                </li>
                 <li className='py-6 text-4xl'>
                 <Link onClick={handleClick}  to="contact"  smooth={true}   duration={500}  >
          Contact
        </Link>
                 </li>
</ul>

     {/* social icons   */}
<div className=' hidden lg:flex fixed flex-col  top-[35%] left-0 '>

  <ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
      <a   className='flex justify-between items-center w-full text-gray-300'
      href="https://www.linkedin.com/in/lasith-herath-b7a937209/">
        Linkedin <FaLinkedin size={30}/>
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
      <a   className='flex justify-between items-center w-full text-gray-300'
      href="  https://github.com/Lasith22">
        GitHub <FaGithub size={30}/>
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
      <a   className='flex justify-between items-center w-full text-gray-300'
      href=" lasithherath00@gmail.com">
        Email <HiOutlineMail size={30}/>
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-300'>
      <a   className='flex justify-between items-center w-full text-gray-300'
      href="https://www.linkedin.com/in/lasith-herath-b7a937209/">
        Resume <BsFillPersonLinesFill size={30}/>
      </a>
    </li>

  </ul>



</div>

    </div>
  )
}

export default Navbar