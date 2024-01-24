import React from 'react';
import {useParams } from 'react-router-dom';

export const User = () => {

    const {userid} = useParams()
    
  return (
    <div className='text-white text-2xl p-4 bg-gray-500 mx-4'>User:{userid}</div>
  )
}
