import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks"
import { Google } from "@mui/icons-material"
import { Grid, TextField, Typography, Button, Alert } from "@mui/material"
import { useForm } from "../../hooks";

const formData = {
  email: '',
  password: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe tener un @'],
  password: [ (value) => value.length >= 6, 'El password debe ser mayor 6 caracteres']
}

export const LoginPage = () => {

  const { status  } = useSelector( state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [ formSubmitted, setFormSubmitted ] = useState(false);

  const { email, emailValid, 
    password, passwordValid, 
    onInputChange, formState, isFormValid } = useForm(
    formData, formValidations);

  const isAuthenticating = useMemo( () => status === 'checking', [status]);
  
  
  const onLogin = () => {
    console.log('login!');
    navigate('/admin/dashboard', {
      replace: true      
    });
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log('submit login');
    console.log(formState);
    setFormSubmitted(true);
    // dispatch( checkingAuthentication())

  }

  const onGoogleSignIn = () => {
    console.log('Google sign IN')
    dispatch( startGoogleSignIn() )
  }

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
      

        { !isFormValid && formSubmitted ? 
          <Alert severity="error">invalido form</Alert>
        : ''}

        <form onSubmit={ onSubmit }>

          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label="Email"
                type="email"
                placeholder="email@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
                error={ !!emailValid && formSubmitted }
                helperText= { emailValid }
                fullWidth
              >
              </TextField>
            </Grid>
            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField
                label="Password"
                type="password"
                placeholder="Your password!"
                name="password"
                value={ password }
                error={ !!passwordValid && formSubmitted }
                helperText= { passwordValid }
                onChange={ onInputChange }
                fullWidth
              >
              </TextField>
            </Grid>
          </Grid>
          <Grid>
            <Grid container spacing={ 2 } sx={{ mt:2 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button
                  disabled={ isAuthenticating }
                  variant="contained" 
                  fullWidth
                  type="submit"
                  // onClick={ onLogin }
                  >
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={6 }>
                <Button
                  disabled={ isAuthenticating }
                  variant="contained"
                  onClick={ onGoogleSignIn }
                  fullWidth>
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
