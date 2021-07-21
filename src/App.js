import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import SideBar from './components/sidebar'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from 'react';
import SignIn from './components/pages/signin';
import SignUp from './components/pages/signup';
import ForgotPassword from './components/pages/forgot-password';

function App() {
  return (
    <React.Fragment>

      <Router>

        <NavBar />

        <Switch>
          <Route path='/signin' exact component={SignIn}></Route>
          <Route path='/signup' exact component={SignUp}></Route>
          <Route path='/forgotpassword' exact component={ForgotPassword}></Route>
        </Switch>

      </Router>

    </React.Fragment>



  );
}

export default App;
