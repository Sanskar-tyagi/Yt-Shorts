import React from 'react'
import { data ,shortsData} from '../../data'
import SmThumbnail from './SmThumbnail'
import { SiYoutubeshorts } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'
const Recommend = () => {
  const nav=useNavigate()
  return (
    <div className='flex-col flex max-w-[30vw] gap-5'>
        <SmThumbnail data={data[0]}/>
        <div className="flex flex-col text-white my-5 border-y border-gray-400 py-5">
    <div className="flex justify-start  gap-2 text-base font-medium items-center ">
    <SiYoutubeshorts className='h-5 w-5' fill='red' color='white'  /> <span className="mb-0.5">Shorts</span>
    </div>
         <div className="flex overflow-scroll mt-4 shorts_display gap-2 ">
          {shortsData.map((item,index)=>{
              return <img src={item.thumbnailUrl} onClick={()=>{nav(`/Shorts?shorts=${index}`)}} className='w-44 cursor-pointer rounded-md' alt="" />
          })}       
         </div>
        </div>
        {data.map((item)=>{
            return <>
               <SmThumbnail data={item}/> 
            </>
        })}
    </div>
  )
}

export default Recommend