import React,{useEffect,useState }from 'react';
import {Form ,Modal,Button} from 'react-bootstrap';


export const MyForm = (props) => {
  
  const [form,setform] = useState({

    firstName : "",
    lastName : "",
    address1: "",
    address2: "",
    state:""
    
  })

  useEffect(()=>{

           if(props.id)  {           
           
          let  p = props.arraydata.find((value)=>{
              return value.id == props.id;
          });

          setform(p);

           }      

  },[])

  const handleChange = (e)=>{

    setform({...form,[e.target.name]: e.target.value});

  }

  const handleSave = (e)=>{

    props.close();

    let d = [...props.arraydata];

    if(props.id  >0)
    {
        let p  =d.map((v)=>{

         if (v.id == props.id)
         {
          return {...form,id : v.id}

         }
         else{
          return v;
         }
        });
        props.arraysetData(p);
      
    }
    else

    {
      d.push({...form,id: d.length +1});
      props.arraysetData(d);
     
    }  
    
  }

return (
    <>
     <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                autoFocus
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
               
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                autoFocus
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
               
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address1"
                autoFocus
                name="address1"
                value={form.address1}
                onChange={handleChange}
               
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address2</Form.Label>
              <Form.Control
                 type="text"
                 placeholder="Address2"
                 autoFocus
                 name="address2"
                 value={form.address2}
                 onChange={handleChange}
               
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                autoFocus
                name="state"
                value={form.state}
                onChange={handleChange}
               
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</>
  )
}
