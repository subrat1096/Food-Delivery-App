import React, { useEffect } from 'react'
import {} from "@mui/material"
import { SearchRounded, ShoppingCartRounded, BarChart } from "@mui/icons-material"
import Logo from '../images/Backery logo.png'
import Profile from '../images/profile.jpg'


function Header() {

    useEffect(() => {
        const toggle = document.querySelector(".toggleIcon");
        toggle.addEventListener("click", () => {
          document.querySelector(".rightMenu").classList.toggle("active");
        });
      }, []);

  return (
    <header>
        <img src={Logo} alt="" className='logo'/>

        <div className="inputBox">
            <SearchRounded className="searchIcon"/>
            <input type="text" placeholder='Search' /> 
        </div>

        <div className="shoppingCart">
            <ShoppingCartRounded className='cart'/>
            <div className="cart_content">
                <p>2</p>
            </div>
        </div>

        <div className="profileContainer">
            <div className="imgBox">
                <img src={Profile} alt="" className='profilePic'/>
            </div>

            <h2 className="userName">Subrat Behera</h2>
        </div>

        <div className="toggleMenu" >
            <BarChart className="toggleIcon" id="rightMenu"/>
        </div>
    </header>
  )
}

export default Header