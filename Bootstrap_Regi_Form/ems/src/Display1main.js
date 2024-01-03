import React ,{useState} from 'react';
import { Display2 } from './Display2';

export const Display1main = () => {
    const[data,setdata] = useState({

        firstName: "weltec",
        lastName:"Institute"
    })
  return (
    <Display2 d = {data}>Display1</Display2>
  )
}
