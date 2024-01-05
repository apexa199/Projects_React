import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { EROR, REQT, SUCC } from './action/postAction';


export const Product = () => {

    const dis = useDispatch();

    const data = useSelector(y => y.post)

    console.log(data)

    useEffect(() => {

        dis(REQT())

        fetch("https://fakestoreapi.com/products")
        .then(y => y.json())
        .then(y => {

            dis(SUCC(y))

        }).catch(y => {

            dis(EROR(y))
        })
},[])

  return (
    <div>hello</div>
  )
}
