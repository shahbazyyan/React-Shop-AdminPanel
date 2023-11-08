import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';
import CartItems from "../Components/CartItems/CartItems";

export const ShopContext = createContext(null);

function getDefaultCart () {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
      cart[i] = 0;
  };
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());
  

  function addToCart (itemId) {
    setCartItem((prev) => ({
      ...prev, [itemId]:prev[itemId]+1
    }));
    
  };

  function removeToCart (itemId) {
    setCartItem((prev) => ({
      ...prev, [itemId]:prev[itemId]-1
    }));
  };

  function getTotalCartAmount () {
   let totalAmount = 0;
   for (const item in cartItem) {
    if (cartItem[item] > 0) {
      let itemInfo = all_product.find((product) => product.id === Number(item));
      totalAmount += itemInfo.new_price * cartItem[item];
    };
   };
   return totalAmount;
  };

  function getTotalCartItems () {
    let totalItem = 0;
    for (const item in cartItem) {
      if(cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };

  const contextValue = {getTotalCartItems, getTotalCartAmount, all_product, cartItem, addToCart, removeToCart};

   return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
   )
};

export default ShopContextProvider;