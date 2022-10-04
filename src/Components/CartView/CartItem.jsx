import React from 'react';


const CartItem = (props) => {
    const { item, removeItem, quantity } = props
    console.log(item)
    return (
        <>
            <hr />
            <div className="cartItem">
                <p className="cart-price" > Price: $${item.item.price} </p>
                <p className="cart-quantity">Quantity: {item.quantity} </p>
                <p className="cart-title" key={item.item.id}> Name: {item.item.title} </p>
                <p className="cart-color" > Color: {item.config.color}</p>
                <p className="cart-size" > Size: / {item.config.size}</p>
                <button className="button-remove" onClick={() => removeItem(item.item.id)}>Remove</button>
            </div>
            <hr />
        </>
    )
}

export default CartItem


