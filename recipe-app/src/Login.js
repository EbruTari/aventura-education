import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import './Login.css';
import App from './App';

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>LOGİN</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            if (!values.password) {
              alert('Please enter a password');
              setSubmitting(false);
            } else {
              navigate('/App');
            }
          }}
        >
          <Form>
            <label htmlFor="firstName">Fırst Name</label>
            <Field id="firstName" name="firstName" placeholder="ebru"/>

            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="tarı" />

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="ebrus1923"
              type="password"
            />
            <button type="submit" className="login-btn" required>
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;



// import React from 'react';
// import { useFormik } from 'formik';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// function Login() {
//   const navigate = useNavigate();

//   // useFormik hooks'u ile formik'in formları handle etmesini sağlıyoruz
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       password: '',
//     },
//     onSubmit: values => {
//       if (!values.password) {
//         alert('Please enter a password');
//       } else {
//         // App component'ine yönlendirme yapılıyor
//         navigate('/App');
//       }
//     },
//   });

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h1>LOGIN</h1>
//         <form onSubmit={formik.handleSubmit}>
//           <label htmlFor="firstName">First Name</label>
//           <input
//             id="firstName"
//             name="firstName"
//             type="text"
//             onChange={formik.handleChange}
//             value={formik.values.firstName}
//           />

//           <label htmlFor="lastName">Last Name</label>
//           <input
//             id="lastName"
//             name="lastName"
//             type="text"
//             onChange={formik.handleChange}
//             value={formik.values.lastName}
//           />

//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             onChange={formik.handleChange}
//             value={formik.values.password}
//           />

//           <button type="submit" className="login-btn">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;







// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Input, Button, Menu, Layout } from 'antd';
// import { NavLink, useNavigate } from 'react-router-dom';
// import Login from './Login.js';
// import Sign from './Sign.js';

// const { Meta } = Card;
// const { Search } = Input;
// const { Header } = Layout;

// function App() {
//   const [recipes, setRecipes] = useState([]);
//   const [searchText, setSearchText] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const apiKey = 'YOUR_API_KEY';
//     const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&includeImages=true&query=${searchText}`;

//     axios.get(apiUrl)
//       .then(response => setRecipes(response.data.results))
//       .catch(error => console.log(error));
//   }, [searchText]);

//   const handleSearch = (value) => {
//     setSearchText(value);
//   };

//   const handleLoginClick = () => {
//     navigate('/Login');
//   };
  
//   const handleSignClick = () => {
//     navigate('/Sign');
//   };

//   return (
//     <div>
//       <Header>
//         <div className="logo" />
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
//           <Menu.Item key="1">Home</Menu.Item>
//           <Menu.Item key="2">Recipes</Menu.Item>
//           <Menu.Item key="3" style={{ float: 'right' }}>
//             <NavLink to="/Login"><Button type="primary" className='Login' onClick={handleLoginClick}>Login</Button></NavLink>
//           </Menu.Item>
//           <Menu.Item key="4" style={{ float: 'right' }}>
//             <NavLink to="/Sign"><Button type="primary" className='Sign' onClick={handleSignClick}>Sign</Button></NavLink>
//           </Menu.Item>
//         </Menu>
//       </Header>

//       <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
//         <Search
//           placeholder="Search recipes"
//           enterButton="Search"
//           size="large"
//           onSearch={handleSearch}
//         />
//       </div>

//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {recipes.map(recipe => (
//           <Card
//             key={recipe.id}
//             hoverable
//             style={{ width: 240, margin: '16px' }}
//             cover={<img alt={recipe.title} src={recipe.image} />}
//           >
//             <Meta title={recipe.title} description={recipe.summary} />
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
