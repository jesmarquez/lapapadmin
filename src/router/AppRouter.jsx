import { Routes, Route, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { AdminRoutes } from "../admin/routes/AdminRoutes"
import { AppHome } from "../home/AppHome"
import { CheckingAuth } from "../ui/components/CheckingAuth"
import { useCheckAuth } from "../hooks"

export const AppRouter = () => {

  const { status } = useCheckAuth();

  if ( status === 'checking') {
    return <CheckingAuth/>;
  }
  return (
    <Routes>
        { status === 'authenticated'
        ? <Route path="/*" element= { <AdminRoutes/> } /> 
        : <Route path="/auth/*" element= { <AuthRoutes/> } />
        }

        {/** Login */}
        {/* <Route path="/auth/*" element= { <AuthRoutes/> } /> */}
        {/** Admin */}
        {/* <Route path="/admin/*" element= { <AdminRoutes/> } /> */}

        <Route path="/*" element= { <Navigate to='/auth/login'/> } />
    </Routes>

  )
  // https://stackoverflow.com/questions/70260455/react-router-v6-not-rendering-in-production
}
