

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Input, Button, Menu, Layout, Avatar } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import Login from './Login';
// import App from './App';

// const { Meta } = Card;
// const { Search } = Input;
// const { Header } = Layout;

// function App(){
//   const [recipes, setRecipes] = useState([]);
//   const [searchText, setSearchText] = useState('');

//   useEffect(() => {
//     const apiKey = 'YOUR_API_KEY'; 
//     const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=fa19ecfac083468f83d7458c266d6f8d&includeImages=true&query=${searchText}`;
    
//     axios.get(apiUrl)
//       .then(response => setRecipes(response.data.results))
//       .catch(error => console.log(error));
//   }, [searchText]);

//   const handleSearch = (value) => {
//     setSearchText(value);
//   };

//   const navigate = useNavigate();

//   const handleLoginClick = () => {
//     navigate('/Login');
//   };

//   return (
//     <div>
//       <Header>
//         <div className="logo" />
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
//           <Menu.Item key="1">Home</Menu.Item>
//           <Menu.Item key="2">Recipes</Menu.Item>
//           <Menu.Item key="3" style={{ float: 'right' }}>
//             <Button type="primary" className='btn-login' onClick={handleLoginClick}>Login</Button>
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

