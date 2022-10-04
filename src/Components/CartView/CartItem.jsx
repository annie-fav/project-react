import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react';
import { Link } from 'react-router-dom';


const ContainerTotalPrice = (props) => {
  const { item, clear } = props;

    return (
        <div className="container-total">
        <p className= "total-price">Total Price: </p>
       <button className="button-clear" onClick= { () => clear(item.item.id)}>Clear All</button>
       </div>
    )
}

const CartItem = (props) => {
    const { item, removeItem, quantity } = props
    return (
        <>  
        { quantity === 0 ?
           <h1 className="cart-message">You didn't put anything in the cart, please click <Link to="/">here</Link> to go to Home .*</h1>
         :
         <div>
        <hr/>
            <div className="cartItem">
            <p className="cart-price" > Price: $${item.item.price} </p>
            <p className="cart-quantity">Quantity: {item.quantity} </p>
            <p className="cart-title" key={ item.item.id }> Name: { item.item.title } </p>
            <p className="cart-color" > Color: </p>
            <p className="cart-size" > Size: / </p>
            <button className="button-cart" onClick={ () => removeItem(item.item.id) }>Remove</button>
        </div>
        <hr/>
         </div>
       }
       </>
    )
}

export default CartItem


