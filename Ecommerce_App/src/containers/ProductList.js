import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ProductComponent } from './ProductComponent'
import axios from 'axios';
import {setProducts} from '../redux/actions/productActions'

export const ProductList = () => {

  const products = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {

        console.log("Err: ", err);
      });

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  
  return (
    <div className='ui grid container' >
      <ProductComponent/>
    </div>
  )
}
