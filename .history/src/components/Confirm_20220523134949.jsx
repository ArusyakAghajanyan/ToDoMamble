import React from 'react';
import './confirm.css'

export default function Confirm({confirmDelete}) {
    return (
        <>
        <div className="backdrop"></div>
        <div className="modal">
          <p className="modalP">Are you sure you want to delete?</p>
         <div>
         <button onClick={()=> {
              confirmDelete("yes");
              
          }}>Yes</button>
          <button onClick={()=> {
              confirmDelete("no");
              
          }}>No</button>
         </div>
         
        </div>
      </>
    )
}
