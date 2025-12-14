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
                    <button className="btn btn--ghost">Entrar</button>
                    <button className="btn btn--primary">Carrinho</button>
                </div>
            </div>
        </header>
    );
}