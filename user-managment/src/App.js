import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import { Formik } from 'formik';
import Login from './Login';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';

import './App.css';
function App() {
  
   return ( 

    <div className="container">
      
      <Routes> 
      <Route path="/Home" element={<Home />}>
     
      </Route>
      <Route path="/" element={<Login />}>
     
      </Route>
      
      </Routes>
  
</div>
  );
}

export default App;
