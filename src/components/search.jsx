import React from 'react'
import { FiSearch } from "react-icons/fi";
const Search = () => {
  return (
    <div className="relative  flex justify-center items-center rounded-full overflow-hidden border-2 shadow-xl ">
        {/* w-3/4 */}
    <input
      type="text"
      name="text"
      placeholder="Start typing to search..."
      className="input bg-transparent outline-none  border-none pl-6 pr-10 py-2 w-full font-sans text-lg font-semibold"
    />
    <div className="relative -left-3">
      <button
        className="w-8 h-8 rounded-full bg-violet-500 border-2 group shadow-xl flex items-center justify-center relative overflow-hidden"
      >
        <FiSearch className="relative  z-10 fill-black duration-1000  group-hover:fill-violet-500" height={"32px"} strokeWidth={"3"} width={"32px"} fill='white'/>
        
        <div
          className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"
        ></div>
        <div
          className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000"
        ></div>
      </button>
    </div>
  </div>
  
  )
}

export default Search