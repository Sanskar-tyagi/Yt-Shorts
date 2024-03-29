import { useEffect, useMemo, useRef, useState } from 'react';
import { FaRegThumbsUp,FaRegThumbsDown, FaThumbsUp, FaThumbsDown, FaShare } from "react-icons/fa";
import { BiCommentDetail, BiPause, BiPlay } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { dislikeItemById, likeItemById, removeLikeById } from '../utils/useLike';
import { useSelector } from 'react-redux'; 
const useElementOnScreen = (options, targetRef) => {
    const [isVisible, setIsVisible] = useState();
    
    const callbackFunc = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    const optionMemo = useMemo(() => {
        return options;
    }, [options]);

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunc, optionMemo);
        const currentTarget = targetRef.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        };
    }, [optionMemo, targetRef]); 
    return isVisible;
};
  
  const Short = ({ src ,name,icon,index}) => {
   const isLiked = useSelector(state => {
  const likeSlice = state.like;
  if (likeSlice) {
    const likedItem = likeSlice.find(item => item.id === index);
    return likedItem ? likedItem.state : null;
  }
  return null;
});
    const videoRef = useRef(null); 
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };
    const isVisible = useElementOnScreen(options, videoRef); 
    const handleLike=(str)=>{
        if(isLiked==="liked" && str==="like"){
            removeLikeById(index)
        }else if(isLiked==="disliked" && str==="dislike"){
            removeLikeById(index)
        }else{
            if(str==="like"){
                likeItemById(index)
            }else{
                dislikeItemById(index)
            }
        }
    }
    useEffect(() => {
      if (!isVisible) { 
        videoRef.current.pause();
        setPlaying(false);
      }else{
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        setPlaying(true);
      }
    }, [isVisible, videoRef]);
    const [play, setPlaying] = useState(false);
    const onVideoPress = () => {
       if(isVisible){
        if (play) {
            videoRef.current.pause();
            setPlaying(false);
          } else {
            videoRef.current.play();
            setPlaying(true);
          }
       }
      };
      useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 32) {
                event.preventDefault(); 
            } else if (event.keyCode === 40) { 
                scrollNext();
            } else if (event.keyCode === 38) {
                scrollPrevious();
            }
        }; 
        document.addEventListener('keydown', handleKeyDown); 
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    const scrollPrevious = () => {
        if (index > 0) {
            const previousVideo = document.getElementById(`video-${index - 1}`);
            if (previousVideo) {
                previousVideo.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    };
    const scrollNext = () => {
       
            const nextVideo = document.getElementById(`video-${index + 1}`);
            if (nextVideo) {
                nextVideo.scrollIntoView({ behavior: "smooth", block: "start" });
            }
      
    };
  return (
    <div className="short relative">
    <video 
   className="short_player" 
   ref={videoRef}
   loop
   autoPlay
   onClick={onVideoPress} 
   src={src}
   />
   <div className="absolute rounded-t-md top-0  w-full " style={{background: "-webkit-linear-gradient(top, rgba(0,0,0,0.7), rgba(0,0,0,0.5),rgba(0,0,0,0.3),rgba(0,0,0,0))"}}>
   <div className="flex flex-col justify-center text-white items-start p-2"   onClick={onVideoPress} > 
        {
            play ? <BiPause className="text-xl h-7 w-7  " /> : <BiPlay className="text-xl h-7 w-7" />
        } 
   </div>
   </div>
   <div className="absolute flex flex-col bottom-0 w-full   text-white p-3 px-2 justify-start items-start "  style={{background: "-webkit-linear-gradient(bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5),rgba(0,0,0,0.3),rgba(0,0,0,0))"}}>
   <div className="flex justify-center items-center gap-1 p-2">
<img src={icon} className=" rounded-full w-10 h-10  " />
<div className="flex mx-2  cursor-pointer font-medium text-sm bg-white text-black justify-center items-center rounded-full py-2 px-4" >
              Subscribe
            </div>
        </div> 
       <span className="ml-3">
       {name}
       </span>
   </div>
   <div className="absolute flex-col gap-2 flex text-black  bottom-1 md:-right-20 right-0">
    <div className="flex flex-col justify-center cursor-pointer text-white items-center" onClick={()=>{handleLike("like")}}>
        <div className="md:bg-white/10 bg-black/40 text-sm rounded-full p-2">
        {isLiked==="liked" ? <FaThumbsUp className="text-xl h-6 w-6  " /> : <FaRegThumbsUp className="text-xl h-6 w-6" />}
        </div>
        <span className="text-sm font-semibold">
        266k Likes
        </span>

    </div>
   
    <div className="flex flex-col justify-center cursor-pointer text-white items-center" onClick={()=>{handleLike("dislike")}}>
        <div className="md:bg-white/10 bg-black/40 text-xs rounded-full p-2">
        {isLiked==="disliked" ? <FaThumbsDown className="text-xl h-6 w-6  " /> : <FaRegThumbsDown className="text-xl h-6 w-6" />}
        </div> 
        <span className="text-sm font-semibold">
        Dislike
        </span>
    </div>
    <div className="flex flex-col justify-center text-white items-center">
        <div className="md:bg-white/10 bg-black/40 text-sm rounded-full p-2">
<BiCommentDetail className="text-xl h-6 w-6  " />
        </div>
    
     <span className="text-sm font-semibold">
     1,258
        </span>
    </div>
    <div className="flex flex-col justify-center text-white items-center">
        <div className="md:bg-white/10 bg-black/40 text-sm rounded-full p-2">
<FaShare className="text-xl h-6 w-6  " />
        </div>
      
      <span className="text-sm font-semibold">
     Share
        </span>
    </div>
    <div className="flex flex-col justify-center text-white items-center">
        <div className="md:bg-white/10 bg-black/40 text-sm rounded-full p-2">
<CiMenuKebab className="text-xl h-6 w-6  " />
        </div> 
    </div>
    <div className="flex flex-col justify-center text-white items-center">
        <div className="rounded-lg p-2">
<img src={icon} className=" h-8 w-8  " />
        </div> 
    </div>
   </div>
   </div>
  )
}

export default Short
