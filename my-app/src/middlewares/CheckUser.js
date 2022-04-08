import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'


const CheckUser = (props) => {
    const isUser = localStorage.getItem('user')
    if(!isUser){
        return <Navigate to='/'/>
    }
  return (
    props.children
  )
}

export default CheckUser