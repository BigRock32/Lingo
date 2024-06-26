import React from 'react'
import { Navigate, Outlet } from 'react-router'

const PrivateRoute: React.FC = () => {
   const auth = true
  return (
    auth ? <Outlet /> : <Navigate to='login' />
  )
}

export default PrivateRoute
