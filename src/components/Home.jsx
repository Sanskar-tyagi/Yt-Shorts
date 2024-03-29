import React, { useState } from 'react'
import { data } from '../../data'
import Display from './Display'
import Pills from './Pills'
const Home = () => {
    const categories=["Video","Shorts"]
    const [selectedCategory, setSelectedCategory] = useState(categories[0])
  return (
    <div className="container mx-10 pb-4">
        <div className="flex  gap-3 justify-start px-5  items-center h-16 mb-4">
              <Pills
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>
    <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
        {
            data.map((item)=>{
                return <>
                   <Display data={item}/>
                </>
            })
        } 
    </div>
    </div>
  )
}

export default Home