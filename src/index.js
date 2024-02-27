import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom"
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL} >
    <App />
  </BrowserRouter>
);


