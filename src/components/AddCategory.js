import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({setCategorias}) => {

    const [inputVlaue, setinputVlaue] = useState('');

    const handleInputChange = (e) => {
        setinputVlaue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputVlaue.trim().length >2){
         setCategorias(cats => [ inputVlaue, ...cats]);
         setinputVlaue('');
        }
      }
  return (
      <form onSubmit={handleSubmit}>
        <input
        type="text" 
        value={inputVlaue}
        onChange={ handleInputChange}
        />
    </form>
  )
}

AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired
}
