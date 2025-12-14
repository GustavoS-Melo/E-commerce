import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }){
    const [cartItems, setCartItems] = useState([]);

    function addToCart(game){
        setCartItems(prev => {
            const exists = prev.find(item => item.id === game.id);

            if(exists){
                return prev.map(item =>
                    item.id === game.id
                    ? { ...item, quantity: item.quantity + 1}
                    : item
                );
            }

            return [...prev, { ...game, quantity: 1 }];
        });
    }

    function removeFromCart(id){
        setCartItems(prev => prev.filter(item => item.id !== id));
    }

    function clearCart(){
        seCartItems([]);
    }

    return(
        <CartContext.Provider
        value={{
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
        }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart(){
    return useContext(CartContext);
}