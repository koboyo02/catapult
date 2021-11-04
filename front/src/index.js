import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Connect from './Connect';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
  {/* <Redirect from="/" to="/login" /> */}
   <Route path="/login" component={App}/> 
   <Route exact path="/connect" component={Connect}/>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
