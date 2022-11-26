import React from 'react'

const Dialog = ({ isOpen, setIsOpen, children }) => {
  return (
    <>
      {isOpen && (<div className={`Dialog ${isOpen ? 'tracking-in-expand-forward-top' : ''}`}>
        {children}
      </div>)}
    </>
  )
}

export default Dialog