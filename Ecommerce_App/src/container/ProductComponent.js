import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setProducts} from '../redux/action/productAction'

export const ProductComponent = () => {

  const products = useSelector(y => y.allProducts.products);

  const dis = useDispatch()

  // const {id,title} = products[0];



useEffect(() => {

  fetch("https://fakestoreapi.com/products")
  .then(y => y.json())
  .then(y => {

    dis(setProducts(y.products))

  }).catch((error) => {

    console.log(error)
  })
},[])
console.log(products)

  return (
    <div className='four column wide'>
       
       <div className='ui link cards' >
          <div className='image'></div>
          <div className='content'>
            {/* <div className='header'>{title}</div> */}
          </div>
       </div>
    </div>
  )
}
 