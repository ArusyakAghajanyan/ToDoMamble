import React from 'react';


export default function Confirm() {
    return (
        <>
        <div className="backdrop"></div>
        <div className="modal">
          <p>Are you sure you want to continue?</p>
          <button onClick={()=> {
              confirmDelete("no");
              
          }}>No</button>
          <button onClick={()=> {
              confirmDelete("yes");
              
          }}>Yes</button>
        </div>
      </>
    )
}
