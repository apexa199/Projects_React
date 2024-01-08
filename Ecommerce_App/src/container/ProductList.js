import React, {  } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const ProductList = () => {


    const products = useSelector(y => y);

    console.log(products); 

    return (
    <div className='ui grid container'>
        <h1>ProductList</h1>
    </div>
  )
}
