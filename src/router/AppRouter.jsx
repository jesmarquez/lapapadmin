import { Routes, Route, Navigate } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { AdminRoutes } from "../admin/routes/AdminRoutes"
import { AppHome } from "../home/AppHome"

export const AppRouter = () => {
  return (
    <Routes>
        {/** Login */}
        <Route path="/auth/*" element= { <AuthRoutes/> } />
        {/** Admin */}
        <Route path="/admin/*" element= { <AdminRoutes/> } />

        <Route path="/*" element= { <AppHome/> } />
    </Routes>

  )
  // https://stackoverflow.com/questions/70260455/react-router-v6-not-rendering-in-production
}
