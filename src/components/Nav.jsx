import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

const Navbar = () => {
    const [extendNavbar,setExtendNavbar]=useState(false)
    console.log(extendNavbar);
  return (
    <div className='bg-blue-400 text-black h-20 px-6 '>
        <div className='max-w-7xl mx-auto flex justify-between'>
            <div className='flex items-center h-20'>
                <h1 className='text-4xl font-bold font-roboto '>Logo</h1>
            </div>
            <div className='flex gap-6 items-center '>
                <ul className={`flex flex-col lg:flex-row gap-6 text-xl font-ubuntu absolute lg:static duration-500 ${extendNavbar? "left-5 top-24" : "left-[-100px] top-24"}`}>
                    <li className='hover:text-red-900'>Home</li>
                    <li className="hover:text-red-900">About</li>
                    <li className="hover:text-red-900">Contact</li>
                    <li className="hover:text-red-900">Sign in</li>
                    <li  className="hover:text-red-900">Sign up</li>
                </ul>
                <div className='flex lg:hidden' onClick={()=> {setExtendNavbar(open => !open)}}>
                {
                    extendNavbar ? <ClearIcon/> : <MenuIcon/>
                }
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar