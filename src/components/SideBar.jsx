import React from 'react'
import { SiYoutubeshorts } from "react-icons/si";
import { FiHome } from 'react-icons/fi'
import { MdSubscriptions } from "react-icons/md";
import { BiLogOut, BiSolidPlaylist } from "react-icons/bi";
import { Link } from 'react-router-dom';
export const Sidebar = () => {
  const path=window.location.pathname;
    return (
    <>
<aside 
    className="fixed inset-y-0 z-10 flex flex-shrink-0 h-[100%]     bg-darker focus:outline-none"
> 
    <nav className={`hidden md:flex flex-col ${path==="/" && " md:w-24 "} w-16  flex-shrink-0 h-full px-2 py-4`}> 
    
    <div className="flex flex-col items-center justify-center flex-1 space-y-4"> 
        <Link to="/"
        className="p-2 text-white transition-colors relative  group duration-200 bg-red-500 rounded-full hover:text-light hover:bg-red-700 bg-dark focus:outline-none   focus:bg-red-700 focus:ring-red-700"
        >
        <span className="sr top-0 left-10 text-[12px] font-medium group-hover:block hidden ">Home</span>
       <FiHome className='h-5 w-5' strokeWidth={"1.5"} />
        </Link> 
        <Link
        to="/Shorts"
        className="p-2 text-white transition-colors relative  group duration-200 bg-red-500 rounded-full hover:text-light hover:bg-red-700 bg-dark focus:outline-none   focus:bg-red-700 focus:ring-red-700"    >
        <span className="sr top-0 left-10 text-[12px] font-medium  group-hover:block hidden ">Shorts</span>
        <SiYoutubeshorts className='h-5 w-5'  />
        </Link> 
        <Link to="/"
        className="p-2 text-white transition-colors relative  group duration-200 bg-red-500 rounded-full hover:text-light hover:bg-red-700 bg-dark focus:outline-none   focus:bg-red-700 focus:ring-red-700"   >
        <span className="sr top-0 left-10 text-[12px] font-medium  group-hover:block hidden ">Subscriptions</span> 
        <MdSubscriptions className='h-5 w-5'  />
        </Link>
        <Link to="/"
        className="p-2 text-white transition-colors relative  group duration-200 bg-red-500 rounded-full hover:text-light hover:bg-red-700 bg-dark focus:outline-none   focus:bg-red-700 focus:ring-red-700"   >
        <span className="sr top-0 left-10 text-[12px] font-medium  group-hover:block hidden ">Playlist</span>
      <BiSolidPlaylist className='h-5 w-5'  />
        </Link>
    </div>
 
    <div className="flex items-center justify-center flex-shrink-0"> 
        <button
               className="p-1.5 text-white transition-colors relative  group duration-200 bg-red-500 rounded-full hover:text-light hover:bg-red-700 bg-dark focus:outline-none   focus:bg-red-700 focus:ring-red-700" >
        <span className="sr top-0 left-10 group-hover:block hidden  text-[12px] font-medium">Logout</span>
      <BiLogOut className='h-5 w-5 mr-0.5'  />
        </button>
    </div>
    </nav>
</aside>
</>

   )
}
 