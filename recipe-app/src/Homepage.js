import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Input, Button, Menu, Layout, Avatar } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';



const { Meta } = Card;
const { Search } = Input;
const { Header } = Layout;

function Homepage(){
  const [recipes, setRecipes] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const apiKey = 'YOUR_API_KEY'; 
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=0b04f70f2e3e44498d041d5cf88895af&includeImages=true&query=${searchText}`;
    
    axios.get(apiUrl)
      .then(response => setRecipes(response.data.results))
      .catch(error => console.log(error));
  }, [searchText]);

  const handleSearch = (value) => {
    setSearchText(value);
  };//aramaya yazılan text güncellendi

  const navigate = useNavigate();

  const handleLoginClick = () => {// button tıklanılınca login sayfasına yönlendiriliyor
    navigate('Login');
  };
  
  const handleSignClick = () => {// button tıklanılınca login sayfasına yönlendiriliyor
    navigate('/Sign');
  };
  


  return (
    <div>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Recipes</Menu.Item>
          <Menu.Item key="3" style={{ float: 'right' }}>
           <NavLink to={"/Login"}> <Button type="primary" className='Login' onClick={handleLoginClick}>Login</Button></NavLink>
          </Menu.Item>
          <Menu.Item key="4" style={{ float: 'right' }}>
           <NavLink to={"/Sign"}> <Button type="primary" className='Sign' onClick={handleSignClick}>Sign</Button></NavLink>
          </Menu.Item>
        </Menu>
      </Header>
    
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
        <Search
          placeholder="Search recipes"
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {recipes.map(recipe => ( // her tarif için card oluşturuldu
          <Card
            key={recipe.id}
            hoverable
            style={{ width: 240, margin: '16px' }}
            cover={<img alt={recipe.title} src={recipe.image} />}
          >
            <Meta title={recipe.title} description={recipe.summary} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Homepage;


