import React from 'react'

const CartItem = (props) => {
    const { item } = props
    return (
        <div>
            <p style={{ color: 'violet' }}>{JSON.stringify(item)}</p>
        </div>
    )
}

const Cart = (props) => {
    const { productList } = props
    return (
        <div>
            {productList && productList.map(item => (<CartItem item={item} />))}
        </div>
    )
}

export default Cart