import React, { useState } from 'react';
import Logo from '../../assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './NavLinks';
import Login from './Login';
import IonIcon from '@reacticons/ionicons';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Image src={Logo} alt="logo" className="md:cursor-pointer h-15 w-14" />
          <div className={`text-3xl md:hidden  duration-500 ${open ? "rotate-0" : "rotate-360"}`} onClick={() => setOpen(!open)}>
            <IonIcon name={`${open ? "close" : "menu"}`}></IonIcon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Login />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden  fixed w-full top-0 overflow-y-auto bottom-0 py-24 
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <div className='bg-berry h-full'>
          <li >
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5 pl-4">
            <Login />
          </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;