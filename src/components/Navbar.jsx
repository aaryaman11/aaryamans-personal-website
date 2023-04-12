import React, {useState} from 'react';
import  AS from '../assets/as.png';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonFill} from 'react-icons/bs';


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav);
  }
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
         <div>
            <img src={AS} alt='logo image' style={{width: '80px'}}/>
         </div>
        {/* Menu*/}
         <div>
             <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
             </ul>
         </div>

        {/* hamburger menu */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav? <FaBars />: <FaTimes />}
          
        
        </div>
        {/* mobile Icons */}
         <div>
             <ul className={!nav? "hidden": "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Work</li>
                <li className="py-6 text-4xl">Contact</li>
             </ul>
         </div>
        {/*social Icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
              <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/aaryamansharma/" target="_blank">
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/aaryaman11" target="_blank">
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F4B400]">
              <a className="flex justify-between items-center w-full text-gray-300" href="/" target="_blank">
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
              <a className="flex justify-between items-center w-full text-gray-300" href="/">
                Resume <BsFillPersonFill size={30} />
              </a>
            </li>
          </ul>
        </div>

      
    </div>
  );
}

export default Navbar;
