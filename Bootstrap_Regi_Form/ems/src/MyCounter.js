import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { INC ,DEC} from './action/counteraction';

export const MyCounter = () => {

    const data = useSelector(y=>y);

    const dis = useDispatch();

    const icre = () => {
        dis(INC())
    }

    const dere = ()=>{
        dis(DEC())
    
    }

  return (
    <div>
        {data}

        <button onClick={icre}>+</button>
        <button onClick={dere}>-</button>
    </div>
  )
}
