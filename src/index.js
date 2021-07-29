import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import MyComponent from './components/myComponent';
import SignIn from './components/pages/signin';
import Login from './components/pages/login';
import App1 from './App1';


ReactDOM.render(

 // <Logon />
 <App1 />
 //<Login/>
 // <MyComponent />
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
