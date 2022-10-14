import React, { createContext, useState, useEffect } from 'react';


export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)

    const updateQuantity = () => {
        let _quantity = 0;
        cart.forEach((item) => {
            _quantity = _quantity + item.quantity
        })
        setQuantity(_quantity)
    }

    useEffect(() => {
        updateQuantity()
    }, [cart])

    const addItem = (item, quantity, config) => {
        const itemIndex = cart.findIndex(itemCart => itemCart.item.id === item.id)

        if (itemIndex === -1) {
            const newItem = { item, quantity, config }
            setCart([...cart, newItem])
        } else {
            cart[itemIndex].quantity = quantity
            setCart([...cart])
        }
    }

    const removeItem = (_id) => {
        const arrayFilter = cart.filter((item) => { return item.item.id !== _id })
        setCart([...arrayFilter]);
    }

    const isInCart = (_id) => {
        return cart.some((item) => item.id === _id);
    }

    const clear = () => {
        setCart([]);
    }


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, isInCart, clear, quantity }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider