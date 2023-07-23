import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { ListItemCustomer } from './ListItemCustomer';

export const ListCustomer = () => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItemCustomer/>
      <Divider variant="inset" component="li" />
    </List>
  )
}
