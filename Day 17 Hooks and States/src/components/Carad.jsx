import React, { useEffect,useContext } from 'react'
import { counterContext } from '../context/context'

const Carad = () => {
  // clean up function
  useEffect(() => {
    alert("Navbar added")
    
    return () => {
      alert("Navbar removed")
      
    }
  }, [])
  
  const count=useContext(counterContext )

  return (
    <>
    <h2>Navbar ahi bhai</h2>
    <p>
      {count} bar daba dia
      </p></>
    
  )

}

export default Carad