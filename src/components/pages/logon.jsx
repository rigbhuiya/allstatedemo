import React, { Component } from 'react';
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

class Logon extends Component {

    send
    constructor(){
        super();
        this.state={
            username:"",
            password:"",
            login:false,
            token:null
        }
    }
    login(){
        
        fetch('http://localhost:8085/authenticate',{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(this.state)
        }).then((resp)=>{
            resp.json().then((result)=>{
                console.warn(result)
            })
        })
          
      
            //console.warn("details",this.state);
        console.log(this.state)
            console.log("123")
        }

     
    render() { 
        return (
            <div>
                
            
                <form >
                <input type="text" name="email" placeholder="Email" onChange={(e)=>this.setState( {username:e.target.value})} />
          <input type="password" name="password" placeholder="Password" onChange={(e)=>this.setState( {password:e.target.value})}/>
          <button type="button" onClick={()=>{this.login()}}>Login</button>
                </form>
            
           
  
            </div>
          );
    }
}
 
export default Logon;

