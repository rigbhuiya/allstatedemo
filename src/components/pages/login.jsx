import React, { useEffect } from 'react';
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
import { useState } from 'react';
import GoogleLogin from 'react-google-login';

 



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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Logon({Login,error}) {

    const [details,setDetails]=useState({email:"",password:"",login:false,token:null});
    let qwe;
    const [gdetails,setGDetails]=useState({email:"",password:""});
    //const [password,setPassword]=useState("");
    const classes = useStyles();

    

    useEffect(()=>{
        Login(gdetails);
    },[gdetails]);

    // useEffect(()=>{
    //     // let store=JSON.parse(localStorage.getItem('local'));
    //     // setDetails({...details,token:store.token})
    //     console.log("yoyo");
    //    // console.log(store);
    
    // },[qwe]);

    

    const login=(e)=>{

        e.preventDefault();
        
        fetch('http://localhost:8085/authenticate',{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(details)
        }).then((resp)=>
        {
            resp.json().then((result)=>
            {
                console.warn(result)

                localStorage.setItem('login',JSON.stringify({
                    token:result.jwt
                }))

               // setDetails({...details,token:result.jwt});



               

               qwe=result.jwt;
                
                

                console.log(qwe);

                setDetails({...details,token:result.jwt});
                

                

                
                console.log(details);
            })

            

        })

        Login(details);
          
      
            //console.warn("details",this.state);
        console.log(details);
            console.log("123");
            console.log(qwe)
        }

    


    

     const responseGoogle=response=>{
         
            if(response.profileObj.email!==null){
                setGDetails({...gdetails,email:"admin@admin.com",password:"Qwer@1234"},()=>{});
                
                console.log("not null");
            }
            else
            {
                setGDetails({...gdetails,email:"min@admin.com",password:"Qr@1234"});
                console.log("null");
            }
         console.log(response.profileObj.email);
         
     }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} onSubmit={login}  >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z]+[.][a-z]{3}$" }}
                        autoFocus
                        onChange={e=>{setDetails({...details, email:e.target.value})}}
                        value={details.email}
                        
                        
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        //inputProps={{ pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&:;<>,.?/~_+-=|\]).{8,32}$"}}
                        autoComplete="current-password"
                        onChange={e=>{setDetails({...details, password:e.target.value})}}
                        value={details.password}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <GoogleLogin
                        clientId="335922090078-0boac3pbnvc05ecjiquskd9lvo2fnh1t.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    <Grid container>
                        <Grid item xs>
                            <Link href="/forgotpassword" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
        
    );
    
}