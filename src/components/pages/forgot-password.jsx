import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.allstate.com/">
        Allstate
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ForgotPassword() {
    const classes = useStyles();
  
  
    const [userRegister, setUserRegister] = useState({
      email: "",
      password: "",
      cpassword: ""
    })
  
    // const validationSchema = yup.object().shape({
    //   password: yup.string()
    //     .required('New Password is required'),
    //   cpassword: yup.string()
    //     .required('Confirm Password is required')
    //     .oneOf([yup.ref('password'), null], 'Passwords does not match'),
    // });
  
    // const validatePassword = (password) => {
    //   let error
    //   if (!password) {
    //     error = "Confirm password"
    //   }
    //   else if (password !== document.getElementById("password").value) {
    //     error = "Passwords do not match"
    //   }
    //   return error
    // }
  
    const handleInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
  
      setUserRegister({ ...userRegister, [name]: value });
    };
  
    const [records, setRecords] = useState([]);
  
    const handleSubmit = (e) => {
  
      e.preventDefault();
  
      const newRecord = { ...userRegister, id: new Date().getTime().toString() };
  
      setRecords([...records, newRecord]);
  
      setUserRegister({ email: "", password: "", cpassword: "" })
  
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Password Reset
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z]+[.][a-z]{3}$" }}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={e => { setUserRegister({ ...userRegister, email: e.target.value }) }}
                value={userRegister.email}
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                inputProps={{ pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&:;<>,.?/~_+-=|\]).{8,32}$"}}
                required
                fullWidth
                name="password"
                label="New Password"
                type="password"
                
                id="password"
                onChange={e => { setUserRegister({ ...userRegister, password: e.target.value }) }}
                value={userRegister.password}
               
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cpassword"
                label="Confirm New Password"
                type="password"
                inputProps={{ pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&:;<>,.?/~_+-=|\]).{8,32}$"}}
                id="cpassword"
                required
                onChange={e => { setUserRegister({ ...userRegister, cpassword: e.target.value }) }}
                value={userRegister.cpassword}
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Reset Password
          </Button>
          
        </form>
        <div>
          {
            records.map((cur) => {
              const {id,email,password,cpassword}=cur;
              return (
                <div key={id}>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">{email}</li>
                    <li class="list-group-item">{password}</li>
                    <li class="list-group-item">{cpassword}</li>
                  </ul>
                  
                </div>
              )
            }
            )
          }
        </div>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}