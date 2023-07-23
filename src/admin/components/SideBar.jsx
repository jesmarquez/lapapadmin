import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth}, flexShrink: { sm: 0 }}}
    >

      <Drawer
            variant='permanent'
            open={ true }
            sx={{
                display: { xs: 'block'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
      >
        <Toolbar/>
        <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}

          <ListItem key={ 'Customer' } disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary={'Customer'} />
            </ListItemButton>
          </ListItem>
      </List>

      </Drawer>
    </Box>
  )
}
