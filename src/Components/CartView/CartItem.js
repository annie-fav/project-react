import React from 'react';


const CartItem = (props) => {
    const { item, remove } = props
    return (
        <div>
            <p style={{ color: 'violet' }}>{JSON.stringify(item)}</p>
            <h1 key={ item.id }> { item.title } </h1>
            <button onClick={ () => remove(item) }>Remove</button>
        </div>
    )
}

export default CartItem