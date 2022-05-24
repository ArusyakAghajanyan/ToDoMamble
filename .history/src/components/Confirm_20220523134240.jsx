import React from 'react';
import './confirm.css'

export default function Confirm({confirmDelete}) {
    return (
        <>
        <div className="backdrop"></div>
        <div className="modal">
          <p>Are you sure you want to delete?</p>
          
          <button onClick={()=> {
              confirmDelete("no");
              
          }}>No</button>
         
        </div>
      </>
    )
}
