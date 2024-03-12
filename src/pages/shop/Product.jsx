import React, { useContext } from 'react'
import{ ShopCont }from '../../context/shop-context'
const Product = (props) => {
    const {id,productName,price,productImage} = props.data
    const{ addToCart, cartItem } = useContext(ShopCont)
    const cartItemAmount = cartItem[id]
  return (
    <div className='product'>
        <img src={productImage} alt='none'/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>

        </div>
        <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add to Cart{cartItemAmount>0 && <>({cartItemAmount})</>}</button>
    </div>
  )
}

export default Product