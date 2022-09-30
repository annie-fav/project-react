import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';
import CartItem from './CartItem'
import './Cart.css'

// const Cart = (props) => {
//     const { cart } = useContext(CartContext);

//     return (
//         <>
//             {cart.length === 0 ?
//                 cart.map(item => (<CartItem item={item} />))
//                 : (
//                     <div>
//                         {cart && cart.map(item => (<CartItem item={item} />))}
//                     </div>
//                 )}
//         </>
//     )
// }

const Cart = (props) => {
    const { cart } = useContext(CartContext);
    console.log('cart component value:', cart)
    return (
        <>
            <div>
                {cart && cart.map(item => (<CartItem item={item} />))}
            </div>
        </>
    )
}

export default Cart