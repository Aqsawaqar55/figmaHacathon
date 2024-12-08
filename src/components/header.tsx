import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { IoIosHeartEmpty } from 'react-icons/io';
import { FiShoppingCart } from 'react-icons/fi';

function Header() {
  return (
    <>
      <div className='w-full h-[100px] flex justify-between items-center '>
        {/* Logo */}
        <Image 
          src="/logo.jpg" 
          alt="Logo" 
          width={185} 
          height={41} 
        />

        {/* Navbar */}
        <nav className='hidden md:flex justify-between items-center gap-[38px] '>
          <Link href={"#!"} className='text-[16px] leading-auto'>Home</Link>
          <Link href={"#!"} className='text-[16px] leading-auto hover:text-grey-600'>Shop</Link>
          <Link href={"#!"} className='text-[16px] leading-auto hover:text-grey-600'>About</Link>
          <Link href={"#!"} className='text-[16px] leading-auto hover:text-grey-600'>Contact</Link>
        </nav>

        {/* Icons */}
        <div className='hidden md:flex justify-between items-center gap-[27px]'> 
          <Image 
            src="/icon.png" 
            alt="Icon" 
            width={28} 
            height={28} 
          />
          <FaSearch size={28} cursor="Pointer" />
          <IoIosHeartEmpty size={28} cursor="Pointer" />
          <FiShoppingCart size={28} cursor="Pointer" />
        </div>
      </div>   
    </>
  );
}

export default Header;
