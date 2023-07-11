import { Google } from "@mui/icons-material"
import { Grid, TextField, Typography, Button } from "@mui/material"

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
      >

      <Grid item
        className= 'box-shadow'
        xs={ 3 }
        sx={ { backgroundColor: 'white', padding: 3, borderRadius: 2 } }
      >
        <Typography variant='h5'>Login</Typography>
        <form action="">

          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label="Email"
                type="email"
                placeholder="email@google.com"
                fullWidth
              >
              </TextField>
            </Grid>
            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField
                label="Password"
                type="password"
                placeholder="Your password!"
                fullWidth
              >
              </TextField>
            </Grid>
          </Grid>
          <Grid>
            <Grid container spacing={ 2 } sx={{ mt:2 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={6 }>
                <Button variant="contained" fullWidth>
                  <Google/>
                  <Typography sx={{ ml: 1 }}>
                    Google
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}
