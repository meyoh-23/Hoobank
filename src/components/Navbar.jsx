import React, {useState} from 'react';

import { close, logo, menu } from '../assets';
import { navLinks } from './../constants';

function Navbar() {
  return (
    <nav className='w-full  flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="hoobank"  className='w-[124px] h-[32px]'/>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {
          navLinks.map((link) => (
            <li
            key={link.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white `}
            >
              <a href={`#${link.id}`}></a>
              { link.title}
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar;