import React, { createContext, useState, useEffect } from 'react';


export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    
    // Funciones que se ejecutan cuando cambia el estado del cart
    // Para recalcular valores
    const updateQuantity = () => {
        let _quantity = 0;
        cart.forEach((item) => {
            _quantity = _quantity + item.quantity
        })
        console.log('por aca se configura quantity')
        setQuantity(_quantity)
    }

    useEffect(() => {
        console.log('cart changed event', cart)
        updateQuantity()
    }, [cart])

    // Funciones principales para cambiar el estado
    // del cart
    const addItem = (item, quantity) => {
        console.log('add item executed, values to save:', { item, quantity })
        console.log('cart', cart) // []

        const itemIndex = cart.findIndex(itemCart => itemCart.item.id === item.id)

        if (itemIndex === -1) {
            const newItem = { item, quantity }
            setCart([...cart, newItem])
        } else {
            cart[itemIndex].quantity = quantity
            setCart([...cart])
        }
    }

    const removeItem = (_id) => {
        const arrayFilter = cart.filter((item) => { return item.id !== _id })
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

// CartProvider.name = 'CartProvider'

export default CartProvider