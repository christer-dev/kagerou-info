import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import kagerou from '../kagerou.png';

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <img src={kagerou} className='w-[60px] pr-4' alt='logo' />
      <h4 className='w-full text-3xl font-bold text-[#f2f0d8] font-genshin'>Kagerou.info</h4>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Nations</li>
        <li className='p-4'>Weapons</li>
        <li className='p-4'>Characters</li>
        <li className='p-4'>Artifacts</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#f2f0d8] m-4'>Kagerou.Info</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Nation</li>
          <li className='p-4 border-b border-gray-600'>Weapons</li>
          <li className='p-4 border-b border-gray-600'>Characters</li>
          <li className='p-4 border-b border-gray-600'>Artifacts</li>
      </ul>
    </div>
  );
};

export default Navbar;