import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Goku']);
//const handleAdd = () => {
//setCategorias(['Inuyasha',...categorias]);
//setCategorias(cat => [...cat, 'Inuyasha']);
//}

  return (
      <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategorias={setCategorias}/>
    <hr/>



    <ol>
        {
            categorias.map( category => 
            <GifGrid 
            key={category}
            category={category}/>
            )
        }
    </ol>
    </>
  )
}
