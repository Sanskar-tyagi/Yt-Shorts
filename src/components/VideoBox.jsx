import { data } from "../../data" 
import Clash from '../assets/Champion Hog Rider_! (Season Event!).mp4'
import { FaRegThumbsUp,FaRegThumbsDown, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import Recommend from "./Recommend";
import { useEffect, useRef, useState } from "react";
const VideoBox = () => {
  const curr = data[0];
  const ref=useRef(null);
  const [play,setPlaying]=useState(false)
const handlePlay=()=>{
    if (play) {
ref.current.pause();
      setPlaying(false);
    } else {
      ref.current.play();
      setPlaying(true);
    }
  }
  return (
    <div className='flex ml-5'>
      <div className="mx-5 md:w-[60vw]">
        <video src={Clash} ref={ref} autoPlay onClick={handlePlay}  className=" rounded-md">
        </video>
        <div className="details">
          <h2 className="text-xl my-2 text-white font-mono">{curr.title}</h2>
        </div>
        <div className="flex justify-between flex-col md:flex-row mt-4">
          <div className="flex">
            <div className="flex items-start ">
              <div className="flex h-11 w-11 rounded-full overflow-hidden">
                <img
                  src={curr.channelLogo}
                  alt="avatar"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col ml-3 ">
              <div className="text-white text-md font-semibold flex items-center">
                {curr.channel}

              </div>
              <div className="text-white/[0.7] text-sm">
                1.2M subscribers
              </div>
              
            </div>
            <div className="flex mx-2  cursor-pointer font-medium bg-white justify-center items-center rounded-full px-6" >
              Subscribe
            </div>
          </div>
          <div className="flex text-black dark:text-white mt-4 md:mt-0 rounded-full bg-white/[0.15]">
            <div className="flex cursor-pointer items-center justify-center text-sm px-6 my-2  border-r  ">
             {
              true ? <FaThumbsUp className="text-xl dark:text-white text-black mr-2" /> : <FaRegThumbsUp className="text-xl dark:text-white text-black mr-2" />
             }
               6.67K
            </div>
            <div className="flex items-center justify-center h-11 px-6 ">
            <FaRegThumbsDown className="text-xl dark:text-white text-black mr-2" /> 
            </div>
          </div>
        </div> 
      </div>
      <Recommend/>
    </div>
  )
}

export default VideoBox