import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getUserList2 } from './asyncaction/postAsynAction';



export const ProductThunk = () => {

    const dis = useDispatch();

    const data = useSelector(y => y.post)

    console.log(data)

    useEffect(() => {

        dis(getUserList2())
},[])

  return (
    <div>hello</div>
  )
}
