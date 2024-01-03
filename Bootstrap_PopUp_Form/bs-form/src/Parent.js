import React, { useState } from 'react'
import { MyForm } from './MyForm';
import Button from 'react-bootstrap/button'
import { DisplayData } from './DisplayData';

export const Parent = () => {

const [open,setOpen] = useState(false);

const [data,setData]= useState([]);

const [id,setId] = useState(0);

console.log(data);

const handleShow = () => {
    setOpen(true)
}

const handleClose = () => {
    setOpen(false)
}

const editd = (id)=>{

  setId(id);
  setOpen(true);


}

  return (
    <div>
       <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

        <MyForm show={open} close={handleClose} 
        
        arraydata = {data}  arraysetData={setData}

         id={id} setID={setId}
        />

    <DisplayData rows={data}  changeArray={setData}  setID={editd}  />

    </div>
  )
}
