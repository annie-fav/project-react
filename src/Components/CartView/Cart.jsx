import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import CartItem from './CartItem'
import './Cart.css'



const ContainerTotalPrice = (props) => {
    const { total = 0, clearCart } = props;

    return (
        <div className="container-total">
            <p className="total-price">Total Price: {total} $$</p>
            <button className="button-clear" onClick={() => clearCart()}>Clear All</button>
            <Link to="/form"><button className="button-checkout">Go to Chekout</button></Link>
        </div>
    )
}

const Cart = (props) => {
    const { cart, removeItem, clear } = useContext(CartContext);

    const total = cart.reduce((acc, item) => {
        return acc + (item.item.price * item.quantity)
    }, 0)

    return (
        <>
            <div>
                {cart && cart.length > 0 ? cart.map(item => (<CartItem item={item} removeItem={removeItem} />)) :
                    <h1 className="cart-message">You didn't put anything in the cart, please click: <Link to="/">here</Link> to go to Home .*</h1>}
            </div>
            {total > 0 ?
                <ContainerTotalPrice total={total} clearCart={clear}/> 
                : null
            }
        </>
    )
}

export default Cart