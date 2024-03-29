import React from 'react'

const Button = ({data,onClick,className}) => {
  return (
    <div className={`${className}  inline-flex cursor-pointer items-center gap-1 rounded border  px-3 py-1.5 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100
  
  `} onClick={onClick}>
        {data}
    </div>
  )
}

export default Button