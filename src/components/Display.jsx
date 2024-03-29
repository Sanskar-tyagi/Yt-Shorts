import React from 'react'
import { Link } from 'react-router-dom'

const Display = ({data}) => { 
    const {id,thumbnailUrl,title,channel,views,channelLogo,duration,time} = data
  return (
    <div
      className="flex flex-col gap-2 text-white" 
    >
      <Link to={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          className={`block w-full h-full  object-cover  rounded-xl
          }`}
        />
        <div className="absolute bottom-1 right-1 bg-gray-900/70 m-1 text-secondary text-sm px-0.5 rounded">
        {duration}
        </div> 
      </Link>
      <div className="flex gap-2">
        <a className="flex-shrink-0">
          <img className="w-12 h-12 rounded-full" src={channelLogo} />
        </a>
        <div className="flex flex-col cursor-pointer ">
          <a  className="rb-md pr-8 hover:text-gray-200">
            {title}
          </a>
          <a className="text-[#aaa] rb-r text-sm">
            {channel}
          </a>
          <div className="text-[#aaa] rb-r text-sm">
            {views} views • {time}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Display