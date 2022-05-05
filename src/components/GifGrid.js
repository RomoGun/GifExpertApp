import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

 export const GifGrid = ({category}) => {
    //data: imagenes
    const {data, loading} = useFetchGifs(category);

//     useEffect(() =>{
//         getGifs(category)
//         .then( setimages);
//     }, [category]);
//animate__zoomIn

  return (
    <>
    <h3 className="animate__animated animate__bounce">{category}</h3>
    {loading && <p className="animate__animated animate__hinge " >Loading...</p>}

    <div className='cardgrid'> 
         {
            data.map( img => (
                <GifGridItem
                key={img.id} 
                {...img}
                />
            ))
        } 
       
    </div>
    </>
  )
}
