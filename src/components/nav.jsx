import { RiMenu3Fill } from 'react-icons/ri'
import Search from './search';
import { CgProfile } from "react-icons/cg";
import yt from '../assets/yt.png'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <> 
<nav className="text-white  bg-gray-800/10 rounded-md bg-clip-padding  mb-4  shadow-[0_25px_40px_-15px_rgba(255,255,255,0.2)]  self-center  flex relative justify-between items-center mx-auto px-2 h-20"> 
    <div className="inline-flex">
    <Link to="/">
        <img src="https://download.logo.wine/logo/YouTube/YouTube-White-Full-Color-Logo.wine.png" className='w-32' alt="" />
    </Link>
    </div> 
    <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <div className="inline-block">
            <div className="inline-flex items-center max-w-full">
                <Search/>
            </div>
        </div>
    </div> 
    <div className="flex-initial">
      <div className="flex justify-end items-center relative">
       
        <div className="flex mr-4 items-center">
         
        </div>

        <div className="block">
            <div className="inline relative">
                <button type="button" className="inline-flex items-center relative px-2 border-2 rounded-full hover:shadow-lg">
                <RiMenu3Fill />

                    <div className="flex justify-center items-center h-10 w-12 mb-0.5 pl-2">
                    <CgProfile className='h-6 w-6 bg-red-600 rounded-full text-gray-900' />

                    </div>
                </button>
            </div>
        </div>
      </div>
    </div> 
</nav>
    </>
  )
}

export default Nav;