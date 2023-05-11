import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import "./App.css";
import Header from "./components/Header";
import MenuContainer from "./components/MenuContainer";
import { useEffect, useState } from "react";
import BannerName from "./components/BannerName";
import Banner from "./images/banner2.png";
import SubMenuContainer from "./components/SubMenuContainer";
import { MenuItems, Items } from "./components/Data";
import MenuCard from "./components/MenuCard";
import ItemCard from "./components/ItemCard";
import DebitCard from "./components/DebitCard";
import CartItem from "./components/CartItem";


function App() {
  // Main Dish State

  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  );

  useEffect(() => {
    // Bottom Menu Active
    const menuList = document.querySelectorAll("#menu li");
    function setMenuActive() {
      menuList.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuList.forEach((n) => n.addEventListener("click", setMenuActive));

    // Menucard Active
    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");
    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData]);

  //set main dish items on filter
  const setData = (itemId) => {
    setMainData( Items.filter((element) => element.itemId === itemId ))
  }

  return (
    <div className="App">
      {/* Header Section */}
      <Header />

      {/* main container */}
      <main>
        <div className="mainContainer">
          {/* Banner */}
          <div className="banner">
            <BannerName name={"Subrat"} discount={20} link={"#"} />
            <img src={Banner} alt="" className="deliveryPic" />
          </div>

          {/* dishContainer */}
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Catagory"} />
            </div>

            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={()=>setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id === 1 ? true : false}
                    />
                  </div>
                ))}
            </div>

            <div className="dishItemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                    itemId={data.id}
                  />
                ))}
            </div>
          </div>
        </div>

        {/* Right Menu Container */}
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>
          <div className="cartCheckOutContainer">
            <SubMenuContainer name={"Cart Items"} />
            <div className="cartContainer">
              <div className="cartItems">
                <CartItem 
                  name={'Burger Bristo'}
                  imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink2.png?alt=media&token=872c5ddd-23ae-4f1e-b1dd-18d375240ba6"}
                  qty={4}
                  price={7.95}
                />
              </div>
            </div>

            <div className="totalSection">
              <h3>Total</h3>
              <p><span>$</span> 45.0</p>
            </div>
            <button className="checkOut">Check Out</button>
          </div>
        </div>
      </main>

      {/* bottom section */}
      <div className="bottomMenu">
        <ul id="menu">
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<HomeRounded />} isHome/>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Chat />} />
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded />} />
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Favorite />} />
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<SummarizeRounded />} />
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Settings />} />

          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
