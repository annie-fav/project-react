import React from 'react';


const CartItem = (props) => {
    const { item, removeItem } = props
    return (
        <div className="cartItem">
            <p style={{ color: 'pink' }}>{item.item.name}</p>
            <p style={{ color: 'pink' }}>{item.item.price}</p>
            <p style={{ color: 'pink' }}>{item.quantity}</p>
            <h1 key={ item.item.id }> { item.item.title } </h1>
            <button onClick={ () => removeItem(item.item.id) }>Remove</button>
        </div>
    )
}

export default CartItem