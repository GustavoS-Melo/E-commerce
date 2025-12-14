import './styles.scss';
import { useCart } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'

export default function Header(){

    const { cartItems } = useCart();

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <header className='header'>
            <div className="header_container">
                {/*Logo*/}
                <div className="header_logo">
                    <span>Black</span>Screen
                </div>

                {/*Nav*/}
                <nav className="header_nav">
                    <a href="#">Home</a>
                    <a href="#">Loja</a>
                    <a href="#">Promoções</a>
                    <a href="#">Contato</a>
                </nav>

                {/* Actions btns */}
                <div className="header_actions">

                    <button className="btn btn--ghost">
                        Entrar
                    </button>

                    <Link to='/cart' className="btn btn--primary header_cart">
                        Carrinho
                        {totalItems > 0 && (
                            <span className='cart-count'>{totalItems}</span>
                        )}
                    </Link>

                </div>
            </div>
        </header>
    );
}