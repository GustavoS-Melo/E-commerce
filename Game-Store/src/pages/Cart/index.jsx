import { useCart } from '../../contexts/CartContext';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

export default function Cart() {

    const navigate = useNavigate();

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

    if (cartItems.lenght === 0) {
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
                        
                        <div className="cart_item_info">
                            <h3 className="cart_item_title">{item.title}</h3>
                            <p className="cart_item_description">{item.description}</p>
                        </div>

                        <div className="cart_quantity">
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
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

                <button
                    className="btn btn--primary"
                    onClick={() => {
                        clearCart();
                        navigate('/checkout/success'); 
                    }}>
                    Finalizar compra
                </button>
            </div>
        </div>
    );
}