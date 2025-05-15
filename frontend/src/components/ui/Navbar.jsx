import React, { useState } from 'react';
import logo1 from '../../assets/images/logo-1.png';
import { IoPersonCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
       <a href="/home" className='p-1 cursor-pointer'> <div className="flex items-center space-x-2">
          <img src={logo1} alt="VillageVoice Logo" className="h-10 w-10 rounded-full object-cover" />
          <h1 className="text-xl font-bold">VillageVoice</h1>
        </div></a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 font-medium">
            <li className="hover:text-white cursor-pointer text-1xl font-bold hover:bg-emerald-400 rounded-lg p-2 px-3 transition"> <a href="/home"> Home</a></li>
            <li className="hover:text-white cursor-pointer text-1xl font-bold hover:bg-emerald-400 rounded-lg p-2 px-3 transition"> <a href="/about"> About US</a> </li>
            <li className="hover:text-white cursor-pointer text-1xl font-bold hover:bg-emerald-400 rounded-lg p-2 px-3 transition"> <a href="/contact"> Contact Us</a> </li>
            <li className="hover:text-white cursor-pointer text-1xl font-bold hover:bg-emerald-400 rounded-lg p-2 px-3 transition bg-red-400 text-white"> <a href="/"> Logout</a></li>
          </ul>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={handleToggle}>
            {toggle ? <IoMdClose className="text-2xl" /> : <GiHamburgerMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {toggle && (
        <div className="md:hidden bg-gray-100 absolute top-16 m-auto left-0 text-center w-full  shadow-md">
          <ul className="flex flex-col items-start px-4 py-2 space-y-2 font-medium">
            <li className="hover:text-white cursor-pointer w-full text-1xl font-bold hover:bg-emerald-400 rounded-lg p-2 px-3 transition"> <a href="/home"> Home</a></li>
            <li className="hover:text-white cursor-pointer w-full text-1xl font-bold hover:bg-emerald-400 rounded-lg p-2 px-3 transition"> <a href="/about"> About Us</a> </li>
            <li className="hover:text-white cursor-pointer w-full text-1xl font-bold hover:bg-emerald-400 rounded-lg p-2 px-3 transition"> <a href="/contact"> Contact US</a> </li>
            <li className="hover:text-white cursor-pointer w-full text-1xl font-bold hover:bg-emerald-400 rounded-lg p-2 px-3 transition  bg-red-400"> <a href="/"> Logout</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
