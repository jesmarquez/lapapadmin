import { Typography } from "@mui/material";
import { LayoutAdmin } from "../layout/LayoutAdmin";
import Box from '@mui/material/Box';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export const MainPage = () => {
  return (
    <LayoutAdmin>
      <Typography variant="h2">
        Amet cillum qui velit eiusmod nisi eiusmod irure.
      </Typography>
    </LayoutAdmin>
  )
}
