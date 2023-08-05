import { Routes, Route, Navigate } from "react-router-dom"
import { CustomerPage } from "../pages/CustomerPage"
import { MainPage } from "../pages/MainPage"
import { MealPage } from "../pages/MealPage"

export const AdminRoutes = () => {
  return (
    <Routes>
        <Route path="dashboard" element={ <MainPage/> }/>
        <Route path="customers" element={ <CustomerPage/> }/>
        <Route path="meals" element={ <MealPage/> }/>
        {/* <Route path="/*" element={ <Navigate to="/admin"/>} /> */}

    </Routes>
  )
}
