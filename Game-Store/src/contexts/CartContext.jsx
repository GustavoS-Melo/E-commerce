import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }){

    // Initializes by reading from localStorage
    const [cartItems, setCartItems] = useState(() => {
        try{
            const storedCart = localStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : [];
        } catch {
            localStorage.removeItem('cart');
            return [];
        }
        
    });

    // It always saves when the cart changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

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
        setCartItems([]);
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