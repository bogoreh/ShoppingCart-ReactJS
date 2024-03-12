import React, { createContext, useState } from 'react'
import PRODUCTS from '../products';

export const ShopCont = createContext(null);
const getDefautlCart = ()=>{
    let cart = {}
    for(let i=1;i<=PRODUCTS.length;i++){
        cart[i]=0
    }
    return cart
}

const ShopContext = (props) => {
    const [cartItem,setCartItem] = useState(getDefautlCart());
    const getTotalCartAmount = () =>{
        let TotalAmount = 0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo = PRODUCTS.find((product)=>product.id===Number(item));
                TotalAmount += cartItem[item]*itemInfo.price
            }
        }
        return TotalAmount
    }
    const addToCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const  updateCartItemCount = (newAmount, itemId) =>{
        setCartItem((prev)=>({...prev, [itemId]:newAmount}))
    }
    const contextValue = {cartItem,addToCart,removeFromCart,updateCartItemCount,getTotalCartAmount}
    console.log(cartItem)
  return (
   <ShopCont.Provider value={contextValue}>{props.children}</ShopCont.Provider>
  )
}

export default ShopContext