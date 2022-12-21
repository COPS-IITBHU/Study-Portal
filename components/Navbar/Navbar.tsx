import React, { useState } from 'react';
import Logo from '../../assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';


import IonIcon from '@reacticons/ionicons';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-1 md:w-auto w-full flex justify-between">
          <Image src={Logo} alt="logo" className="md:cursor-pointer h-15 w-14" />
          <div className={`text-3xl md:hidden  duration-500 ${open ? "rotate-0" : "rotate-360"}`} onClick={() => setOpen(!open)}>
            <IonIcon name={`${open ? "close" : "menu"}`}></IonIcon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[poppins]">
          <li>
            <Link href="/"  color="inherit" className="py-7  hover:text-berry active:text-berry font-medium tracking-wider px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link href="/departments" className="py-7  hover:text-berry active:text-berry px-3 font-medium tracking-wider inline-block">
              Departments
            </Link>
          </li>
          <li>
            <Link href="/about" className="py-7  hover:text-berry active:text-berry font-medium tracking-wider px-3 inline-block">
              About Us
            </Link>
          </li>
         
        </ul>
       
        <button className='md:block hidden border  hover:bg-berry hover:text-blush text-white px-6 py-2 rounded-xl'>
            Login
        </button>
      
       
        <ul
          className={`
        md:hidden items-center fixed w-full top-0 overflow-y-auto bottom-0 py-24 
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <div className='bg-berry text-center justify-between text-blush h-full'>
          <li >
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li >
            <Link href="/" className="py-7 px-3 inline-block">
              Departments
            </Link>
          </li>
          <li >
            <Link href="/" className="py-7 px-3 inline-block">
              About Us
            </Link>
          </li>
         
         
          <button className='border text-white px-6 py-2 my-7 rounded-xl'>
            Login
        </button>
         
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;