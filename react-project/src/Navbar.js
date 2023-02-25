import React from 'react';
import { useState } from 'react'; //usestate değişken tutuyor, let gibi
import "./Navbar.css";
export default function Navbar(){//export dışarı aktarır, her klasörde bir tane default kullanabiliyoz
    const [burger_class,setBurgerClass]=useState("burger-bar unclicked");
    const [menu_class,setMenuClass]=useState("menu hidden");
    const [isMenuClicked,setisMenuClicked]=useState(false);
    const updateMenu=()=>{
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked")// içindeki veriyi değiştirdik set ile
            setMenuClass("menu visible")
        }else{
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setisMenuClicked(!isMenuClicked);
    }
    return(
        <div style={{width:"100%",height:"100vh"}}>  
            <nav>
                <div className='burger-menu'onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
            </nav>
            <div className={menu_class}>
                <h3>company</h3>
                <h3>instagram</h3>
                <h3>twitter</h3>
                <h3>youtube</h3>
                <h3>linkedin</h3>
            </div>
        </div>
    )
}