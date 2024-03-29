import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Pills = ({categories,selectedCategory,onSelect}) => {
    const nav=useNavigate() 
  return ( 
     <>
        {categories.map(category => (
            <Button
            data={category} 
            onClick={() =>{ onSelect(category);category==="Video"?nav('/'):nav('/Shorts')} }
            className={`${selectedCategory===category ?"border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200":"text-white bg-white/10"} text-sm rounded-lg whitespace-nowrap`}
            >
            {category}
          </Button>
        ))} 
        </>
  )
}

export default Pills