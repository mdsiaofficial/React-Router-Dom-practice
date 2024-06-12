import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className='bg-slate-700 m-5 rounded-lg text-xl  h-[50px] sticky' >
    <ul className='flex gap-5 p-[10px] justify-center items-center'>
      <li className='text-white hover:text-orange-500'><Link to="/">Home</Link></li>
      <li className='text-white hover:text-orange-500'><Link to="/about">About</Link></li>
      <li className='text-white hover:text-orange-500'><Link to="/history">History</Link></li>
      <li className='text-white hover:text-orange-500'><Link to="/committee">Committee</Link></li>
      <li className='text-white hover:text-orange-500'><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
