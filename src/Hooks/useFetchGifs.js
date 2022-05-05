import { useEffect, useState } from "react"
import { getGifs } from '../Helpers/getGifs';

export const useFetchGifs = ( category) => {
  const [State, setState] = useState({
      data: [],
      loading: true
  });

  useEffect(()=> {

    getGifs(category)
    .then(img=>{

      setTimeout( ()=> {
        // console.log(img);
      setState({
        data: img,
        loading: false
      });
    },1000);
   });
  },[category]);

  // setTimeout( ()=> {
  //   setState({
  //     data: [1,2,3,4,5,6,7],
  //     loading: false
  //   })
  // },3000);
  return State;
}
