import React from 'react'

const Dialog = ({ isOpen, setIsOpen, children }) => {
  return (
    <>
      {isOpen && (<div className={`Dialog ${isOpen ? 'tracking-in-expand-forward-top' : ''}`}>
        <button onClick={() => setIsOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        {children}
      </div>)}
    </>
  )
}

export default Dialog