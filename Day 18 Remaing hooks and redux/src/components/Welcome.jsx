import React from 'react'
import { useParams } from 'react-router-dom'

const Welcome = () => {
    const params = useParams();
  return (
    <div><h1> Welcome {params.username}</h1></div>
  )
}

export default Welcome