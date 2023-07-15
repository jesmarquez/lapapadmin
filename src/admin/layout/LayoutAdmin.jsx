import { Box } from "@mui/material"
import { NavBar } from "../components"

export const LayoutAdmin = ({ children }) => {
  return (
    <Box sx={{ display: "flex"}}>
        <NavBar>
            
        </NavBar>
        { children }
    </Box>
  )
}
