import { Outlet, Navigate } from 'react-router-dom';
import { UserProvider } from "../../contexts/UserContext"

export function ProtectedRoutes(){
  const token = localStorage.getItem("@TOKEN")
  
  return (
    <UserProvider>
      {token ? <Outlet/> : <Navigate to='/'/>}
    </UserProvider>
  )
}