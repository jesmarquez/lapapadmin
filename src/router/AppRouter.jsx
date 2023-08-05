import { Routes, Route, Navigate } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { AdminRoutes } from "../admin/routes/AdminRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        {/** Login */}
        <Route path="/auth/*" element= { <AuthRoutes/> } />
        {/** Admin */}
        <Route path="/admin/*" element= { <AdminRoutes/> } />

        {/* <Route path="/*" element= { <AuthRoutes/> } /> */}
    </Routes>
  )
}
