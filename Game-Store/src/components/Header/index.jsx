import './styles.scss';

export default function Header(){
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
                    <buttom className="btn btn--ghost">Entrar</buttom>
                    <buttom className="btn btn--primary">Carrinho</buttom>
                </div>
            </div>
        </header>
    );
}