import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
 
export default function Counter() {

    const d = useSelector(y=>y.counter);

    const dis = useDispatch();

    const inc = ()=>{

        dis({type:"INCREMENT_ASYNC"})
    }

    const dec = ()=>{

        dis({type:"DECREMENT_ASYNC"})
    }

    const mul = ()=>{

        dis({type:"MULTIPLY_ASYNC"})
    }

    const div = ()=>{

        dis({type:"DIVIDE_ASYNC"})
    }
    
  return (
    <div>
        {d}
    
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={mul}>*</button>
        <button onClick={div}>/</button>
    
    </div>
  )
}
