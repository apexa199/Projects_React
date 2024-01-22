import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ProductComponent } from './ProductComponent'

import {fetchProducts} from '../redux/actions/productActions'

export const ProductList = () => {

  const products = useSelector((state) => state);

  const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log("Products :", products);
  
  return (
    <div className='ui grid container' >
      <ProductComponent/>
    </div>
  )
}
