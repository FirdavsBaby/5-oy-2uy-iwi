import React from 'react'

const Buttons = ({children}) => {
  return (
    <button
      className="btn btn-outline-light fs-4" 
    >
      {children}
    </button>
  );
}

export default Buttons
