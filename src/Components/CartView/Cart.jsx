import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import CartItem from './CartItem'
import './Cart.css'

const Cart = (props) => {
    const { cart, removeItem } = useContext(CartContext);
    console.log('cart component value:', cart)
    return (
        <>
            <div>
                {cart && cart.map(item => (<CartItem item={item} removeItem={removeItem} />))}
            </div>
        </>
    )
}

export default Cart