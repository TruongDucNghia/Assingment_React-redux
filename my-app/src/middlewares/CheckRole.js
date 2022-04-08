import React from 'react'
import { Navigate } from 'react-router-dom'


const CheckRole = (props) => {
    const isAdmin = JSON.parse(localStorage.getItem('user'))
    if(!isAdmin){
        return <Navigate to='/'/>
    }
    if(isAdmin.roleId !== 1){
        return <Navigate to='/'/>
    }
  return (
    props.children
  )
}

export default CheckRole