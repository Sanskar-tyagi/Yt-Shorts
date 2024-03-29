import React from 'react'

const SmThumbnail = ({data}) => {
  return (
    <div className="flex">
    <img src={data.thumbnailUrl} className='w-44 rounded-md' alt="" />
    <div className="flex flex-col ml-3">
      <div className="text-white text-md font-semibold flex items-center">
        {data.title}
      </div>
      <div className="text-white/[0.7] text-sm">
        {data.channel}
      </div>
      <div className="text-white/[0.7] flex gap-5 text-xs"> 
      {data.views} views • {data.time} 
      </div>
      </div>
  </div> 
  )
}

export default SmThumbnail