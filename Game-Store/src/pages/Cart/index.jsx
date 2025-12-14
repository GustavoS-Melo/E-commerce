import { useCart } from '../../contexts/CartContext';
import './styles.scss';

export default function Cart(){
    const { 
        cartItems, 
        removeFromCart, 
        clearCart, 
        increaseQuantity, 
        decreaseQuantity, 
    } = useCart();

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    if (cartItems.lenght === 0){
        return (
            <div className="cart container">
                <h2>Seu carrinho está vazio</h2>
                <p>Adicione jogos para continuar</p>
            </div>
        );
    }

    return (
        <div className="cart container">
            <h2>Carrinho</h2>

            <ul className="cart_list">
                {cartItems.map(item => (
                    <li key={item.id} className='cart_item'>
                        <img src={item.image} alt="" />

                        <div className="cart_quantity">
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                        </div>

                        <div className="cart_price">
                            R$ {(item.price * item.quantity).toFixed(2)}
                        </div>

                        <button 
                            className="btn btn--ghost"
                            onClick={() => removeFromCart(item.id)}>
                            Remover
                        </button>
                    </li>
                ))}
            </ul>

            <div className="cart_footer">
                <strong>Total: R$ {totalPrice.toFixed(2)}</strong>

                <button className="btn btn--primary" onClick={clearCart}>
                    Finalizar Compra
                </button>
            </div>
        </div>
    );
}