import React from 'react';


const CartItem = (props) => {
    const { item, removeItem } = props
    return (
        <>  
        <hr/>
            <div className="cartItem">
            <p className="cart-price" > Price: $${item.item.price} </p>
            <p className="cart-quantity">Quantity: {item.item.quantity} </p>
            <p className="cart-title" key={ item.item.id }> Name: { item.item.title } </p>
            <p className="cart-color" > Color: </p>
            <p className="cart-size" > Size: / </p>
            <button className="button-cart" onClick={ () => removeItem(item.item.id) }>Remove</button>
        </div>
        <hr/>
       </>
    )
}

export default CartItem


