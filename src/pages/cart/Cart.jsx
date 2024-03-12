import React, { useContext } from 'react'
import PRODUCTS from '../../products'
import{ ShopCont }from '../../context/shop-context'
import { CardItem } from './CardItem'
import "./cart.css"
import { useNavigate } from "react-router-dom"


const Cart = () => {
    const { cartItem, getTotalCartAmount} = useContext(ShopCont)
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
  return (
    <div className='cart'>
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className='cartItems'>
            {PRODUCTS.map((product)=>{
                if(cartItem[product.id]!==0){
                    return <CardItem data={product}/>
                }
            })}
        </div>
        {totalAmount>0?<div className='checkout'>
            
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={()=>navigate("/")}>Continue Shopping</button>
            <button>Checkout </button>

        </div>:
        <h1>Your Cart is Empty :(</h1>
        }
        
    </div>
  )
}

export default Cart