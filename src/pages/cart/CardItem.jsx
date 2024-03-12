import React,{ useContext } from 'react'
import{ ShopCont }from '../../context/shop-context'

export const CardItem = (props) => {
    const {id,productName,price,productImage} = props.data
    const { cartItem, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopCont)
  return (
    <div className='cartItem'>
        <img src={productImage} alt='none'/>
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
            <div className='countHandler'>
                <button onClick={()=> removeFromCart(id)}>-</button>
                <input value={cartItem[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value),id)}/>
                <button onClick={()=> addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}

