import React, { useContext } from 'react'
import icon from '../../Assets/cart-icon.jpg'
import { CartContext } from '../../Context/CartContext';


const CartWidget = () => {
    const { quantity } = useContext(CartContext);

    return (

        <div className='cart-widget-container'> 
        <p className="quantity">{quantity}</p>
        <img id="icon" src={icon} alt="cart" />
        </div>
    )
}

export default CartWidget