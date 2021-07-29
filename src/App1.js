import './App.css';
import NavBar from './components/navbar'
import SideBar from './components/sidebar'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState,useEffect } from 'react';
//import SignIn from './components/pages/signin';
import SignUp from './components/pages/signup';
import Homepage from './components/pages/homepage';
import ForgotPassword from './components/pages/forgot-password';
import Logon from './components/pages/login';


function App1() {

  const adminUser={
    email:"admin@admin.com",
    password:"Qwer@1234"
  }

  const [user,setUser]=useState({email:"",password:"",login:false,token:null});
  const [error,setError]=useState("");
  

//   useEffect(()=>{
//     setUser(change);
//     console.warn("Details set in User",user)
// },[change]);


 

  const Login=details=>{

    

    

    console.log(details);
      if(details.email==adminUser.email && details.password==adminUser.password)
      {
      console.log("Logged in");
      setUser({
        email:details.email,
      })
      }
      else
      console.log("details dont match");

   
  }

  const Logout=()=>{
    console.log("Logout");
    setUser({email:""})
    localStorage.removeItem("login");
  }

  return (

    <div>
      <Router>

       
       <Switch>
       {(user.email!="")?(
         <div>
          <div className="logged-in">
            <NavBar Logout={Logout} />
          </div>
          <div className="logged-in">
            <SideBar />
          </div>
          <Homepage />
          
          
        </div>
      ):
      (<Route path='/' exact component={()=><Logon Login={Login} error={error}/>}></Route>)
      }
           
           <Route path='/signup' exact component={SignUp}></Route>
           <Route path='/forgotpassword' exact component={ForgotPassword}></Route>
         </Switch>

       </Router>
      
    </div>
    // <React.Fragment>

    //   <Router>

    //     <NavBar />

    //     <Switch>
    //       <Route path='/signin' exact component={SignIn}></Route>
    //       <Route path='/signup' exact component={SignUp}></Route>
    //       <Route path='/forgotpassword' exact component={ForgotPassword}></Route>
    //     </Switch>

    //   </Router>

    // </React.Fragment>



  );
}

//(<Route path='/' exact component={()=><SignIn Login={Login} error={error}/>}></Route>)

export default App1;
