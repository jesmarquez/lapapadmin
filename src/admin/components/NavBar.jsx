import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const NavBar = ({ drawerWidth = 240 }) => {
  const navigate = useNavigate();

  const onLogoutClick = () => {
    // console.log('logout');
    navigate('/auth/login', {
      replace: true
    });

  }

  return (
    <AppBar
        position='fixed'
        sx={{
            width: { sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `${ drawerWidth }px` }
        }}
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge='start'
                sx={{ mr: 2, display: { sm: 'none'} }}
            >
                <MenuOutlined>

                </MenuOutlined>
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'>Lapapa Admin</Typography>
                <IconButton 
                  color='error'
                  onClick={ onLogoutClick }
                >
                    <LogoutOutlined/>
                </IconButton>
            </Grid>
        </Toolbar>

    </AppBar>
  )
}
