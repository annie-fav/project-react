import React, { useContext } from 'react'
import { Link } from 'react-router-dom';



import { CartContext } from '../../Context/CartContext';
import CartItem from './CartItem'
import './Cart.css'



const ContainerTotalPrice = (props) => {
    const { total = 0, /*buy*/ clearCart } = props;

    return (
        <div className="container-total">
            <p className="total-price">Total Price: {total} $$</p>
            <button className="button-clear" onClick={() => clearCart()}>Clear All</button>
            <Link className="link-checkout"to="/form">Go to Chekout</Link>
            {/* <button className="button-terminate" onClick={() => buy()}>Go to Checkout</button> */}
        </div>
    )
}

const Cart = (props) => {
    const { cart, removeItem, clear, /*buy*/ } = useContext(CartContext);
    console.log('cart component value:', cart)

    const total = cart.reduce((acc, item) => {
        return acc + (item.item.price * item.quantity)
    }, 0)

    
    //  doc, updateDoc
    // const  actualizarStock = () => {
    //     const upDateStock = doc(db, "products", id)
    //     updateDoc(upDateStock, {stock: 50})    
    // }

    return (
        <>
            <div>
                {cart && cart.length > 0 ? cart.map(item => (<CartItem item={item} removeItem={removeItem} />)) :
                    <h1 className="cart-message">You didn't put anything in the cart, please click: <Link to="/">here</Link> to go to Home .*</h1>}
            </div>
            {total > 0 ?
                <ContainerTotalPrice total={total} clearCart={clear} /*buy={buy}*/ /> 
                : null
            }
               
  
        </>
    )
}

export default Cart