import React from 'react';
import { Button } from 'react-bootstrap';
import { AgGridReact } from 'ag-grid-react'; 
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css"; 



export const DisplayData = (props) => {

  

    const columns = [
        { field: 'firstName', headerName: 'First Name', width: 150 },
        { field: 'lastName', headerName: 'Last Name', width: 150 },
        { field: 'address1', headerName: 'Address1', width: 150 },
        { field: 'address2', headerName: 'Address2', width: 150 },
        { field: 'state', headerName:'State', width: 150 },
        {
          field: 'action',
          headerName: 'Action',
          width: 180,
          sortable: false,
          disableClickEventBubbling: true,
          
          renderCell: (params) => {

            const onClick = (e) => {

              const currentRow = params.row;
              return alert(JSON.stringify(currentRow,null))
            }

              const deleteRow = (e) => {

                let d = [...props.rows];

                const currentRow = params.row;

                let filterData = d.filter((v) => {

                  return v.id != currentRow.id
                })
              
            props.changeArray(filterData)
              };
              

              const editData = () => {

                const currentRow = params.row;

                props.setId(currentRow.id)

              }
              
              return (
                <>
                   <Button variant="primary" onClick={deleteRow}>Delete</Button>
                  <Button variant="outline-success" onClick={editData}>Edit</Button>
                </>
              );
          },
        }
  
      ];


  return (
    <div className="ag-theme-quartz" style={{ height: 500}}>
    
    <AgGridReact rowData={props.rows} columnDefs={columns} />
  </div>
  )
}
