import React, { useContext } from 'react'
import icon from '../../Assets/cart-icon.jpg'
import { CartContext } from '../../Context/CartContext';


const CartWidget = () => {
    const { quantity } = useContext(CartContext);

    return (
        <>
        { quantity === 0 ?
        <div className='cart-widget-container'> 
        <img id="icon" src={icon} alt="cart" />
        </div>
        :
        <div className='cart-widget-container'> 
        <p className="quantity">{quantity}</p>
        <img id="icon" src={icon} alt="cart" />
        </div>
        }
        </>
    )
}

export default CartWidget