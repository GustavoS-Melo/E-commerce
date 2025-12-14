import './styles.scss';
import { useCart } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Header(){

    const { cartItems } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <header className='header'>
            <div className="header_container">
                {/*Logo*/}
                <Link to='/' className="header_logo">
                    <span>Black</span>Screen
                </Link>

                {/*Nav*/}
                <nav className="header_nav">
                    <Link to='/' >Home</Link>
                    <Link to='/' >Loja</Link>
                    <Link to='/' >Promoções</Link>
                    <Link to='/' >Contato</Link>
                    
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

                <button
                    className="header_menu_btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Open menu">
                    <span />
                    <span />
                    <span />
                </button>

            </div>

            {menuOpen && (
                <nav className="header_mobile_nav">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Loja</Link>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Promoções</Link>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Contato</Link>
                    <Link to="/cart" onClick={() => setMenuOpen(false)}>
                        Carrinho ({totalItems})
                    </Link>
                </nav>
)}
                        
        </header>
    );
}