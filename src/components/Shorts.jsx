import React  from 'react' 
import Short from './Short';
import { shortsData } from '../../data';
import { useSearchParams } from 'react-router-dom'; 
const Shorts = () => {
    const [searchParams] = useSearchParams();
    const curr = searchParams.get('shorts');
    console.log(curr);
    return (
        <div className='shorts'>
            {
                curr &&
                <Short src={shortsData[curr].videoUrl} index={curr} icon={shortsData[curr].thumbnailUrl} name={shortsData[curr].title} /> 
            }
            {shortsData.map((item,index) => {
                return <Short src={item.videoUrl} index={index} icon={item.thumbnailUrl} name={item.title} />
            })}
        </div>
    )

}

export default Shorts