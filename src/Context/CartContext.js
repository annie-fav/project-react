import React, { createContext, useState, useEffect } from 'react';


export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)

    const updateQuantity = () => {
        const _quantity = 0;
        cart.forEach((item) => {
            _quantity = _quantity + item.quantity
        })
        setQuantity(quantity)
    }

    useEffect(() => {
        updateQuantity()
    }, [cart])

    const addItem = (item, contador) => {
        console.log('add item executed, values to save:', { item, contador })
        console.log('cart', { item, contador })
        const existItem = cart.findIndex(itemCart => itemCart.item.id === item.id)
        if (existItem !== -1) {
            setCart([...cart, { item, contador }])
        } else {
            // const updatedItem = cart.filter(item => item !== cart[existItem])
            // setCart([...cart, { ...updatedItem }])
        }
    }

    const remove = (_id) => {
        const arrayFilter = cart.filter((item) => { return item.id !== _id })
        setCart([...arrayFilter]);
    }

    const isInList = (_id) => {
        return cart.some((item) => item.id === _id);
    }

    const clear = () => {
        setCart([]);
    }


    return (
        <CartContext.Provider value={{ cart, addItem, remove, isInList, clear, quantity }}>
            {children}
        </CartContext.Provider>
    )
}

// CartProvider.name = 'CartProvider'

export default CartProvider