import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
import { db } from "../../Firebase/Firestore"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

import { CartContext } from '../../Context/CartContext';
import CartItem from './CartItem'
import './Cart.css'

const DatosComprador = {
    nombre: "Flor",
    apellido: "Annie",
    email: "fav.hala@gmail.com"
};

const ContainerTotalPrice = (props) => {
    const { total = 0, buy, clearCart } = props;

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

    const buy = () => {
        const ventasCollection = collection(db, "sells");
        console.log('starts buy')
        addDoc(ventasCollection, {
            comprador: DatosComprador,
            items: cart,
            date: serverTimestamp(),
            total: total,
        })
            .then(result => {
                console.log('buy complete');
                swal({
                    title: "Thanks for shop with us!",
                    text: `Your products awaits for devlivery to your home, Yayyy!`,
                    icon: "success",
                    button: "Aww hanks!",
                })
                clear()
            })
            .catch(e => {
                console.log('ups error')
                console.error(e)
            })
    }

    return (
        <>
            <div>
                {cart && cart.length > 0 ? cart.map(item => (<CartItem item={item} removeItem={removeItem} />)) :
                    <h1 className="cart-message">You didn't put anything in the cart, please click: <Link to="/">here</Link> to go to Home .*</h1>}
            </div>
            {total > 0 ?
                <ContainerTotalPrice total={total} clearCart={clear} buy={buy} />
                : null
            }
        </>
    )
}

export default Cart