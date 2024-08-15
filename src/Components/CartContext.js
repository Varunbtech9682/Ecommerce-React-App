import React, { createContext, useState, useContext } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product, image, price, quantity, color) => {
        setCartItems(prevCartItems => [...prevCartItems, { product, image, price, quantity, color }]);
    };
    const removeFromCart = (productId) => {
        setCartItems(prevCartItems => prevCartItems.filter(item => item.product.id !== productId));
    };
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>{children}</CartContext.Provider>
    );
}
export function useCart() {
    return useContext(CartContext);
}