import React from 'react'
import { AppTheme } from '../theme'
import { Alert, AlertTitle, Button, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const AppHome = () => {

  const navigate = useNavigate();

  const onGoLogin = () => {
    navigate('/auth/login', {
      replace: true
    });

  }
  return (
    <AppTheme>
        <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          height="300px">
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert — <strong>check it out!</strong>
          </Alert>
          <Button
            variant='outlined'
            onClick={ onGoLogin }>
              Go login!
          </Button>
        </Grid>
    </AppTheme>
  )
}
