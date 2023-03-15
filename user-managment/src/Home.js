import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import { Formik } from 'formik'; 

import './App.css';
function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => { 
    axios.get('https://randomuser.me/api/?seed=foobar&results=5') 
       .then(response => {
        const usersData = response.data.results.map(user => ({
          id: user.login.uuid,
          title: user.name.title,
          firstName: user.name.first,
          lastName: user.name.last,
          gender: user.gender,  
          phone: user.cell
        }));
        setUsers(usersData); 
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const columns = [
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'gender', headerName: 'Gender', width: 250 },
    { field: 'phone', headerName: 'Phone', width: 250 },
  ];

  return (

    <div className="container">
      
  <div className="data-grid-container">
    <DataGrid 
      rows={users}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />

  </div>
</div>
  );
}

export default Home;
