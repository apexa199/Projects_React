import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { INC ,DEC,MUL,DIV} from './action/counteraction';

export const MyCounter = () => {

    const data = useSelector(y=>y);

    const dis = useDispatch();

    const icre = () => {
        dis(INC())
    }

    const dere = ()=>{
        dis(DEC())
    
    }

    const mul = ()=>{
      dis(MUL())
  
  }

  const devi = ()=>{
    dis(DIV())

}

  return (
    <div>
        {data}

        <button onClick={icre}>Plus</button>
        <button onClick={dere}>Minus</button>
        <button onClick={mul}>Multi</button>
        <button onClick={devi}>Divide</button>
        

    </div>
  )
}
