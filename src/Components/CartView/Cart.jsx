import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert'

import { CartContext } from '../../Context/CartContext';
import CartItem from './CartItem'
import './Cart.css'

const ContainerTotalPrice = (props) => {
    const { total = 0, clearCart } = props;

    const buy = () => {
        clearCart();
        swal({
            title: "Thanks for shop with us!",
            text: `Your products awaits for devlivery to your home, Yayyy!`,
            icon: "success",
            button: "Aww hanks!",
        })
    }

    return (
        <div className="container-total">
            <p className="total-price">Total Price: {total} $$</p>
            <button className="button-clear" onClick={() => clearCart()}>Clear All</button>
            <button className="button-terminate" onClick={() => buy()}>Terminate</button>
        </div>
    )
}

const Cart = (props) => {
    const { cart, removeItem, clear } = useContext(CartContext);
    console.log('cart component value:', cart)

    const total = cart.reduce((acc, item) => {
        return acc + (item.item.price * item.quantity)
    }, 0)

    console.log(total)

    return (
        <>
            <div>
                {cart && cart.length > 0 ? cart.map(item => (<CartItem item={item} removeItem={removeItem} />)) :
                    <h1 className="cart-message">You didn't put anything in the cart, please click: <Link to="/">here</Link> to go to Home .*</h1>}
            </div>
            {total > 0 ?
                <ContainerTotalPrice total={total} clearCart={clear} />
                : null
            }
        </>
    )
}

export default Cart