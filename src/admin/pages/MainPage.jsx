import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { Typography } from "@mui/material";
import { LayoutAdmin } from "../layout/LayoutAdmin";
import { ListCustomer } from "../components";

export const MainPage = () => {
  return (
    <LayoutAdmin>
      <ListCustomer/>
      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </LayoutAdmin>
  )
}
